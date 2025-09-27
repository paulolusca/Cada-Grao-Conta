
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { User } from 'firebase/auth';
import type { Unsubscribe } from 'firebase/firestore';
import { 
    Home, 
    Info,
    Lightbulb, 
    Youtube, 
    Heart, 
    BookHeart, 
    Share2, 
    Search, 
    Smartphone, 
    Monitor, 
    ArrowLeft, 
    Trash2, 
    Download,
    LoaderCircle
} from 'lucide-react';

import { Recipe, Category, Tab, ViewMode } from './types';
import { categoriesData, allRecipes, repurposingTips, educationalVideos } from './constants';
import * as firebaseService from './services/firebaseService';
import About from './src/About';

// Declare global variable for html2pdf library
declare const html2pdf: any;

// ========= HELPER & UI COMPONENTS ========= //
// Defined outside the main App component to prevent re-creation on every render.

interface IconWrapperProps {
    children: React.ReactNode;
}
const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
    <div className="w-6 h-6">{children}</div>
);

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        aria-label={`Navegar para ${label}`}
        className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg ${
            isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
        }`}
    >
        <IconWrapper>{icon}</IconWrapper>
        <span className="text-xs mt-1">{label}</span>
    </button>
);

interface RecipeCardProps {
    recipe: Recipe;
    onClick: () => void;
}
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => (
    <div
        onClick={onClick}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        aria-label={`Ver receita: ${recipe.name}`}
        className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
        <img className="h-40 w-full object-cover" src={recipe.image} alt={recipe.name} />
        <div className="p-4">
            <h3 className="font-semibold text-brand-primary">{recipe.name}</h3>
        </div>
    </div>
);


const Spinner: React.FC = () => (
    <div className="flex justify-center items-center p-8">
        <LoaderCircle className="w-12 h-12 text-brand-primary animate-spin" />
    </div>
);


// ========= MAIN APPLICATION COMPONENT ========= //

export default function App() {
    // ======== STATE MANAGEMENT ======== //
    const [activeTab, setActiveTab] = useState<Tab>('home');
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<ViewMode>('mobile');
    
    // Firebase & Favorites State
    const [user, setUser] = useState<User | null>(null);
    const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
    const [isFirebaseReady, setIsFirebaseReady] = useState(false);

    // ======== FIREBASE & AUTH EFFECT ======== //
    useEffect(() => {
        try {
            const { auth } = firebaseService.initFirebase();
            firebaseService.authSignIn(auth)
                .then((signedInUser) => {
                    setUser(signedInUser);
                    setIsFirebaseReady(true);
                })
                .catch(error => {
                    console.error("Authentication failed:", error);
                    setIsFirebaseReady(true); // Still proceed, will use local storage
                });
        } catch (error) {
            console.error("Firebase setup error:", error);
            setIsFirebaseReady(true); // Allow app to run with fallback
        }
    }, []);

    // ======== FIRESTORE FAVORITES LISTENER ======== //
    useEffect(() => {
        if (isFirebaseReady) {
            let unsubscribe: Unsubscribe = () => {};
            if (user?.uid) {
                // If user is available, use Firestore
                unsubscribe = firebaseService.onFavoritesChange(user.uid, setFavoriteRecipes);
            } else {
                // Fallback for when user is not available (e.g., auth failed)
                console.warn("User not available, using Local Storage for favorites.");
                try {
                    const localFavorites = localStorage.getItem('favoriteRecipes');
                    setFavoriteRecipes(localFavorites ? JSON.parse(localFavorites) : []);
                } catch (e) {
                    console.error("Error reading favorites from Local Storage:", e);
                    setFavoriteRecipes([]);
                }
            }
            return () => unsubscribe();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, isFirebaseReady]);

    // ======== DERIVED STATE & MEMOIZED VALUES ======== //
    const favoriteRecipeIds = useMemo(() => new Set(favoriteRecipes.map(r => r.id)), [favoriteRecipes]);

    const filteredRecipes = useMemo(() => {
        if (!searchQuery) return [];
        const lowercasedQuery = searchQuery.toLowerCase();
        return allRecipes.filter(recipe =>
            recipe.name.toLowerCase().includes(lowercasedQuery) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(lowercasedQuery))
        );
    }, [searchQuery]);


    // ======== EVENT HANDLERS ======== //
    const handleNavigation = (tab: Tab) => {
        setActiveTab(tab);
        setSelectedCategory(null);
        setSelectedRecipe(null);
        if(tab !== 'home') setSearchQuery('');
    };

    const handleSelectCategory = (category: Category) => {
        setSelectedCategory(category);
        setSelectedRecipe(null);
    };

    const handleSelectRecipe = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
    };

    const handleBack = () => {
        if (selectedRecipe) {
            setSelectedRecipe(null);
        } else if (selectedCategory) {
            setSelectedCategory(null);
        }
    };
    
    const toggleFavorite = useCallback(async (recipe: Recipe) => {
        if (!isFirebaseReady) {
            console.log("Firebase not ready. Cannot modify favorites.");
            return;
        }

        const isFavorited = favoriteRecipeIds.has(recipe.id);

        // Optimistic UI update
        const newFavorites = isFavorited
            ? favoriteRecipes.filter(r => r.id !== recipe.id)
            : [...favoriteRecipes, recipe];
        setFavoriteRecipes(newFavorites);

        try {
            if (user?.uid) {
                if (isFavorited) {
                    await firebaseService.removeFavoriteRecipe(user.uid, recipe.id);
                } else {
                    await firebaseService.addFavoriteRecipe(user.uid, recipe);
                }
            } else {
                // If no user, force local storage operation
                throw new Error("No user, using local storage fallback.");
            }
        } catch (error) {
            console.error("Favorite operation failed, UI reverted:", error);
            // Revert UI on failure
            setFavoriteRecipes(favoriteRecipes);
        }

    }, [isFirebaseReady, favoriteRecipeIds, favoriteRecipes, user]);

    const handleExportPdf = (recipe: Recipe) => {
        const element = document.getElementById(`recipe-pdf-content-${recipe.id}`);
        if(element) {
            const opt = {
                margin:       1,
                filename:     `${recipe.name.replace(/ /g, '_')}.pdf`,
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(element).save();
        }
    };


    // ======== RENDER LOGIC ======== //

    const mobileSearchBar = (
        <div className="md:hidden mb-4 relative">
            <Search className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
            <input
                type="text"
                placeholder="Buscar por nome ou ingrediente..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-amber-500 text-brand-primary"
                aria-label="Buscar por nome ou ingrediente da receita"
            />
        </div>
    );

    const renderContent = () => {
        // Search results view takes priority
        if (searchQuery) {
            return (
                <div className="p-4 md:p-6">
                    {mobileSearchBar}
                    <h2 className="text-2xl font-bold text-brand-primary mb-4">Resultados da Busca</h2>
                    {filteredRecipes.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {filteredRecipes.map(recipe => (
                                <RecipeCard key={recipe.id} recipe={recipe} onClick={() => handleSelectRecipe(recipe)} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-brand-primary">Nenhuma receita encontrada para "{searchQuery}".</p>
                    )}
                </div>
            );
        }

        // Detail screens (Recipe or Category)
        if (selectedRecipe) {
            const isFavorited = favoriteRecipeIds.has(selectedRecipe.id);
            return (
                 <div className="p-4 md:p-6" id={`recipe-pdf-content-${selectedRecipe.id}`}>
                    <img src={selectedRecipe.image} alt={selectedRecipe.name} className="w-full h-48 md:h-64 object-cover rounded-xl mb-4"/>
                    <h2 className="text-3xl font-bold text-brand-primary mb-2">{selectedRecipe.name}</h2>
                    <p className="text-brand-secondary font-medium mb-4">{selectedRecipe.category}</p>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-brand-primary mb-2">Ingredientes</h3>
                        <ul className="list-disc list-inside text-brand-primary space-y-1">
                            {selectedRecipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-brand-primary mb-2">Modo de Preparo</h3>
                        <p className="text-brand-primary leading-relaxed whitespace-pre-line">{selectedRecipe.instructions}</p>
                    </div>

                    {(selectedRecipe.source || selectedRecipe.extra) && (
                        <div className="mt-6 border-t border-gray-200 pt-4">
                            {selectedRecipe.source && (
                                <div className="mb-4">
                                    <h4 className="text-lg font-semibold text-brand-primary mb-1">Fonte da Receita</h4>
                                    <p className="text-brand-primary italic">{selectedRecipe.source}</p>
                                </div>
                            )}
                            {selectedRecipe.extra && (
                                <div>
                                    <h4 className="text-lg font-semibold text-brand-primary mb-1">Dica ou História</h4>
                                    <p className="text-brand-primary italic">{selectedRecipe.extra}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
        }
        
        if (selectedCategory) {
            return (
                <div className="p-4 md:p-6">
                    <h2 className="text-2xl font-bold text-brand-primary mb-4">{selectedCategory.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {selectedCategory.recipes.map(recipe => (
                           <RecipeCard key={recipe.id} recipe={recipe} onClick={() => handleSelectRecipe(recipe)} />
                        ))}
                    </div>
                </div>
            );
        }

        // Main Tab screens
        switch (activeTab) {
            case 'home':
                return (
                    <div className="p-4 md:p-6">
                        {mobileSearchBar}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {categoriesData.map(cat => (
                                <div key={cat.id} onClick={() => handleSelectCategory(cat)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleSelectCategory(cat)} aria-label={`Ver categoria ${cat.title}`} className="relative rounded-xl overflow-hidden cursor-pointer group focus:outline-none focus:ring-2 focus:ring-amber-500">
                                    <img src={cat.image} alt={cat.title} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                                        <h3 className="text-white font-bold text-xl">{cat.title}</h3>
                                        <p className="hidden md:block text-gray-200 text-sm">{cat.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'about':
                return <About />;
            case 'videos':
                return (
                     <div className="p-4 md:p-6">
                        <h2 className="text-2xl font-bold text-brand-primary mb-4">Vídeos</h2>
                        <div className="space-y-6">
                            {educationalVideos.map(video => (
                                <div key={video.id} className="bg-white p-4 rounded-xl shadow-sm overflow-hidden">
                                    <div className="aspect-w-16 aspect-h-9 mb-3">
                                        <iframe
                                            className="w-full h-full rounded-lg"
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <h3 className="font-semibold text-brand-primary">{video.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{video.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'favorites':
                return (
                     <div className="p-4 md:p-6">
                        <h2 className="text-2xl font-bold text-brand-primary mb-4">Minhas Receitas</h2>
                        {favoriteRecipes.length > 0 ? (
                            <div className="space-y-4">
                                {favoriteRecipes.map(recipe => (
                                    <div key={recipe.id} className="bg-white p-3 rounded-xl shadow-sm flex items-center justify-between">
                                        <div className="flex items-center" onClick={() => handleSelectRecipe(recipe)} >
                                          <img src={recipe.image} alt={recipe.name} className="w-16 h-16 object-cover rounded-lg mr-4 cursor-pointer"/>
                                          <div className="cursor-pointer">
                                              <h3 className="font-semibold text-brand-primary">{recipe.name}</h3>
                                              <p className="text-sm text-gray-500">{recipe.category}</p>
                                          </div>
                                        </div>
                                        <button onClick={() => toggleFavorite(recipe)} aria-label={`Remover ${recipe.name} dos favoritos`} className="p-2 rounded-full hover:bg-red-100 text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400">
                                            <Trash2 className="w-5 h-5"/>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                             <div className="text-center py-10">
                                 <Heart className="w-12 h-12 text-brand-secondary mx-auto mb-4"/>
                                <p className="text-brand-primary">Você ainda não favoritou nenhuma receita.</p>
                                <p className="text-sm text-gray-600">Clique no coração nas receitas para guardá-las aqui!</p>
                            </div>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800 p-4 font-inter">
            <div className={`relative flex flex-col bg-brand-bg shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${viewMode === 'mobile' ? 'w-full max-w-sm h-full' : 'w-full max-w-5xl h-[95vh]'}`}>
                {/* Header */}
                 <header className="flex items-center justify-between p-3 bg-white border-b border-gray-200 w-full flex-shrink-0">
                    { (selectedCategory || selectedRecipe) && (
                        <button onClick={handleBack} aria-label="Voltar" className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500">
                           <ArrowLeft className="w-6 h-6 text-brand-primary"/>
                        </button>
                    )}
                    <div className={`flex-grow flex ${selectedCategory || selectedRecipe ? 'justify-end' : 'justify-center md:justify-start'}`}>
                       <img src="https://i.imgur.com/8DSzz5h.png" alt="Cada Grão Conta Logo" className="h-8 md:h-10" />
                    </div>
                    { !selectedRecipe && (
                         <div className="hidden md:flex items-center space-x-2 flex-grow max-w-xs ml-4">
                            <Search className="w-5 h-5 text-gray-400"/>
                            <input 
                                type="text"
                                placeholder="Buscar receitas..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent focus:outline-none text-brand-primary"
                                aria-label="Buscar por nome ou ingrediente da receita"
                            />
                        </div>
                    )}

                    <div className="flex items-center space-x-2 ml-auto">
                        { selectedRecipe && (
                             <>
                                <button onClick={() => toggleFavorite(selectedRecipe)} aria-label={favoriteRecipeIds.has(selectedRecipe.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"} className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500">
                                    <Heart className={`w-6 h-6 transition-all ${favoriteRecipeIds.has(selectedRecipe.id) ? 'text-red-500 fill-current' : 'text-brand-primary'}`} />
                                </button>
                                <button onClick={() => handleExportPdf(selectedRecipe)} aria-label="Exportar receita para PDF" className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500">
                                    <Download className="w-6 h-6 text-brand-primary" />
                                </button>
                             </>
                        )}
                        <button onClick={() => setViewMode('mobile')} aria-label="Visualização mobile" className={`p-2 rounded-full ${viewMode === 'mobile' ? 'bg-amber-100 text-amber-600' : 'text-gray-400 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-amber-500`}>
                            <Smartphone className="w-5 h-5"/>
                        </button>
                        <button onClick={() => setViewMode('desktop')} aria-label="Visualização desktop" className={`p-2 rounded-full ${viewMode === 'desktop' ? 'bg-amber-100 text-amber-600' : 'text-gray-400 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-amber-500`}>
                            <Monitor className="w-5 h-5"/>
                        </button>
                    </div>
                 </header>

                {/* Main Content */}
                <main className="flex-grow overflow-y-auto custom-scrollbar">
                    {renderContent()}
                </main>
                
                {/* Bottom Navigation */}
                <footer className="flex-shrink-0 border-t border-gray-200 bg-white p-1">
                    <nav className="flex justify-around">
                        <NavItem icon={<Home />} label="Início" isActive={activeTab === 'home'} onClick={() => handleNavigation('home')} />
                        <NavItem icon={<Info />} label="Sobre" isActive={activeTab === 'about'} onClick={() => handleNavigation('about')} />
                        <NavItem icon={<Youtube />} label="Vídeos" isActive={activeTab === 'videos'} onClick={() => handleNavigation('videos')} />
                        <NavItem icon={<BookHeart />} label="Receitas" isActive={activeTab === 'favorites'} onClick={() => handleNavigation('favorites')} />
                        <a href="https://forms.gle/your-google-form-link-here" target="_blank" rel="noopener noreferrer" aria-label="Contribuir com uma receita, abre em nova aba" className="flex flex-col items-center justify-center w-full pt-2 pb-1 text-brand-secondary hover:text-brand-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg">
                           <IconWrapper><Share2 /></IconWrapper>
                           <span className="text-xs mt-1">Contribuir</span>
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    );
}
