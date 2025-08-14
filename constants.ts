
import { Category, Recipe, EducationalVideo } from './types';

// Helper to clean markdown-style image URLs
const cleanImageUrl = (url: string) => {
    const match = url.match(/\(([^)]+)\)/);
    return match ? match[1] : url.replace(/\[|\]/g, '');
};


const rawCategoriesData: (Omit<Category, 'image' | 'recipes'> & { image: string, recipes: (Omit<Recipe, 'image'> & {image: string})[] })[] = [
  {
    id: 'cascas-talos',
    title: 'Cascas e Talos',
    description: 'Aproveite integralmente os alimentos, transformando cascas e talos em pratos deliciosos e nutritivos.',
    image: '[https://placehold.co/400x250/C8B8A4/5C4B3A?text=Cascas+e+Talos](https://placehold.co/400x250/C8B8A4/5C4B3A?text=Cascas+e+Talos)',
    recipes: [
      {
        id: 'brigadeiro-casca-banana',
        name: 'Brigadeiro de Casca de Banana',
        ingredients: ['Casca de banana', 'Leite condensado', 'Chocolate em pó', 'Manteiga'],
        instructions: 'Cozinhe as cascas, bata no liquidificador, misture com os outros ingredientes e leve ao fogo até desgrudar da panela.',
        category: 'Cascas e Talos',
        image: '[https://placehold.co/300x200/D4C2A9/6B5C4B?text=Brigadeiro+de+Casca](https://placehold.co/300x200/D4C2A9/6B5C4B?text=Brigadeiro+de+Casca)'
      },
      {
        id: 'farofa-talos',
        name: 'Farofa de Talos',
        ingredients: ['Talos de couve/brócolis', 'Farinha de mandioca', 'Cebola', 'Alho', 'Manteiga'],
        instructions: 'Refogue os talos picados com cebola e alho na manteiga, adicione a farinha e torre até dourar.',
        category: 'Cascas e Talos',
        image: '[https://placehold.co/300x200/D4C2A9/6B5C4B?text=Farofa+de+Talos](https://placehold.co/300x200/D4C2A9/6B5C4B?text=Farofa+de+Talos)'
      }
    ]
  },
  {
    id: 'sobras-criativas',
    title: 'Sobras Criativas',
    description: 'Transforme as sobras do jantar em novas e excitantes refeições, evitando o desperdício.',
    image: '[https://placehold.co/400x250/A4C8B8/3A5C4B?text=Sobras+Criativas](https://placehold.co/400x250/A4C8B8/3A5C4B?text=Sobras+Criativas)',
    recipes: [
      {
        id: 'arroz-carreteiro-sobra',
        name: 'Arroz Carreteiro com Sobra de Churrasco',
        ingredients: ['Arroz cozido', 'Carne de churrasco desfiada', 'Tomate', 'Cebola', 'Pimentão'],
        instructions: 'Refogue a cebola, tomate e pimentão, adicione a carne desfiada e o arroz. Misture bem e sirva.',
        category: 'Sobras Criativas',
        image: '[https://placehold.co/300x200/B8D4C2/4B6B5C?text=Arroz+Carreteiro](https://placehold.co/300x200/B8D4C2/4B6B5C?text=Arroz+Carreteiro)'
      },
      {
        id: 'tortinha-legumes-sobra',
        name: 'Tortinha de Legumes com Sobra',
        ingredients: ['Legumes cozidos', 'Ovos', 'Farinha de trigo', 'Queijo', 'Leite'],
        instructions: 'Misture os legumes picados com ovos, farinha, queijo e leite. Leve ao forno em forminhas de torta.',
        category: 'Sobras Criativas',
        image: '[https://placehold.co/300x200/B8D4C2/4B6B5C?text=Tortinha+de+Legumes](https://placehold.co/300x200/B8D4C2/4B6B5C?text=Tortinha+de+Legumes)'
      }
    ]
  },
  {
    id: 'paes-amanhecidos',
    title: 'Pães Amanhecidos',
    description: 'Não jogue fora o pão velho! Descubra receitas deliciosas que dão uma nova vida a ele.',
    image: '[https://placehold.co/400x250/C8A4B8/5C3A4B?text=Paes+Amanhecidos](https://placehold.co/400x250/C8A4B8/5C3A4B?text=Paes+Amanhecidos)',
    recipes: [
      {
        id: 'rabanada-salgada',
        name: 'Rabanada Salgada',
        ingredients: ['Pão amanhecido', 'Leite', 'Ovo', 'Queijo ralado', 'Sal', 'Pimenta'],
        instructions: 'Molhe o pão no leite, passe no ovo batido com temperos e frite. Sirva com queijo ralado.',
        category: 'Pães Amanhecidos',
        image: '[https://placehold.co/300x200/D4C2B8/6B4B5C?text=Rabanada+Salgada](https://placehold.co/300x200/D4C2B8/6B4B5C?text=Rabanada+Salgada)'
      },
      {
        id: 'pudim-pao',
        name: 'Pudim de Pão',
        ingredients: ['Pão amanhecido', 'Leite', 'Ovos', 'Açúcar', 'Baunilha'],
        instructions: 'Bata todos os ingredientes no liquidificador, despeje em forma caramelizada e asse em banho-maria.',
        category: 'Pães Amanhecidos',
        image: '[https://placehold.co/300x200/D4C2B8/6B4B5C?text=Pudim+de+Pao](https://placehold.co/300x200/D4C2B8/6B4B5C?text=Pudim+de+Pao)'
      }
    ]
  },
  {
    id: 'frutas-maduras',
    title: 'Frutas Maduras',
    description: 'Aproveite o sabor doce das frutas maduras em sucos, geleias e sobremesas, evitando o desperdício.',
    image: '[https://placehold.co/400x250/B8A4C8/4B3A5C?text=Frutas+Maduras](https://placehold.co/400x250/B8A4C8/4B3A5C?text=Frutas+Maduras)',
    recipes: [
      {
        id: 'geleia-frutas',
        name: 'Geleia de Frutas Maduras',
        ingredients: ['Frutas maduras (morango, manga, etc.)', 'Açúcar', 'Limão'],
        instructions: 'Cozinhe as frutas picadas com açúcar e suco de limão até atingir o ponto de geleia.',
        category: 'Frutas Maduras',
        image: '[https://placehold.co/300x200/C2B8D4/5C4B6B?text=Geleia+de+Frutas](https://placehold.co/300x200/C2B8D4/5C4B6B?text=Geleia+de+Frutas)'
      },
      {
        id: 'sorvete-banana',
        name: 'Sorvete de Banana Congelada',
        ingredients: ['Banana madura congelada'],
        instructions: 'Bata as bananas congeladas no processador até obter uma consistência cremosa de sorvete.',
        category: 'Frutas Maduras',
        image: '[https://placehold.co/300x200/C2B8D4/5C4B6B?text=Sorvete+de+Banana](https://placehold.co/300x200/C2B8D4/5C4B6B?text=Sorvete+de+Banana)'
      }
    ]
  }
];

export const categoriesData: Category[] = rawCategoriesData.map(category => ({
    ...category,
    image: cleanImageUrl(category.image),
    recipes: category.recipes.map(recipe => ({
        ...recipe,
        image: cleanImageUrl(recipe.image)
    }))
}));


export const allRecipes: Recipe[] = categoriesData.flatMap(category => category.recipes);

export const repurposingTips: string[] = [
    "Use cascas de frutas cítricas para fazer chás ou aromatizar água.",
    "Transforme pão amanhecido em torradas, croutons ou pudim.",
    "Aproveite talos de brócolis e couve-flor em sopas, refogados ou farofas.",
    "Use sobras de arroz para fazer bolinhos ou arroz de forno.",
    "Congele frutas muito maduras para usar em smoothies e sorvetes.",
    "Faça um caldo de legumes caseiro com cascas de cenoura, cebola e talos.",
    "Transforme sobras de carne assada em recheio para tortas ou sanduíches.",
];

export const educationalVideos: EducationalVideo[] = [
    {
        id: 'U476_V57uXk',
        title: 'Como Aproveitar 100% dos Alimentos',
        description: 'Dicas práticas para reduzir o desperdício na sua cozinha, aproveitando cascas, talos e sementes.'
    },
    {
        id: 'eSOaM3G3ruE',
        title: 'Compostagem Caseira: Passo a Passo',
        description: 'Aprenda a fazer uma composteira em casa para transformar lixo orgânico em adubo para suas plantas.'
    },
    {
        id: 'dQw4w9WgXcQ',
        title: 'A Economia Circular na Cozinha',
        description: 'Entenda como pequenas mudanças na forma como cozinhamos podem ter um grande impacto no meio ambiente.'
    }
];
