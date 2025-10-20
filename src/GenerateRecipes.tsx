
import React, { useState } from 'react';
import { LoaderCircle, AlertTriangle, ChefHat } from 'lucide-react';
import { generateRecipe } from './services/geminiService';

const GenerateRecipes: React.FC = () => {
    const [ingredients, setIngredients] = useState('');
    const [generatedRecipe, setGeneratedRecipe] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!ingredients.trim()) {
            setError('Por favor, insira alguns ingredientes.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setGeneratedRecipe('');

        try {
            const recipe = await generateRecipe(ingredients);
            setGeneratedRecipe(recipe);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.';
            setError(errorMessage);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 md:p-6 text-brand-primary">
            <h2 className="text-2xl font-bold mb-4">Gerador de Receitas com IA</h2>
            <p className="mb-4 text-brand-secondary">
                Tem ingredientes sobrando na geladeira? Cascas, talos ou frutas maduras? Descreva o que você tem e nossa IA criará uma receita sustentável para você!
            </p>

            <div className="mb-4">
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Ex: 3 cascas de banana, um pouco de arroz cozido, 2 tomates maduros..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    rows={4}
                    aria-label="Caixa de texto para inserir ingredientes"
                />
            </div>

            <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full bg-brand-primary text-white font-semibold py-3 px-4 rounded-full flex items-center justify-center shadow-lg transform transition-all hover:bg-amber-600 hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isLoading ? (
                    <>
                        <LoaderCircle className="w-5 h-5 mr-2 animate-spin" />
                        Gerando...
                    </>
                ) : (
                    'Gerar Receita Mágica'
                )}
            </button>

            {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    {error}
                </div>
            )}

            {generatedRecipe && (
                <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-white">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><ChefHat className="w-6 h-6 mr-2 text-brand-primary"/>Sua Receita Criativa:</h3>
                    {/* A simple way to format the markdown-like response */}
                    <div className="prose prose-sm max-w-none">
                        {generatedRecipe.split('\n').map((line, index) => {
                             if (line.startsWith('### ')) {
                                return <h4 key={index} className="font-bold text-lg mt-2">{line.substring(4)}</h4>;
                            }
                            if (line.startsWith('**')) {
                                return <strong key={index}>{line.replace(/\*\*/g, '')}</strong>;
                            }
                            if (line.startsWith('* ')) {
                                return <li key={index} className="ml-4 list-disc">{line.substring(2)}</li>;
                            }
                            return <p key={index}>{line}</p>;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GenerateRecipes;
