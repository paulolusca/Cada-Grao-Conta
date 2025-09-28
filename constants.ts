
import { Category, Recipe, EducationalVideo } from './types';

const categoriesData: Category[] = [
  {
    id: 'receitas-familias',
    title: 'Receitas de Família',
    description: 'Receitas que vieram das casas dos nossos estudantes, cheias de afeto, memórias e sabores especiais. Aqui a escola e a família cozinham juntas.',
    image: 'https://i.imgur.com/i5Avlm3.jpeg',
    recipes: [
      {
        id: 'pudim-mais-gostoso',
        name: 'O Pudim mais Gostoso do Mundo',
        ingredients: ['Leite condensado', 'Leite', 'Ovos', 'Açúcar para caramelizar'],
        instructions: 'Bata tudo no liquidificador, coloque em forma caramelizada e asse em banho-maria até firmar. Para fazer a calda, Em uma forma, adicione 2 xícaras de açúcar e leve ao forno até formar uma calda. Coloque o conteúdo do liquidificador na forma e leve ao forno. ',
        category: 'Receitas de Família',
        image: 'https://www.mococa.com.br/wp-content/uploads/2023/08/img-pudim.jpg',
        source: 'Receita da família da Kethelyn Vale Pereira',
        extra: 'História: "Minha tia Cecília sempre fazia para a gente comer"'
      },
      {
        id: 'bolo-casca-banana',
        name: 'Bolo de Casca de Banana',
        ingredients: ['Cascas de banana', 'Açúcar', 'Ovos', 'Farinha de trigo', 'Fermento', 'Óleo'],
        instructions: 'Separe 4 xícaras de casca para fazer a massa. Bata as claras em neve e reserve, na geladeira. Bata no liquidificador as gemas, o leite, a margarina, o açúcar e as cascas de banana. Despeje essa mistura em uma vasilha e acrescente a farinha de rosca. Mexa bem. Por último, misture delicadamente as claras em neve e o fermento. Despeje em uma assadeira untada com margarina e farinha. Leve ao forno médio pré-aquecido por aproximadamente 40 minutos.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/uxWSBHW.jpeg',
        source: 'Receita da família do Piettro Miguell Oliveira Cruz de Lima',
        extra: 'Dica: “Façam essa receita! Ela é muito saborosa!”'
      },
      {
        id: 'bolo-cenoura',
        name: 'Bolo de Cenoura',
        ingredients: ['Cenouras', 'Ovos', 'Óleo', 'Açúcar', 'Farinha de trigo', 'Fermento'],
        instructions: 'Coloque a cenoura, ovo, margarina, açúcar, leite, e o fermento no liquidificador. Quando estiver homogêneo, coloque em uma forma untada e no forno a 180 °C por 45 minutos.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/9tRQE9H.jpeg',
        source: 'Receita da família de Lucas Gabriel Dias Cerqueira'
      },
      {
        id: 'salada-frutas',
        name: 'Salada de Frutas',
        ingredients: ['Frutas variadas', 'Suco de laranja ou limão', 'Açúcar ou mel a gosto'],
        instructions: 'Pegue as frutas, lave elas muito bem e depois pegue uma faca para cortá-las em cubinhos pequenos. Depois, pegue o pote, coloque as frutas e, em seguida, o leite condensado. Coloque na geladeira por 15 minutos.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/X2whWVA.jpeg',
        source: 'Receita da família de Ana Clara Freitas Ramos',
        extra: 'Dica: "A dica é colocar na geladeira!"'
      },
      {
        id: 'suco-casca-abacaxi',
        name: 'Suco de Casca de Abacaxi',
        ingredients: ['Cascas de abacaxi bem lavadas', 'Água', 'Açúcar ou mel a gosto'],
        instructions: 'Bata as cascas no liquidificador com água. Coe, adoce a gosto e sirva gelado.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/DWxNdAK.jpeg',
        source: 'Receita da família da Millena Silva de Lima'
      },
      {
        id: 'hamburguer-empanado',
        name: 'Hambúrguer Empanado',
        ingredients: ['Carne moída temperada ou hambúrguer pronto', 'Farinha de trigo', 'Ovo batido', 'Farinha de rosca', 'Óleo'],
        instructions: 'Passe os hambúrgueres na farinha, depois no ovo, depois na farinha de rosca. Frite até dourar.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/42vQ5Zb.jpeg',
        source: 'Receita da família da Emilly Vitória dos Santos Bacagine'
      },
      {
        id: 'bolinho-arroz',
        name: 'Bolinho de Arroz',
        ingredients: ['Arroz cozido', 'Ovos', 'Farinha de trigo', 'Queijo ralado', 'Temperos'],
        instructions: 'Misture o arroz com os demais ingredientes até formar massa. Modele os bolinhos e frite até dourar.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/pHaPeeo.jpeg',
        source: 'Receita da família de Maria Fernanda Queiroz de Almeida',
        extra: 'História: "Era uma receita da minha Vovó Tereza e da minha Mãe Eliana."'
      },
      {
        id: 'pudim-pao-amanhecido',
        name: 'Pudim de Pão Amanhecido',
        ingredients: ['Pães amanhecidos', 'Leite', 'Açúcar', 'Ovos', 'Canela'],
        instructions: 'No liquidificador, coloque o pão picado, junte o leite, os ovos, o açúcar e a maisena. Deixe bater por cinco minutos. Ingredientes para a Calda: Uma xícara de açúcar e meia xícara de água. Coloque o açúcar em uma panela e deixe derreter. Depois de derretido, coloque a água e deixe ferver até virar uma calda. Despeje a mistura do pudim em uma forma untada com a calda e leve ao forno em banho-maria por mais ou menos 2 horas.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/V4mjYFu.jpeg',
        source: 'Receita da família de Vítor Moura Viana',
        extra: 'Dica: "Espete um palito de dente no pudim, e se sair limpo, está pronto. Desenforme em um recipiente, deixe gelar e bom apetite!"'
      },
      {
        id: 'pudim-pao',
        name: 'Pudim de Pão',
        ingredients: ['Pães amanhecidos', 'Leite', 'Ovos', 'Açúcar', 'Baunilha'],
        instructions: 'Em uma tigela, coloque os pães e cubra com o leite. Deixe de molho até que os pães fiquem bem macios e absorvam o leite. Amassar bem os pães com o leite até obter uma mistura homogênea. Adicione os ovos, a manteiga, a farinha de trigo, o açúcar e o óleo. Mexa bem. Por último, acrescente o fermento em pó e misture delicadamente. Unte uma forma com manteiga e despeje a massa. Leve ao forno pré-aquecido a 180°C por aproximadamente 40 minutos, ou até dourar e firmar. Deixe esfriar antes de desenformar e, se desejar, polvilhe coco ralado por cima.',
        category: 'Sobras Criativas',
        image: 'https://static.itdg.com.br/images/360-240/ba68e781f9b13dab4569483686f2ac41/352648-original.jpg',
        source: 'Receita da família de Ana Julia Batista da Silva',
        extra: 'História: "Minha bisavó fazia no café da manhã para o meu pai."'
      },
      {
        id: 'sopa-legumes-nordeste',
        name: 'Sopa de Legumes do Nordeste',
        ingredients: ['Legumes variados', 'Macarrão ou arroz', 'Caldo', 'Temperos a gosto'],
        instructions: 'Cozinhe os legumes. Bata o caldo de feijão no liquidificador. Cozinhe a carne. Cozinhe o macarrão. Misture todos os ingredientes no caldo de feijão em uma panela. Espere por alguns minutos. Agora é só saborear!',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/0gIOjJX.jpeg',
        source: 'Receita da família do David Menezes da Silva',
        extra: 'História: “Minha avó materna fazia para a minha mãe quando ela era criança”'
      }
    ]
  },
  {
    id: 'sobras-criativas',
    title: 'Sobras Criativas',
    description: 'Com criatividade, até as sobras viram novas delícias. Nesta categoria você encontra ideias para reaproveitar arroz, pão e outros alimentos do dia a dia',
    image: 'https://i.imgur.com/ToxOL8a.jpeg',
    recipes: [
      {
        id: 'pudim-pao-amanhecido',
        name: 'Pudim de Pão Amanhecido',
        ingredients: ['Pães amanhecidos', 'Leite', 'Açúcar', 'Ovos', 'Canela'],
        instructions: 'Bata todos os ingredientes no liquidificador, coloque em forma caramelizada e asse em banho-maria.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/V4mjYFu.jpeg',
        source: 'Receita da família de Vítor Moura Viana',
        extra: 'Dica: "Espete um palito de dente no pudim, e se sair limpo, está pronto. Desenforme em um recipiente, deixe gelar e bom apetite!"'
      },
      {
        id: 'pudim-pao',
        name: 'Pudim de Pão',
        ingredients: ['Pães amanhecidos', 'Leite', 'Ovos', 'Açúcar', 'Baunilha'],
        instructions: 'Misture o pão umedecido com os demais ingredientes, despeje em forma caramelizada e asse em banho-maria.',
        category: 'Sobras Criativas',
        image: 'https://static.itdg.com.br/images/360-240/ba68e781f9b13dab4569483686f2ac41/352648-original.jpg',
        source: 'Receita da família de Ana Julia Batista da Silva',
        extra: 'História: "Minha bisavó fazia no café da manhã para o meu pai."'
      },
      {
        id: 'lasanha-arroz-cozido',
        name: 'Lasanha de Arroz Cozido',
        ingredients: ['Arroz cozido', 'Molho de tomate', 'Queijo', 'Presunto ou legumes', 'Temperos'],
        instructions: 'Monte em camadas o arroz, o molho e os recheios. Finalize com queijo e leve ao forno para gratinar.',
        category: 'Sobras Criativas',
        image: 'https://anamariareceitas.com.br/wp-content/uploads/2022/10/Lasanha-de-arroz.jpg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'bolinho-arroz',
        name: 'Bolinho de Arroz',
        ingredients: ['Arroz cozido', 'Ovos', 'Farinha de trigo', 'Queijo ralado', 'Temperos'],
        instructions: 'Misture o arroz com os demais ingredientes até formar massa. Modele os bolinhos e frite até dourar.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/pHaPeeo.jpeg',
        source: 'Receita da família de Maria Fernanda Queiroz de Almeida',
        extra: 'História: "Era uma receita da minha Vovó Tereza e da minha Mãe Eliana."'
      }
    ]
  },
  {
    id: 'cascas-talos-folhas',
    title: 'Cascas, Talos e Folhas',
    description: 'Aqui mostramos que nada precisa ir para o lixo! Receitas que aproveitam cascas, talos e folhas para transformar em pratos saborosos e saudáveis.',
    image: 'https://i.imgur.com/P8dlMwe.jpeg',
    recipes: [
      {
        id: 'bolo-casca-banana',
        name: 'Bolo de Casca de Banana',
        ingredients: ['Cascas de banana', 'Açúcar', 'Ovos', 'Farinha de trigo', 'Fermento', 'Óleo'],
        instructions: 'Bata as cascas com os ovos e óleo no liquidificador. Misture com os demais ingredientes e leve ao forno até dourar.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/uxWSBHW.jpeg',
        source: 'Receita da família do Piettro Miguell Oliveira Cruz de Lima',
        extra: 'Dica: “Façam essa receita! Ela é muito saborosa!”'
      },
      {
        id: 'cascas-banana-milanesa',
        name: 'Cascas de Banana à Milanesa',
        ingredients: ['Cascas de banana', 'Farinha de trigo', 'Ovo batido', 'Farinha de rosca', 'Óleo para fritar'],
        instructions: 'Lave bem as cascas, passe na farinha, depois no ovo, empane na farinha de rosca e frite até dourar.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/yns5ANG.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'salada-casca-abobora',
        name: 'Salada de Cascas de Abóbora',
        ingredients: ['Cascas de abóbora', 'Cebola', 'Tomate', 'Azeite', 'Sal'],
        instructions: 'Cozinhe rapidamente as cascas até ficarem macias. Misture com cebola e tomate picados, tempere com sal e azeite.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/b8TdUsh.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'farofa-folhas-couveflor',
        name: 'Farofa de Folhas de Couve-flor',
        ingredients: ['Folhas de couve-flor', 'Farinha de mandioca', 'Cebola', 'Alho', 'Óleo', 'Sal'],
        instructions: 'Refogue cebola e alho no óleo. Acrescente as folhas picadas, depois a farinha, mexa bem e sirva.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/3e8d1ed.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'charuto-folha-beterraba',
        name: 'Charutos de Folha de Beterraba',
        ingredients: ['Folhas de beterraba', 'Arroz cozido', 'Carne moída ou soja', 'Temperos a gosto'],
        instructions: 'Branqueie as folhas, recheie com arroz e carne, enrole como charuto e cozinhe em molho leve.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/gLeG0ry.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'suco-casca-abacaxi',
        name: 'Suco de Casca de Abacaxi',
        ingredients: ['Cascas de abacaxi bem lavadas', 'Água', 'Açúcar ou mel a gosto'],
        instructions: 'Bata as cascas no liquidificador com água. Coe, adoce a gosto e sirva gelado.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/DWxNdAK.jpeg',
        source: 'Receita da família da Millena Silva de Lima'
      }
    ]
  },
  {
    id: 'frutas-maduras',
    title: 'Frutas Maduras',
    description: 'Aproveite o sabor doce das frutas maduras em sucos, geleias e sobremesas, evitando o desperdício.',
    image: 'https://i.imgur.com/d1HEIFk.jpeg',
    recipes: [
      {
        id: 'geleia-frutas',
        name: 'Geleia de Frutas Maduras',
        ingredients: ['Frutas maduras (morango, manga, etc.)', 'Açúcar', 'Limão'],
        instructions: 'Cozinhe as frutas picadas com açúcar e suco de limão até atingir o ponto de geleia.',
        category: 'Frutas Maduras',
        image: 'https://i.imgur.com/Z4g3oYg.jpeg'
      },
      {
        id: 'sorvete-banana',
        name: 'Sorvete de Banana Congelada',
        ingredients: ['Banana madura congelada'],
        instructions: 'Bata as bananas congeladas no processador até obter uma consistência cremosa de sorvete.',
        category: 'Frutas Maduras',
        image: 'https://i.imgur.com/soK0PMd.jpeg'
      }
    ]
  }
];

export { categoriesData };

export const allRecipes: Recipe[] = categoriesData.flatMap(category =>
    category.recipes.map(recipe => ({
        ...recipe,
        // Garante que a categoria na receita seja a mesma da categoria pai.
        category: category.title
    }))
);

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
        id: 'eLq3GzSDnZc',
        title: 'Desperdício de Alimentos',
        description: 'Somos 8 bilhões de pessoas no mundo, e todas precisam comer diariamente. A produção de alimentação já é suficiente para todos, porém, 1 bilhão de pessoas ainda sofrem com a fome. E parte disso se deve ao desperdício'
    },
    {
        id: 'fw8E0Mbq01s',
        title: 'Desperdício de alimentos: É pior do que imaginamos',
        description: 'Aprenda a fazer uma composteira em casa para transformar lixo orgânico em adubo para suas plantas.'
    },
    {
        id: 'LqZdG2_-PAg',
        title: 'Quanto o desperdício de alimento custa ao Brasil? ',
        description: 'Comprar apenas o necessário, aproveitar ao máximo cada alimento e fazer dos restos orgânicos adubo por meio da compostagem. Curitiba mostra o caminho contra o desperdício de alimentos.'
    }
];
