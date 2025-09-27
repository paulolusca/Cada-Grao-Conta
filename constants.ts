
import { Category, Recipe, EducationalVideo } from './types';

// Helper to clean markdown-style image URLs
const cleanImageUrl = (url: string) => {
    const match = url.match(/\(([^)]+)\)/);
    return match ? match[1] : url.replace(/\[|\]/g, '');
};


const rawCategoriesData: (Omit<Category, 'image' | 'recipes'> & { image: string, recipes: (Omit<Recipe, 'image'> & {image: string})[] })[] = [
  {
    id: 'receitas-familias',
    title: 'Receitas de Família',
    description: 'Receitas que vieram das casas dos nossos estudantes, cheias de afeto, memórias e sabores especiais. Aqui a escola e a família cozinham juntas.',
    image: '[https://placehold.co/400x250/C8B8A4/5C4B3A?text=Cascas+e+Talos](https://placehold.co/400x250/C8B8A4/5C4B3A?text=Cascas+e+Talos)',
    recipes: [
      {
        id: 'pudim-mais-gostoso',
        name: 'O Pudim mais Gostoso do Mundo',
        ingredients: ['Leite condensado', 'Leite', 'Ovos', 'Açúcar para caramelizar'],
        instructions: 'Bata tudo no liquidificador, coloque em forma caramelizada e asse em banho-maria até firmar.',
        category: 'Receitas de Família',
        image: 'https://placehold.co/300x200?text=Pudim+Mais+Gostoso',
        source: 'Receita da família da Kethelyn Vale Pereira',
        extra: 'História: "Minha tia Cecília sempre fazia para a gente comer"'
      },
      {
        id: 'bolo-cenoura',
  name: 'Bolo de Cenoura',
  ingredients: ['Cenouras', 'Ovos', 'Óleo', 'Açúcar', 'Farinha de trigo', 'Fermento'],
  instructions: 'Bata cenoura, ovos e óleo no liquidificador. Misture com os secos, asse e cubra com calda de chocolate.',
  category: 'Receitas de Família',
  image: 'https://placehold.co/300x200?text=Bolo+Cenoura',
  source: 'Receita da família de Lucas Gabriel Dias Cerqueira'
          },
{
  id: 'salada-frutas',
  name: 'Salada de Frutas',
  ingredients: ['Frutas variadas', 'Suco de laranja ou limão', 'Açúcar ou mel a gosto'],
  instructions: 'Corte as frutas em pedaços, misture em uma tigela, regue com suco e adoce a gosto.',
  category: 'Receitas de Família',
  image: 'https://placehold.co/300x200?text=Salada+Frutas',
  source: 'Receita da família de Ana Clara Freitas Ramos',
  extra: 'Dica: "A dica é colocar na geladeira!"'
},
{
  id: 'hamburguer-empanado',
  name: 'Hambúrguer Empanado',
  ingredients: ['Carne moída temperada ou hambúrguer pronto', 'Farinha de trigo', 'Ovo batido', 'Farinha de rosca', 'Óleo'],
  instructions: 'Passe os hambúrgueres na farinha, depois no ovo, depois na farinha de rosca. Frite até dourar.',
  category: 'Receitas de Família',
  image: 'https://placehold.co/300x200?text=Hamburguer+Empanado',
  source: 'Receita da família da Emilly Vitória dos Santos Bacagine'
},
{
  id: 'sopa-legumes-nordeste',
  name: 'Sopa de Legumes do Nordeste',
  ingredients: ['Legumes variados', 'Macarrão ou arroz', 'Caldo', 'Temperos a gosto'],
  instructions: 'Cozinhe os legumes no caldo até ficarem macios. Acrescente macarrão ou arroz, tempere e sirva quente.',
  category: 'Receitas de Família',
  image: 'https://placehold.co/300x200?text=Sopa+Nordeste',
  source: 'Receita da família do David Menezes da Silva',
  extra: 'História: “Minha avó materna fazia para a minha mãe quando ela era criança”'
}
    ]
  },
  {
    id: 'sobras-criativas',
    title: 'Sobras Criativas',
    description: 'Com criatividade, até as sobras viram novas delícias. Nesta categoria você encontra ideias para reaproveitar arroz, pão e outros alimentos do dia a dia',
    image: '[https://placehold.co/400x250/A4C8B8/3A5C4B?text=Sobras+Criativas](https://placehold.co/400x250/A4C8B8/3A5C4B?text=Sobras+Criativas)',
    recipes: [
      {
  id: 'pudim-pao-amanhecido',
  name: 'Pudim de Pão Amanhecido',
  ingredients: ['Pães amanhecidos', 'Leite', 'Açúcar', 'Ovos', 'Canela'],
  instructions: 'Bata todos os ingredientes no liquidificador, coloque em forma caramelizada e asse em banho-maria.',
  category: 'Sobras Criativas',
  image: 'https://placehold.co/300x200?text=Pudim+Pao+Amanhecido',
  source: 'Receita da família de Vítor Moura Viana',
  extra: 'Dica: "Espete um palito de dente no pudim, e se sair limpo, está pronto. Desenforme em um recipiente, deixe gelar e bom apetite!"'
      },
      {
       id: 'pudim-pao',
  name: 'Pudim de Pão',
  ingredients: ['Pães amanhecidos', 'Leite', 'Ovos', 'Açúcar', 'Baunilha'],
  instructions: 'Misture o pão umedecido com os demais ingredientes, despeje em forma caramelizada e asse em banho-maria.',
  category: 'Sobras Criativas',
  image: 'https://placehold.co/300x200?text=Pudim+Pao',
  source: 'Receita da família de Ana Julia Batista da Silva',
  extra: 'História: "Minha bisavó fazia no café da manhã para o meu pai."'
},
{
  id: 'lasanha-arroz-cozido',
  name: 'Lasanha de Arroz Cozido',
  ingredients: ['Arroz cozido', 'Molho de tomate', 'Queijo', 'Presunto ou legumes', 'Temperos'],
  instructions: 'Monte em camadas o arroz, o molho e os recheios. Finalize com queijo e leve ao forno para gratinar.',
  category: 'Sobras Criativas',
  image: 'https://placehold.co/300x200?text=Lasanha+Arroz',
  source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
},
{
  id: 'bolinho-arroz',
  name: 'Bolinho de Arroz',
  ingredients: ['Arroz cozido', 'Ovos', 'Farinha de trigo', 'Queijo ralado', 'Temperos'],
  instructions: 'Misture o arroz com os demais ingredientes até formar massa. Modele os bolinhos e frite até dourar.',
  category: 'Receitas de Família',
  image: 'https://placehold.co/300x200?text=Bolinho+Arroz',
  source: 'Receita da família de Maria Fernanda Queiroz de Almeida',
  extra: 'História: "Era uma receita da minha Vovó Tereza e da minha Mãe Eliana."'
}
    ]
  },
  {
    id: 'Cascas-talos-folhas',
    title: 'Cascas, Talos e Folhas',
    description: 'Aqui mostramos que nada precisa ir para o lixo! Receitas que aproveitam cascas, talos e folhas para transformar em pratos saborosos e saudáveis.',
    image: '[https://placehold.co/400x250/C8A4B8/5C3A4B?text=Paes+Amanhecidos](https://placehold.co/400x250/C8A4B8/5C3A4B?text=Paes+Amanhecidos)',
    recipes: [
      {
  id: 'bolo-casca-banana',
  name: 'Bolo de Casca de Banana',
  ingredients: ['Cascas de banana', 'Açúcar', 'Ovos', 'Farinha de trigo', 'Fermento', 'Óleo'],
  instructions: 'Bata as cascas com os ovos e óleo no liquidificador. Misture com os demais ingredientes e leve ao forno até dourar.',
  category: 'Cascas, Talos e Folhas',
  image: 'https://placehold.co/300x200?text=Bolo+Casca+Banana',
  source: 'Receita da família do Piettro Miguell Oliveira Cruz de Lima',
  extra: 'Dica: “Façam essa receita! Ela é muito saborosa!”'
},
{
  id: 'cascas-banana-milanesa',
  name: 'Cascas de Banana à Milanesa',
  ingredients: ['Cascas de banana', 'Farinha de trigo', 'Ovo batido', 'Farinha de rosca', 'Óleo para fritar'],
  instructions: 'Lave bem as cascas, passe na farinha, depois no ovo, empane na farinha de rosca e frite até dourar.',
  category: 'Cascas, Talos e Folhas',
  image: 'https://placehold.co/300x200?text=Cascas+Milanesa',
  source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
},
{
  id: 'salada-casca-abobora',
  name: 'Salada de Cascas de Abóbora',
  ingredients: ['Cascas de abóbora', 'Cebola', 'Tomate', 'Azeite', 'Sal'],
  instructions: 'Cozinhe rapidamente as cascas até ficarem macias. Misture com cebola e tomate picados, tempere com sal e azeite.',
  category: 'Cascas, Talos e Folhas',
  image: 'https://placehold.co/300x200?text=Salada+Casca+Abobora',
  source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
},
{
  id: 'farofa-folhas-couveflor',
  name: 'Farofa de Folhas de Couve-flor',
  ingredients: ['Folhas de couve-flor', 'Farinha de mandioca', 'Cebola', 'Alho', 'Óleo', 'Sal'],
  instructions: 'Refogue cebola e alho no óleo. Acrescente as folhas picadas, depois a farinha, mexa bem e sirva.',
  category: 'Cascas, Talos e Folhas',
  image: 'https://placehold.co/300x200?text=Farofa+Folhas+Couveflor',
  source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
},
{
  id: 'charuto-folha-beterraba',
  name: 'Charutos de Folha de Beterraba',
  ingredients: ['Folhas de beterraba', 'Arroz cozido', 'Carne moída ou soja', 'Temperos a gosto'],
  instructions: 'Branqueie as folhas, recheie com arroz e carne, enrole como charuto e cozinhe em molho leve.',
  category: 'Cascas, Talos e Folhas',
  image: 'https://placehold.co/300x200?text=Charuto+Folha+Beterraba',
  source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
},
{
  id: 'suco-casca-abacaxi',
  name: 'Suco de Casca de Abacaxi',
  ingredients: ['Cascas de abacaxi bem lavadas', 'Água', 'Açúcar ou mel a gosto'],
  instructions: 'Bata as cascas no liquidificador com água. Coe, adoce a gosto e sirva gelado.',
  category: 'Cascas, Talos e Folhas',
  image: 'https://placehold.co/300x200?text=Suco+Casca+Abacaxi',
  source: 'Receita da família da Millena Silva de Lima'
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
