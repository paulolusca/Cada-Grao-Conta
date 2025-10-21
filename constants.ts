
import { Category, Recipe, EducationalVideo } from './types';

const categoriesData: Category[] = [
  {
    id: 'cascas-de-frutas',
    title: 'Cascas de Frutas',
    description: 'Não jogue as cascas fora! Descubra como transformar cascas de banana, abacaxi, laranja e outras frutas em bolos, doces e petiscos incríveis e cheios de nutrientes.',
    image: 'https://i.imgur.com/8g3s5JY.jpeg',
    recipes: [
      {
        id: 'cascas_de_banana_a_milanesa',
        name: 'Cascas de banana à milanesa',
        ingredients: [
          '3 cascas de banana',
          '1 xícara de farinha de trigo',
          '1 ovo batido',
          '1 xícara de farinha de rosca',
          'Óleo para fritar',
          'Sal a gosto'
        ],
        instructions: 'Lavar bem as cascas de banana com esponja em água corrente. Colocar sal. Passar a casca de banana na farinha de trigo, depois no ovo batido e por último na farinha de rosca. Fritar em óleo não muito quente.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/FrIDVtS.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'doce_de_cascas_de_abacaxi',
        name: 'Doce de cascas de abacaxi',
        ingredients: [
          '1 xícara de chá de cascas de abacaxi',
          '1 e 1/2 xícara de chá de água',
          'Açúcar a gosto',
          '6 cravos',
          '2 colheres de sopa de coco ralado'
        ],
        instructions: 'Lavar o abacaxi com uma escova em água corrente. Picar as cascas e fervê-las com água até amolecer. Bater no liquidificador com a água da fervura. Coar. Levar ao fogo com o açúcar, o coco e os cravos, mexendo até desprender do fundo da panela. Deixar esfriar e usar como quiser.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/8z467jQ.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'doce_de_cascas_de_abobora',
        name: 'Doce de cascas de abóbora',
        ingredients: [
          '1 kg de cascas de abóbora bem lavadas',
          '1/2 kg de açúcar',
          '1/2 litro de água',
          'Cravo e canela em pau'
        ],
        instructions: 'Cozinhar as cascas e cortar em tirinhas. Deixar numa travessa por 15 minutos junto com o açúcar, cravo e a canela em pau. Depois cozinhar na panela de pressão por 5 a 8 minutos e pronto. Deixar esfriar e saborear.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/C9SN1OM.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'bolo_de_cascas_de_banana_1',
        name: 'Bolo de Cascas de Banana (versão 1)',
        ingredients: [
          '2 xícaras de chá de cascas de banana nanica madura picadas',
          '2 bananas cortadas em rodelas pequenas',
          '4 gemas',
          '4 claras em neve',
          '2 e 1/2 xícaras de chá de açúcar',
          '3 xícaras de chá de farinha de trigo',
          '5 colheres rasas de sopa de margarina ou manteiga',
          '2 colheres rasas de sopa de fermento em pó',
          'Canela em pó para polvilhar'
        ],
        instructions: 'Lavar bem as cascas, picar e bater no liquidificador com 1/2 xícara de chá de água. Reservar. Bater na batedeira, as gemas, a margarina e o açúcar até ficar bem homogêneo. Misturar a essa massa, as cascas de banana batidas, a farinha e o fermento, aos poucos, mexendo com uma colher de pau. Quando tudo estiver bem misturado, juntar as rodelas de banana e por último, as claras em neve mexendo devagar de baixo para cima até tudo ficar homogêneo. Colocar em forma untada e enfarinhada, polvilhar a canela e levar ao forno preaquecido à temperatura média por cerca de 30 minutos.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/KHKQf7a.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'bolo_de_cascas_de_banana_com_farinha_de_rosca',
        name: 'Bolo de Cascas de Banana com Farinha de Rosca',
        ingredients: [
          'Cascas de 4 bananas',
          '3 ovos',
          '3 xícaras de chá de leite',
          '2 colheres de sopa de margarina',
          '3 xícaras de chá de açúcar',
          '3 xícaras de chá de farinha de rosca',
          '1 colher de sopa de fermento em pó',
          '--- Cobertura ---',
          '1/2 xícara de chá de açúcar',
          '1 e 1/2 xícara de chá de água',
          '4 bananas',
          '1/2 limão'
        ],
        instructions: 'Lavar as bananas e descascar. Separar as cascas para a massa. Bater as claras em neve e reservar na geladeira. Bater no liquidificador as gemas, o leite, a margarina, o açúcar e as cascas das bananas até obter uma mistura homogênea. Despejar a mistura em uma vasilha e acrescentar a farinha de rosca. Mexer bem e, por último misturar delicadamente as claras em neve e o fermento, colocar a massa em uma assadeira untada e levar ao forno por aproximadamente 40 minutos. Cobertura: Em uma panela faça um caramelo com o açúcar e a água. Acrescentar as bananas cortadas em rodelas e o suco de limão, deixando ferver um pouco. Cobrir o bolo ainda quente.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/nwCBKqf.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'brigadeiro_de_cascas_de_banana',
        name: 'Brigadeiro de cascas de banana',
        ingredients: [
          '3 unidades de cascas de banana',
          'Açúcar a gosto',
          '1/2 xícara de chá de água',
          '1 xícara de chá de margarina',
          '2 colheres de sopa de leite em pó',
          '1 xícara de chá de achocolatado ou chocolate em pó',
          '2 colheres sopa de chocolate granulado'
        ],
        instructions: 'Numa panela, colocar as cascas de banana com o açúcar e cozinhar até ficar pastoso. Acrescentar os demais ingredientes, exceto o chocolate granulado, e mexer até desprender do fundo da panela. Colocar em um prato e deixar esfriar. Fazer as bolinhas e passar no chocolate granulado, colocando-as em forminhas apropriadas.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/YKo8f3H.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'brigadeiro_de_cascas_de_banana_no_potinho',
        name: 'Brigadeiro de cascas de banana no potinho',
        ingredients: [
          '3 cascas de banana lavadas',
          '3 xícaras de chá de leite',
          '3 e 1/2 xícaras de chá de açúcar',
          '1 colher de sopa de amido de milho',
          '2 colheres de sopa de chocolate em pó'
        ],
        instructions: 'Lavar bem as cascas de banana. Picar as cascas e bater no liquidificador com uma xícara de leite. Reservar. Adicionar às cascas já batidas o restante do leite, o açúcar, o amido e o chocolate. Misturar bem e levar ao fogo brando até levantar fervura. Abaixar o fogo e deixar cozinhar por 20 minutos, mexendo de vez em quando. Deixar esfriar e distribuir em potinhos.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/T8ww7zY.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'doce_de_casca_de_melancia',
        name: 'Doce de Casca de Melancia',
        ingredients: [
          '2 xícaras (chá) da parte branca da casca de melancia',
          '1 e 1/2 xícara (chá) de açúcar',
          '1/4 xícara (chá) de água',
          '6 unidades de cravo'
        ],
        instructions: 'Retire a casca verde da melancia e utilize a parte branca, corte em cubos e reserve. Faça uma calda com o açúcar, a água e o cravo, acrescente a casca da melancia e deixe cozinhar até apurar.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/Vq2kV69.jpeg',
        source: 'CÂMARA MUNICIPAL DE TANGARÁ DA SERRA. Caderno de Receita: Reaproveitamento de Alimentos. Tangará da Serra: Câmara Municipal de Tangará da Serra, 2021.'
      },
      {
        id: 'salpicao_de_casca_de_melancia',
        name: 'Salpicão de Casca de Melancia',
        ingredients: [
          '5 xícaras (chá) de casca de melancia ralada',
          'Sal a gosto',
          '300g de peito de frango desfiado',
          '1 e 1/2 xícara (chá) de salsão cortado',
          '1/4 xícara (chá) de cebola',
          '2 colheres (sopa) de salsa',
          '1 limão',
          '1/2 xícara de maionese'
        ],
        instructions: 'Lave muito bem a melancia, corte em pedaços e descasque. Rale a parte branca da casca da melancia em ralo fino. Ferva as cascas raladas em água e sal, até que fiquem macias e reserve. Cozinhe o peito de frango em água e sal, desfie e reserve. Misture todos os ingredientes e sirva.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/PpfHE6u.jpeg',
        source: 'CÂMARA MUNICIPAL DE TANGARÁ DA SERRA. Caderno de Receita: Reaproveitamento de Alimentos. Tangará da Serra: Câmara Municipal de Tangará da Serra, 2021.'
      },
      {
        id: 'doce_de_casca_de_laranja',
        name: 'Doce de Casca de Laranja',
        ingredients: [
          'Cascas de 6 laranjas',
          'Açúcar (o mesmo peso das cascas)',
          'Cravo e canela em pau a gosto'
        ],
        instructions: 'Corte a casca da laranja em quatro. Deixe-as de molho em água de um dia para outro. Troque a água várias vezes. Corte as cascas pelo meio, depois em fatias finas. Coloque em uma panela, cubra com água e ferva por mais ou menos 15 minutos. Escorra a água. Coloque o mesmo peso das cascas em quantidade de açúcar, cravo e canela. Leve as cascas ao fogo para apurar.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/ql3f7oY.jpeg',
        source: 'CÂMARA MUNICIPAL DE TANGARÁ DA SERRA. Caderno de Receita: Reaproveitamento de Alimentos. Tangará da Serra: Câmara Municipal de Tangará da Serra, 2021.'
      },
      {
        id: 'farofa_de_casca_de_melao',
        name: 'Farofa de Casca de Melão',
        ingredients: [
          '1 xícara (chá) de casca de melão picada',
          '2 colheres (sopa) de óleo',
          '2 colheres (sopa) de cebola picada',
          '2 dentes de alho picado',
          '1 xícara (chá) de talos de agrião picados',
          '1 xícara (chá) de suco de casca de abacaxi',
          '1 xícara (chá) de tomate picado',
          '2 xícaras (chá) de farinha de mandioca',
          'Água',
          'Sal a gosto'
        ],
        instructions: 'Cozinhe a casca de melão até ficar macia e reserve. Em uma panela, aqueça o óleo, doure a cebola e o alho. Acrescente os talos de agrião, a casca de melão e refogue. Junte o suco e o sal. Deixe levantar fervura. Por último, acrescente o tomate picado e a farinha de mandioca. Mexa bem e sirva quente ou frio.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/1rMm5Ri.jpeg',
        source: 'CÂMARA MUNICIPAL DE TANGARÁ DA SERRA. Caderno de Receita: Reaproveitamento de Alimentos. Tangará da Serra: Câmara Municipal de Tangará da Serra, 2021.'
      },
      {
        id: 'doce_da_casca_de_mamao',
        name: 'Doce da Casca de Mamão',
        ingredients: [
          'Cascas de 6 mamões maduros, bem lavadas',
          '3 e 1/2 xícaras (chá) de açúcar',
          '1 xícara (chá) de água para o liquidificador'
        ],
        instructions: 'Deixar de molho na água as cascas dos mamões de um dia para outro. Picá-las, colocá-las numa panela e dar três fervuras, acrescentando as cascas sempre quando levantar fervura. Trocar a água a cada fervura. Na quarta fervura, deixar esfriar, bater no liquidificador adicionando 1 xícara (chá) de água e passar por uma peneira. Levar ao fogo com o açúcar até dar ponto (quando desprender do fundo da panela).',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/6uU3DOr.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'bolo_de_casca_do_abacaxi',
        name: 'Bolo de Casca do Abacaxi',
        ingredients: [
          'Cascas de 1 abacaxi',
          '4 xícaras (chá) de água para o caldo',
          '2 ovos',
          '1 colher (sopa) de fermento em pó',
          '2 xícaras (chá) de farinha de trigo',
          '2 xícaras (chá) de açúcar',
          '1 colher (sopa) de açúcar para a calda'
        ],
        instructions: 'Para obter o caldo de casca do abacaxi, retirar as cascas de um abacaxi e ferver com 4 xícaras (chá) de água por cerca de 20 minutos. Reservar. Bater as claras em neve, misturar as gemas e continuar batendo. Misturar aos poucos o açúcar e a farinha de trigo, sem parar de mexer. Acrescentar o fermento e uma xícara de caldo de casca de abacaxi. Misturar bem e assar em forma untada e forno moderado. Depois de assado, virar em um prato e, ainda quente, furar com um garfo e jogar sobre ele o restante do caldo de casca do abacaxi com 1 colher (sopa) de açúcar.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/OXPkI4V.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'casca_de_laranja_cristalizada',
        name: 'Casca de Laranja Cristalizada',
        ingredients: [
          'Cascas de 8 laranjas',
          '1 litro de água',
          '1 xícara (chá) de açúcar',
          'Calda: 3 xícaras (chá) de açúcar + 2 xícaras (chá) de água'
        ],
        instructions: 'Lavar muito bem as cascas e cortar em tirinhas. Levar ao fogo com a água e deixar cozinhar. Jogar a água fora e lavar as cascas em água corrente. Reservar. Em uma panela colocar o açúcar e a água da calda e levar ao fogo para ferver. Quando começar a engrossar, acrescentar as cascas e deixar no fogo até que elas fiquem cozidas. Pode servir gelada com calda, ou retirar da calda, escorrer em uma peneira e depois passar no açúcar e deixar secar.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/8z467jQ.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'docinho_de_abacaxi_com_coco',
        name: 'Docinho de Abacaxi com Coco',
        ingredients: [
          '2 xícaras de suco de casca de abacaxi',
          '2 xícaras de resíduo da casca de abacaxi',
          '1 xícara de côco ralado',
          '3 gemas',
          '2 xícaras de açúcar',
          '1 colher (sopa) de manteiga'
        ],
        instructions: 'Colocar em uma panela todos os ingredientes e levar ao fogo para cozinhar, mexendo sempre até soltar do fundo da panela. Deixar esfriar. Fazer os docinhos enrolando bolinhas e colocá-los em forminhas de papel. Se quiser, pode-se passar as bolinhas em côco ralado.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/vkUBcEe.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'cocada_de_entrecasca_de_melancia',
        name: 'Cocada de Entrecasca de Melancia',
        ingredients: [
          '500 g de entrecasca de melancia',
          '350 g de açúcar',
          '1 côco',
          '20 g de manteiga',
          '300 ml de água'
        ],
        instructions: 'Caramelizar 100 g de açúcar. Acrescentar a entrecasca de melancia ralada e mexer em fogo brando. Acrescentar o côco ralado, 250 g de açúcar e 300 ml de água. Cozinhar até soltar do fundo da panela. Passar a manteiga numa superfície lisa e colocar o doce a colheradas.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/6uU3DOr.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'pao_doce_de_abacaxi',
        name: 'Pão Doce de Abacaxi',
        ingredients: [
          '30g de fermento biológico',
          '4 colheres de açúcar',
          '3 gemas',
          '50g de margarina',
          '1 xícara de suco de casca de abacaxi',
          '1 colher (chá) de sal',
          '1/2 kg de farinha de trigo (aproximadamente)',
          '1 gema para pincelar'
        ],
        instructions: 'Dissolver o fermento no açúcar, acrescentar as gemas, margarina, suco, sal e misturar sempre a farinha de trigo até formar uma massa que não grude nas mãos. Dividir a massa em duas ou três partes, enrolar os pães e deixar crescer até dobrar de tamanho. Pincelar com gema e levar para assar.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/rxU2Mce.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'farofa_de_casca_de_melancia',
        name: 'Farofa de Casca de Melancia',
        ingredients: [
          '5 dentes de alho',
          '1/2 xícara (chá) de manteiga ou óleo',
          '6 xícaras (chá) de farinha de mandioca',
          '250g de casca de melancia (parte verde)',
          '1 colher (sopa) de sal'
        ],
        instructions: 'Separe a casca verde da entrecasca da melancia e lave. Rale as cascas até que fiquem em pedaços pequenos. Adicione em uma panela o alho e a manteiga e refogue. Adicione a farinha de mandioca, a casca de melancia e o sal. Misture e sirva.',
        category: 'Cascas de Frutas',
        image: 'https://i.imgur.com/Rdr5Vh0.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      }
    ]
  },
  {
    id: 'cascas-talos-e-folhas',
    title: 'Cascas, Talos e Folhas',
    description: 'Aqui mostramos que nada precisa ir para o lixo! Receitas que aproveitam cascas, talos e folhas para transformar em pratos saborosos e saudáveis.',
    image: 'https://i.imgur.com/P8dlMwe.jpeg',
    recipes: [
      {
        id: 'salada_de_cascas_de_abobora',
        name: 'Salada de cascas de abóbora',
        ingredients: [
          '2 xícaras de chá de cascas de abóbora paulista',
          '1 xícara de chá de tomate picado sem semente',
          '1/2 xícara de chá de cebolas picadas em cubos',
          '2 colheres de sopa de azeite',
          'Temperos a gosto'
        ],
        instructions: 'Lavar a abóbora e descascar. Passar as cascas no ralador grosso, cozinhar por 10 minutos. Escorrer e reservar na geladeira. Depois de refrigerada, juntar o tomate, a cebola, o azeite e os temperos da sua preferência. Servir em seguida.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/e3nf3UG.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'charutos_de_folhas_de_beterraba',
        name: 'Charutos de folhas de beterraba',
        ingredients: [
          '16 folhas de beterraba',
          '1 tablete de caldo de galinha',
          '1/2 cebola em fatias',
          '16 talos de espinafre',
          '16 talos de beterraba',
          '1 litro de água',
          '--- Molho branco ---',
          '2 colheres de sopa de margarina',
          '3 colheres de sopa de farinha de trigo',
          '1 e 1/2 xícaras de chá de leite morno',
          'Sal a gosto',
          '2 colheres de queijo ralado'
        ],
        instructions: 'Ferver rapidamente as folhas de beterraba em um litro de água diluída com o caldo de galinha. Reservar. Rechear cada folha com uma fatia de cebola, um talo de espinafre e um talo de beterraba levemente aferventados. Enrolar como um charutinho e dispor em um refratário. Para o molho, derreter a margarina ou manteiga, acrescentar a farinha de trigo e colocar o leite aos poucos, mexendo para não empelotar. Verificar o sal e deixar cozinhar. Colocar o molho sobre as folhas de beterraba recheadas, polvilhar o queijo ralado e levar ao forno preaquecido para gratinar.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/ijwZbnD.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'farofa_de_folhas_de_couve-flor',
        name: 'Farofa de folhas de couve-flor',
        ingredients: [
          '6 xícaras de folhas de couve-flor cortadas em tiras bem finas',
          '2 e 1/2 xícaras de farinha de mandioca',
          '1 ovo batido',
          'Fatias de bacon a gosto',
          '1 cebola média cortada em rodelas',
          '2 a 3 dentes de alho',
          'Sal a gosto',
          'Pimenta do reino a gosto',
          'Óleo à vontade e um fio de azeite'
        ],
        instructions: 'Refogar em pouco óleo o bacon, a cebola e o alho, nessa ordem. Jogar o ovo batido, com sal, e deixe fritar junto. Depois de frito, cortar o ovo em pedaços. Jogar as folhas de couve-flor no refogado, usando também os talos mais finos, se desejar. Colocar sal e espere abafar bem. Se necessário, adicionar um pouco de água. Adicionar a farinha de mandioca, mexer bem e colocar uma xícara de água com sal, uma colher de sopa de óleo e uma colher de sopa de azeite de oliva. Se a farofa estiver muito seca, adicionar mais água e óleo. Mexer bem e adicionar a pimenta do reino, servir a seguir.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/HBXHCCF.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'risoto_de_talos_de_brocolis',
        name: 'Risoto de talos de brócolis',
        ingredients: [
          '--- Para o caldo de legumes ---',
          '1 cebola grande',
          '2 colheres de sopa de vinho branco ou vinagre de vinho',
          '1 colher de sopa de alho',
          '1 litro de água',
          '--- Para o risoto ---',
          '2 xícaras de arroz (pode ser comum ou o próprio para risoto)',
          '1 prato de sobremesa de talos de brócolis picados bem fininhos',
          '1 cenoura picada',
          '6 xícaras de caldo'
        ],
        instructions: 'Lavar o arroz e escorrer. Numa panela em fogo médio, adicionar os talos de brócolis e a cenoura, o arroz e duas xícaras de caldo. Tampar a panela e deixar cozinhar por 10 minutos. Abrir a panela e à medida que o caldo for reduzindo acrescentar uma nova concha. Repetir o processo até terminar o caldo. Deixar por mais 5 minutos e servir.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/HBXHCCF.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'torta_de_alho-poro_e_abobora',
        name: 'Torta de alho-poró e abóbora',
        ingredients: [
          '--- Recheio ---',
          '3 xícaras de chá de abóbora ralada com a casca',
          '1 alho-poró picado com as folhas verdes (descarte as pontas mais duras)',
          '1 colher de sopa de óleo',
          '1 colher de sopa de curry (opcional)',
          '1/2 cubo de caldo de galinha dissolvido em 1 xícara de água morna',
          '5 colheres de sopa de farinha de trigo tostada',
          '1/2 litro de leite',
          '100ml de creme de leite',
          'Sal a gosto',
          '--- Massa ---',
          '150g de manteiga (não pode ser margarina)',
          '2 xícaras de chá de farinha de trigo',
          '1 pitada de sal',
          '1 ovo inteiro',
          '2 colheres de sopa de água'
        ],
        instructions: 'Da farinha de trigo tostada: colocar 1 colher de sopa de óleo em uma panela e acrescentar 5 colheres de sopa cheias de farinha de trigo. Mexer até a farinha ficar levemente dourada. Reservar. Massa: misturar a manteiga com a farinha com ajuda de um garfo até obter uma farofa. Acrescentar o sal e misturar bem. Acrescentar o ovo e a água até obter uma massa macia que não grude nas mãos. Guardar na geladeira dentro de um saco plástico por mais ou menos 3 horas. Recheio: em uma panela refogar o alho-poró, a abóbora e o curry em uma colher de óleo, até a abóbora ficar macia. Acrescentar o caldo de galinha diluído em água morna, mexendo bem. Adicionar aos poucos a farinha tostada, alternando com o leite até formar um creme homogêneo. Por último, acrescente o creme de leite e desligue o fogo. Abrir a massa com ajuda de um rolo em uma superfície enfarinhada e colocar em forma untada com manteiga. Fazer pequenos furos na massa com um garfo. Levar para pré-assar em forno quente por 15 minutos. Retirar a massa do forno, adicionar o recheio e levar para assar por mais 15 a 20 minutos.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/T2cMkDZ.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'bolinhos_de_talos_folhas_ou_cascas',
        name: 'Bolinhos de talos, folhas ou cascas',
        ingredients: [
          '1 xícara de chá de talos de couve e de agrião',
          '2 ovos',
          '5 colheres de sopa de farinha de trigo',
          '1/2 cebola picada',
          '2 colheres de sopa de leite',
          'Orégano, sal e pimenta a gosto',
          '1 colher de sopa (rasa) de fermento em pó'
        ],
        instructions: 'Lavar bem os talos e cortar em cubinhos. Em seguida leve-os para ferver rapidamente. Escorrer os talos e apertar bem para tirar o excesso de água. Bater os ovos, acrescentando o restante dos ingredientes, deixando o fermento em pó por último. Misturar bem. Fritar os bolinhos às colheradas em óleo bem quente.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/B2Tf8pr.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'torta_salgada_de_talos_e_cascas',
        name: 'Torta salgada de talos e cascas de legumes',
        ingredients: [
          '4 xícaras de chá de talos e cascas bem lavadas e picadas',
          '2 ovos',
          '1 xícara de chá de pão amanhecido molhado no leite',
          '1 cebola pequena picada',
          '2 colheres de sopa de queijo ralado',
          '1 colher de sopa de óleo',
          'Cheiro verde e sal a gosto'
        ],
        instructions: 'Bater as cascas e as folhas depois de cozidas no liquidificador e passar numa peneira. Em seguida acrescentar os demais ingredientes, misturando bem. Colocar numa forma untada e levar ao forno preaquecido até dourar.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/FKzb2We.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'salada_crua_de_folhas_de_beterraba',
        name: 'Salada crua de folhas de beterraba',
        ingredients: [
          'Folhas firmes de um maço de beterrabas com três ou quatro unidades',
          '1 maço pequeno de agrião ou 1/4 de um maço grande',
          '1 pé de alface (lisa ou crespa)',
          '2 tomates',
          'Sal e azeite de oliva a gosto'
        ],
        instructions: 'Lavar bem as folhas em água corrente e deixá-las de molho em água com produto para higienização de verduras. Retirar do molho e escorrer. Alisar bem as folhas de beterraba, colocar umas sobre as outras em grupos de quatro ou cinco unidades; enrolar bem e cortar bem fininho, a partir da ponta, igual a couve manteiga. Reservar. Montar o prato começando com as alfaces, espalhar sobre elas as tiras das folhas de beterraba, as rodelas de tomate e, por fim, as folhas de agrião. Regar com o molho de sua preferência, não se esquecendo do azeite de oliva.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/e3nf3UG.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'torta_de_talos_folhas_e_verduras',
        name: 'Torta de Talos, Folhas e Verduras',
        ingredients: [
          'Talos e folhas de brócolis, couve-flor, cenoura, beterraba e nabo',
          '3 ovos',
          '1/2 xícara de óleo',
          '1 xícara de leite',
          '2 xícaras de farinha de trigo',
          '2 colheres de sopa de amido de milho',
          '1 colher de sopa de fermento',
          '1 cubinho de caldo (sabor de sua preferência)'
        ],
        instructions: 'Pique todos os talos e folhas bem fininhos. Refogue com os temperos de costume e reserve. Bata no liquidificador todos os outros ingredientes, um de cada vez. Misture o refogado à massa. Unte a forma e asse em forno preaquecido durante 30 minutos.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/JYVgnxj.jpeg',
        source: 'CÂMARA MUNICIPAL DE TANGARÁ DA SERRA. Caderno de Receita: Reaproveitamento de Alimentos. Tangará da Serra: Câmara Municipal de Tangará da Serra, 2021.'
      },
      {
        id: 'arroz_de_talos',
        name: 'Arroz de Talos',
        ingredients: [
          '1 fio de óleo',
          '1 colher (sopa) de alho',
          'Sal à gosto',
          '1 xícara (chá) de arroz',
          'Talos de salsa e de couve manteiga à gosto',
          '2 xícaras (chá) de água'
        ],
        instructions: 'Em uma panela média, aqueça o óleo e refogue o alho picado, sal a gosto, arroz e os talos à gosto. Adicione água e tampe pela metade a panela até que a água seque e o arroz cozinhe e fique macio, se necessário, adicione mais água.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/cS8bl6v.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'chips_de_casca_e_sementes',
        name: 'Chips de Casca e Sementes',
        ingredients: [
          'Casca de 2 a 3 cenouras',
          'Casca de 2 a 3 batatas',
          '3 colheres (sopa) de semente de abóbora',
          '5 colheres (sopa) de azeite de oliva',
          '2 colheres (sopa) de cheiro verde e cebolinha',
          '1/2 colher (chá) de sal',
          '1 pitada de pimenta do reino'
        ],
        instructions: 'Distribua em um tabuleiro as cascas e sementes higienizadas e regue com azeite. Adicione o cheiro verde, a cebolinha, sal e pimenta do reino à gosto. Leve ao forno baixo por aproximadamente 15 minutos ou até que fiquem douradas. Sirva.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/I9gbktc.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'pao_de_folhas_e_talos',
        name: 'Pão de Folhas e Talos',
        ingredients: [
          '2 xícaras (chá) de folhas e talos picados',
          '1 e 1/2 xícara (chá) de água',
          '1 ovo',
          '1 colher (chá) de açúcar',
          '3 colheres (chá) de sal',
          '1 tablete de fermento biológico',
          '3 colheres (sopa) de óleo',
          '4 e 1/2 xícaras (chá) de farinha de trigo',
          'Óleo e farinha para untar'
        ],
        instructions: 'Coloque folhas e talos no liquidificador com a água e bata bem. Junte o ovo, o açúcar, o sal, o fermento e o óleo e continue batendo. Em uma vasilha, coloque a farinha de trigo e despeje a mistura do liquidificador. Amasse até desgrudar das mãos. Deixe a massa descansar até dobrar de volume. Amasse novamente e forme os pães, colocando em uma assadeira untada. Deixe a massa crescer novamente. Leve para assar em forno moderado a 180°C por aproximadamente 40 minutos.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/buXiEFp.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'bolinho_de_casca_de_batata',
        name: 'Bolinho de Casca de Batata',
        ingredients: [
          '2 xícaras (chá) de cascas de batata',
          '2 ovos',
          '2 xícaras (chá) de farinha de trigo',
          'Sal a gosto',
          '1 colher (sobremesa) de fermento em pó',
          '2 colheres (sopa) de salsinha picada com talos',
          'Óleo para fritar'
        ],
        instructions: 'Cozinhe as cascas das batatas e depois bata-as no liquidificador. Coloque a massa numa tigela, acrescente os ovos, a farinha, o sal, o fermento e a salsinha. Misture bem. Depois, aqueça o óleo e faça os bolinhos com ajuda de uma colher e frite-os.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/I9gbktc.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'sufle_de_talos',
        name: 'Suflê de Talos',
        ingredients: [
          '1/2 pão amanhecido',
          '4 xícaras de chá de talos de agrião',
          '2 colheres de sopa de óleo',
          '2 colheres de sopa de farinha de trigo',
          '1 xícara de leite',
          '3 ovos',
          '1 colher de sobremesa de salsa',
          'Orégano e sal a gosto',
          '1/3 de xícara de chá de água'
        ],
        instructions: 'Corte o pão em fatias de mais ou menos 1cm de largura. Coloque-as de molho com 1/3 de xícara de chá de água e reserve. Aqueça o óleo e doure a farinha, junte com o leite e mexa até engrossar e reserve. Pique os talos, junte o pão amolecido, as gemas batidas, a salsa, o orégano e o sal. Misture bem. Por último, acrescente as claras em neve. Mexa delicadamente e acrescente o creme branco. Coloque em uma forma untada e leve para assar por 30 minutos.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/o0nQ1Zg.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'bolo-casca-banana-2',
        name: 'Bolo de Casca de Banana (versão 2)',
        ingredients: [
          'Cascas de banana',
          'Açúcar',
          'Ovos',
          'Farinha de trigo',
          'Fermento',
          'Óleo'
        ],
        instructions: 'Bata as cascas com os ovos e óleo no liquidificador. Misture com os demais ingredientes e leve ao forno até dourar.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/uxWSBHW.jpeg',
        source: 'Receita da família do Piettro Miguell Oliveira Cruz de Lima',
        extra: 'Dica: “Façam essa receita! Ela é muito saborosa!”'
      },
      {
        id: 'cascas-banana-milanesa',
        name: 'Cascas de Banana à Milanesa',
        ingredients: [
          'Cascas de banana',
          'Farinha de trigo',
          'Ovo batido',
          'Farinha de rosca',
          'Óleo para fritar'
        ],
        instructions: 'Lave bem as cascas, passe na farinha, depois no ovo, empane na farinha de rosca e frite até dourar.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/yns5ANG.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'salada-casca-abobora',
        name: 'Salada de Cascas de Abóbora',
        ingredients: [
          'Cascas de abóbora',
          'Cebola',
          'Tomate',
          'Azeite',
          'Sal'
        ],
        instructions: 'Cozinhe rapidamente as cascas até ficarem macias. Misture com cebola e tomate picados, tempere com sal e azeite.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/e3nf3UG.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'farofa-folhas-couveflor',
        name: 'Farofa de Folhas de Couve-flor',
        ingredients: [
          'Folhas de couve-flor',
          'Farinha de mandioca',
          'Cebola',
          'Alho',
          'Óleo',
          'Sal'
        ],
        instructions: 'Refogue cebola e alho no óleo. Acrescente as folhas picadas, depois a farinha, mexa bem e sirva.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/3e8d1ed.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'charuto-folha-beterraba',
        name: 'Charutos de Folha de Beterraba',
        ingredients: [
          'Folhas de beterraba',
          'Arroz cozido',
          'Carne moída ou soja',
          'Temperos a gosto'
        ],
        instructions: 'Branqueie as folhas, recheie com arroz e carne, enrole como charuto e cozinhe em molho leve.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/ijwZbnD.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      },
      {
        id: 'suco-casca-abacaxi-2',
        name: 'Suco de Casca de Abacaxi (versão 2)',
        ingredients: [
          'Cascas de abacaxi bem lavadas',
          'Água',
          'Açúcar ou mel a gosto'
        ],
        instructions: 'Bata as cascas no liquidificador com água. Coe, adoce a gosto e sirva gelado.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/7AK0Pyy.jpeg',
        source: 'Receita da família da Millena Silva de Lima'
      },
      {
        id: 'flor_de_abobora_a_milanesa',
        name: 'Flor de abóbora à milanesa \'Fiore de Zucca\'',
        ingredients: [
          '10 flores de abóbora',
          '2 ovos batidos com um garfo',
          '1 xícara de chá de farinha de rosca',
          '1 xícara de chá de farinha de trigo',
          'Sal e pimenta do reino a gosto',
          'Óleo para fritar'
        ],
        instructions: 'Retirar o miolo das flores e o caule. Deixar as sépalas verdes que seguram as pétalas. Lavar bem as flores, mas com cuidado para não rasgar. Colocar cada um dos ingredientes em um prato separado. Passar a flor de abóbora fechada no ovo e em seguida na farinha de trigo. Passar novamente no ovo e finalmente na farinha de rosca. Colocar o óleo numa frigideira o suficiente para que as flores fiquem submersas, e quando estiver quente, coloque-as para fritar. Virar com cuidado, para que a flor fique dourada e crocante por inteiro. À medida que as flores estiverem douradas, retire-as do fogo e coloque-as sobre um papel toalha para retirar o excesso de óleo. Servir quentinha.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/LFTuxMM.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'pao_de_abobora_com_sementes',
        name: 'Pão de Abóbora com Sementes',
        ingredients: [
          '1 xícara (chá) de abóbora sem casca',
          '3 xícaras (chá) de água',
          '2 xícaras (chá) de farinha de trigo',
          '1 colher (sobremesa) de açúcar',
          '1 ovo',
          '4 colheres (sopa) de semente de abóbora in natura',
          '1/2 tablete de fermento biológico',
          '1 colher (sobremesa) de sal',
          '1 colher (sopa) de óleo',
          '1 e 1/2 colher (sopa) de leite'
        ],
        instructions: 'Cozinhe a abóbora com 3 xícaras (chá) de água até que fique macia. Escorra a água e amasse a abóbora com um garfo, formando um purê. Deixe esfriar. Em uma travessa, misture a farinha de trigo, o açúcar, o ovo, a abóbora, a semente de abóbora, o fermento, o sal, o óleo e, por último, o leite. Amasse bem. Deixe a massa descansar, coberta por um plástico, em uma assadeira untada com óleo, por 15 minutos. Transfira para uma mesa limpa, seca e já polvilhada com farinha de trigo. Divida a massa ao meio e modele enrolando em espiral cada pedaço com um rolo de cerca de 60 cm de comprimento. Depois, coloque os pães em uma assadeira untada com óleo e deixe fermentar por 30 a 40 minutos. Asse em forno preaquecido, a 160 °C, por aproximadamente 20 minutos.',
        category: 'Cascas, Talos e Folhas',
        image: 'https://i.imgur.com/ALds4sq.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
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
        id: 'geleia_de_manga_sem_acucar',
        name: 'Geleia de Manga sem Açúcar',
        ingredients: [
          '1 Manga',
          '1 xícara (chá) rasa de suco de laranja lima',
          '1 pitada de sal'
        ],
        instructions: 'Descascar a manga e cortar em fatias. Cozinhar até amolecer junto com o suco e o sal. Se usar panela de pressão, cozinhar por 15 minutos após o início da pressão. Destampar e ir mexendo até secar bem o caldo. Para ficar em ponto de geleia, cozinhar até soltar bem do fundo da panela.',
        category: 'Frutas Maduras',
        image: 'https://i.imgur.com/kxacJXS.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'geleia-frutas',
        name: 'Geleia de Frutas Maduras',
        ingredients: [
          'Frutas maduras (morango, manga, etc.)',
          'Açúcar',
          'Limão'
        ],
        instructions: 'Cozinhe as frutas picadas com açúcar e suco de limão até atingir o ponto de geleia.',
        category: 'Frutas Maduras',
        image: 'https://i.imgur.com/RTpynIA.jpeg',
        source: 'Pesquisa dos Estudantes'
      },
      {
        id: 'sorvete-banana',
        name: 'Sorvete de Banana Congelada',
        ingredients: [
          'Banana madura congelada'
        ],
        instructions: 'Bata as bananas congeladas no processador até obter uma consistência cremosa de sorvete.',
        category: 'Frutas Maduras',
        image: 'https://i.imgur.com/wiz6G3n.jpeg',
        source: 'Pesquisa dos Estudantes.'
      }
    ]
  },
  {
    id: 'receitas-de-familia',
    title: 'Receitas de Família',
    description: 'Receitas que vieram das casas dos nossos estudantes, cheias de afeto, memórias e sabores especiais. Aqui a escola e a família cozinham juntas.',
    image: 'https://i.imgur.com/HBXHCCF.jpeg',
    recipes: [
      {
        id: 'pudim-mais-gostoso',
        name: 'O Pudim mais Gostoso do Mundo',
        ingredients: [
          'Leite condensado',
          'Leite',
          'Ovos',
          'Açúcar para caramelizar'
        ],
        instructions: 'Bata tudo no liquidificador, coloque em forma caramelizada e asse em banho-maria até firmar. Para fazer a calda, Em uma forma, adicione 2 xícaras de açúcar e leve ao forno até formar uma calda. Coloque o conteúdo do liquidificador na forma e leve ao forno.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/7Bcgu2m.jpeg',
        source: 'Receita da família da Kethelyn Vale Pereira',
        extra: 'História: "Minha tia Cecília sempre fazia para a gente comer"'
      },
      {
        id: 'bolo-cenoura',
        name: 'Bolo de Cenoura',
        ingredients: [
          'Cenouras',
          'Ovos',
          'Óleo',
          'Açúcar',
          'Farinha de trigo',
          'Fermento'
        ],
        instructions: 'Coloque a cenoura, ovo, margarina, açúcar, leite, e o fermento no liquidificador. Quando estiver homogêneo, coloque em uma forma untada e no forno a 180 °C por 45 minutos.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/9tRQE9H.jpeg',
        source: 'Receita da família de Lucas Gabriel Dias Cerqueira'
      },
      {
        id: 'salada-frutas',
        name: 'Salada de Frutas',
        ingredients: [
          'Frutas variadas',
          'Suco de laranja ou limão',
          'Açúcar ou mel a gosto',
          'Leite condensado'
        ],
        instructions: 'Pegue as frutas, lave elas muito bem e depois pegue uma faca para cortá-las em cubinhos pequenos. Depois, pegue o pote, coloque as frutas e, em seguida, o leite condensado. Coloque na geladeira por 15 minutos.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/X2whWVA.jpeg',
        source: 'Receita da família de Ana Clara Freitas Ramos',
        extra: 'Dica: "A dica é colocar na geladeira!\"'
      },
      {
        id: 'hamburguer-empanado',
        name: 'Hambúrguer Empanado',
        ingredients: [
          'Carne moída temperada ou hambúrguer pronto',
          'Farinha de trigo',
          'Ovo batido',
          'Farinha de rosca',
          'Óleo'
        ],
        instructions: 'Passe os hambúrgueres na farinha, depois no ovo, depois na farinha de rosca. Frite até dourar.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/wBGSJfU.jpeg',
        source: 'Receita da família da Emilly Vitória dos Santos Bacagine'
      },
      {
        id: 'bolinho-arroz-familia',
        name: 'Bolinho de Arroz (Vovó Tereza)',
        ingredients: [
          'Arroz cozido',
          'Ovos',
          'Farinha de trigo',
          'Queijo ralado',
          'Temperos'
        ],
        instructions: 'Misture o arroz com os demais ingredientes até formar massa. Modele os bolinhos e frite até dourar.',
        category: 'Receitas de Família',
        image: 'https://i.imgur.com/cS8bl6v.jpeg',
        source: 'Receita da família de Maria Fernanda Queiroz de Almeida',
        extra: 'História: "Era uma receita da minha Vovó Tereza e da minha Mãe Eliana.\"'
      },
      {
              id: 'pudim-pao-amanhecido-2',
        name: 'Pudim de Pão Amanhecido (versão 2)',
        ingredients: [
          'Pães amanhecidos',
          'Leite',
          'Açúcar',
          'Ovos',
          'Canela',
          'Maisena'
        ],
        instructions: 'No liquidificador, coloque o pão picado, junte o leite, os ovos, o açúcar e a maisena. Deixe bater por cinco minutos. Ingredientes para a Calda: Uma xícara de açúcar e meia xícara de água. Coloque o açúcar em uma panela e deixe derreter. Depois de derretido, coloque a água e deixe ferver até virar uma calda. Despeje a mistura do pudim em uma forma untada com a calda e leve ao forno em banho-maria por mais ou menos 2 horas.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/6RV3Yod.jpeg',
        source: 'Receita da família de Vítor Moura Viana',
        extra: 'Dica: "Espete um palito de dente no pudim, e se sair limpo, está pronto. Desenforme em um recipiente, deixe gelar e bom apetite!\"'
      },
      {
        id: 'pudim-pao',
        name: 'Pudim de Pão',
        ingredients: [
          'Pães amanhecidos',
          'Leite',
          'Ovos',
          'Açúcar',
          'Manteiga',
          'Farinha de trigo',
          'Óleo',
          'Fermento em pó'
        ],
        instructions: 'Em uma tigela, coloque os pães e cubra com o leite. Deixe de molho até que os pães fiquem bem macios e absorvam o leite. Amassar bem os pães com o leite até obter uma mistura homogênea. Adicione os ovos, a manteiga, a farinha de trigo, o açúcar e o óleo. Mexa bem. Por último, acrescente o fermento em pó e misture delicadamente. Unte uma forma com manteiga e despeje a massa. Leve ao forno pré-aquecido a 180°C por aproximadamente 40 minutos, ou até dourar e firmar. Deixe esfriar antes de desenformar e, se desejar, polvilhe coco ralado por cima.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/7Bcgu2m.jpeg',
        source: 'Receita da família de Ana Julia Batista da Silva',
        extra: 'História: "Minha bisavó fazia no café da manhã para o meu pai.\"'
      },
      {
        id: 'sopa-legumes-nordeste',
        name: 'Sopa de Legumes do Nordeste',
        ingredients: [
          'Legumes variados',
          'Macarrão ou arroz',
          'Caldo de feijão',
          'Carne',
          'Temperos a gosto'
        ],
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
    description: 'O arroz de ontem, o pão amanhecido ou aquele restinho de carne podem virar pratos novos e deliciosos. Dê uma nova vida às suas sobras com criatividade e sabor.',
    image: 'https://i.imgur.com/e3nf3UG.jpeg',
    recipes: [
      {
        id: 'cuscuz_de_sobras_de_peixe',
        name: 'Cuscuz de sobras de peixe',
        ingredients: [
          '1 xícara de chá de óleo',
          '1 cebola ralada',
          '2 xícaras de chá de água',
          'Sobras de peixe',
          '10 azeitonas',
          '1 lata de ervilha',
          '1 caixa de molho de tomate',
          '1 pimentão vermelho picado',
          '1 lata de milho',
          '3 xícaras de chá de farinha de milho amarela'
        ],
        instructions: 'Refogar a cebola no óleo. Colocar o peixe, as azeitonas picadas, a ervilha, o pimentão, o milho, o molho de tomate e a água. Sal e pimenta a gosto. Quando começar a ferver, colocar a farinha de milho mexendo sempre, até se desprender do fundo. Despejar numa forma redonda de furo untada com azeite. Servir frio.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/PpfHE6u.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'lasanha_de_arroz_cozido',
        name: 'Lasanha de arroz cozido',
        ingredients: [
          'Aproximadamente 600 g de sobras de arroz cozido',
          '200 g de muçarela',
          '200 g de presunto',
          '50 g de queijo ralado',
          'Molho de tomate a gosto'
        ],
        instructions: 'Juntar as sobras de arroz ao molho de tomate, deixando uma sobra de molho para a finalização, espalhar essa mistura sobre uma travessa refratária untada com azeite. Colocar as fatias de presunto intercalando com o queijo muçarela. Cobrir com o restante do molho de tomate, terminando com o queijo ralado. Levar ao forno preaquecido para gratinar.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/ekiGf2x.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'bolinho_de_arroz',
        name: 'Bolinho de arroz',
        ingredients: [
          '3 xícaras de chá de sobra de arroz',
          '1 colher de sopa de queijo ralado',
          '2 ovos',
          'Sal e pimenta do reino a gosto',
          '1 colher de chá de fermento em pó',
          'Farinha de trigo (o suficiente para dar o ponto)',
          'Óleo para fritar'
        ],
        instructions: 'Bater o arroz no liquidificador (ou moer na máquina). Ainda no liquidificador, juntar os ovos, o queijo ralado, o sal e farinha de trigo suficiente para formar uma massa mole. Pegar uma porção da massa com uma colher e colocar na frigideira com óleo bem quente e fritar dos dois lados. Escorrer em papel toalha.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/8MAknIL.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'viradinho_da_vovo',
        name: 'Viradinho da vovó',
        ingredients: [
          '1 colher de sobremesa de azeite de oliva',
          '1 cebola média picadinha',
          '5 ou 6 azeitonas picadas',
          '1 colher de sopa de alcaparras',
          '1 dente de alho amassado ou picado',
          '1 colher de chá de temperos (cúrcuma, páprica, orégano)',
          '2 mãos cheias de farinha de milho',
          'Sobras de frango picadinho',
          'Sobras de carne assada, bifes ou moída',
          'Sobras de batata, couve, acelga, abobrinha, repolho, brócolis, arroz e feijão'
        ],
        instructions: 'Refogar a cebola e o alho no azeite. Acrescentar azeitonas e batatas, colocar as sobras de carne e refogar bem. Colocar as outras sobras, sempre refogando. Começar com os ingredientes úmidos como couve, acelga, etc. Como tudo já está previamente temperado, não há necessidade de colocar mais sal. Adicionar alcaparras, cúrcuma, páprica, orégano e depois o feijão. Por último, colocar o arroz, mexendo para que fique misturado de forma homogênea. Então, adicionar a farinha de milho e misturar.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/qU0gkGM.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'pudim_de_pao_amanhecido',
        name: 'Pudim de Pão Amanhecido (versão 1)',
        ingredients: [
          '3 pães pequenos amanhecidos',
          '500 ml de leite',
          '3 ovos inteiros',
          '2 xícaras (chá) de açúcar',
          'Raspa de limão a gosto',
          '1 xícara (chá) de coco ralado fresco'
        ],
        instructions: 'Corte os pãezinhos em rodelas com aproximadamente 2 cm de espessura cada. Distribua as rodelas de pão no fundo do refratário. No liquidificador, bata o leite, os ovos e o açúcar. Acrescente as raspas de limão e o coco. Despeje a mistura sobre o pão. Asse em banho-maria no forno preaquecido por 30 minutos. Espere amornar e leve à geladeira para servir gelado.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/7Bcgu2m.jpeg',
        source: 'CÂMARA MUNICIPAL DE TANGARÁ DA SERRA. Caderno de Receita: Reaproveitamento de Alimentos. Tangará da Serra: Câmara Municipal de Tangará da Serra, 2021.'
      },
      {
        id: 'pudim-pao-amanhecido-2',
        name: 'Pudim de Pão Amanhecido (versão 2)',
        ingredients: [
          'Pães amanhecidos',
          'Leite',
          'Açúcar',
          'Ovos',
          'Canela',
          'Maisena'
        ],
        instructions: 'No liquidificador, coloque o pão picado, junte o leite, os ovos, o açúcar e a maisena. Deixe bater por cinco minutos. Ingredientes para a Calda: Uma xícara de açúcar e meia xícara de água. Coloque o açúcar em uma panela e deixe derreter. Depois de derretido, coloque a água e deixe ferver até virar uma calda. Despeje a mistura do pudim em uma forma untada com a calda e leve ao forno em banho-maria por mais ou menos 2 horas.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/V4mjYFu.jpeg',
        source: 'Receita da família de Vítor Moura Viana',
        extra: 'Dica: "Espete um palito de dente no pudim, e se sair limpo, está pronto. Desenforme em um recipiente, deixe gelar e bom apetite!\"'
      },
      {
        id: 'pudim-pao',
        name: 'Pudim de Pão',
        ingredients: [
          'Pães amanhecidos',
          'Leite',
          'Ovos',
          'Açúcar',
          'Manteiga',
          'Farinha de trigo',
          'Óleo',
          'Fermento em pó'
        ],
        instructions: 'Em uma tigela, coloque os pães e cubra com o leite. Deixe de molho até que os pães fiquem bem macios e absorvam o leite. Amassar bem os pães com o leite até obter uma mistura homogênea. Adicione os ovos, a manteiga, a farinha de trigo, o açúcar e o óleo. Mexa bem. Por último, acrescente o fermento em pó e misture delicadamente. Unte uma forma com manteiga e despeje a massa. Leve ao forno pré-aquecido a 180°C por aproximadamente 40 minutos, ou até dourar e firmar. Deixe esfriar antes de desenformar e, se desejar, polvilhe coco ralado por cima.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/7Bcgu2m.jpeg',
        source: 'Receita da família de Ana Julia Batista da Silva',
        extra: 'História: "Minha bisavó fazia no café da manhã para o meu pai.\"'
      },
      {
        id: 'lasanha-arroz-cozido-2',
        name: 'Lasanha de Arroz Cozido',
        ingredients: [
          'Arroz cozido',
          'Molho de tomate',
          'Queijo',
          'Presunto ou legumes',
          'Temperos'
        ],
        instructions: 'Monte em camadas o arroz, o molho e os recheios. Finalize com queijo e leve ao forno para gratinar.',
        category: 'Sobras Criativas',
        image: 'https://i.imgur.com/ekiGf2x.jpeg',
        source: 'Receita pesquisada pelos estudantes do 3º Ano A. Fonte: SÃO PAULO (SP). Secretaria Municipal do Desenvolvimento Social. Receitas do Circuito Butantan da Maior Idade. São Paulo: SMDES, 2017.'
      }
    ]
  },
  {
    id: 'sucos-e-bebidas',
    title: 'Sucos e Bebidas',
    description: 'Refresque-se de forma sustentável. Aprenda a fazer sucos, chás e águas aromatizadas usando cascas e partes de frutas que normalmente seriam descartadas.',
    image: 'https://i.imgur.com/gZTReiO.jpeg',
    recipes: [
      {
        id: 'cha_de_cascas_de_abacaxi',
        name: 'Chá de cascas de abacaxi',
        ingredients: [
          'Cascas de abacaxi previamente lavadas',
          '1 litro de água',
          '6 folhas de hortelã',
          '1 pedaço de canela em pau',
          'Açúcar a gosto'
        ],
        instructions: 'Depois de lavadas, ferver as cascas de abacaxi na água por aproximadamente dez minutos. Em seguida, desligar o fogo e acrescentar as folhas de hortelã para dar sabor. Tampar e deixar por mais cinco minutos descansando. Depois disso, basta bater no liquidificador, coar e adoçar a gosto, mexendo com a canela.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/QOAx20f.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'suco_de_cascas_de_abacaxi',
        name: 'Suco de cascas de abacaxi',
        ingredients: [
          'Cascas de 1 abacaxi',
          'Água',
          'Açúcar'
        ],
        instructions: 'Lavar o abacaxi. Cortar as cascas em pedaços e bater no liquidificador com um pouco de água. Coar e acrescentar água e açúcar a gosto.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/7AK0Pyy.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'agua_aromatizada_com_abacaxi',
        name: 'Água aromatizada com abacaxi',
        ingredients: [
          'Cascas de 1 abacaxi',
          'Folhas de hortelã a gosto',
          '2 litros de água gelada'
        ],
        instructions: 'Lavar o abacaxi com escova em água corrente, em seguida descasque a fruta. Mergulhar as cascas e um punhado de folhas de hortelã numa jarra com água e levar à geladeira.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/lmQQvhe.jpeg',
        source: 'INSTITUTO BUTANTAN. Talos, cascas e sabores: Receitas do Circuito Butantan da Maior Idade. São Paulo: Instituto Butantan, 2017.'
      },
      {
        id: 'cha_de_casca_de_maca_com_gengibre',
        name: 'Chá de Casca de Maçã com Gengibre',
        ingredients: [
          '1 litro de água mineral',
          'Cascas de 4 maçãs',
          '1 colher de sopa de gengibre picado (ou 5g em tiras finas)',
          'Açúcar ou mel a gosto'
        ],
        instructions: 'Pegue a casca de quatro maçãs e coloque-as de molho em um litro de água fria para infusão. Descasque o gengibre, corte-o em tiras finas e coloque junto à água com as cascas da fruta. Leve a mistura ao fogo. Quando levantar fervura, abaixe o fogo e deixe apurar por mais dez minutos. Coe antes de servir.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/vr38LcK.jpeg',
        source: 'CÂMARA MUNICIPAL DE TANGARÁ DA SERRA. Caderno de Receita: Reaproveitamento de Alimentos. Tangará da Serra: Câmara Municipal de Tangará da Serra, 2021.'
      },
      {
        id: 'suco_de_casca_de_manga',
        name: 'Suco de Casca de Manga',
        ingredients: [
          'Cascas de uma manga',
          'Açúcar a gosto',
          '200 ml de água'
        ],
        instructions: 'Bata todos os ingredientes no liquidificador. Sirva coado ou não.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/gZTReiO.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'refrigerante_caseiro',
        name: 'Refrigerante Caseiro',
        ingredients: [
          '4 cenouras grandes',
          '1 copo de suco de limão',
          'Casca de uma laranja',
          '3 litros de água',
          'Açúcar a gosto',
          'Gelo a gosto'
        ],
        instructions: 'Bater no liquidificador as cenouras com 2 copos de água. Coar em um guardanapo e reservar o resíduo. À parte, bater o suco de cenoura, o suco de limão e a casca de laranja. Coar em peneira e acrescentar o restante da água, o açúcar e o gelo.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/a5h2J8U.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'suco_de_abacaxi_com_couve',
        name: 'Suco de Abacaxi com Couve',
        ingredients: [
          'Cascas de 1 abacaxi',
          '1 litro de água',
          '1/2 folha de couve com talo',
          'Açúcar a gosto'
        ],
        instructions: 'Ferver a casca do abacaxi com 1 litro de água para fazer o suco. Bater no liquidificador o suco da casca e acrescentar a couve picada e o açúcar. Coar e servir com gelo.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/ZybNhQ6.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'suco_de_beterraba',
        name: 'Suco de Beterraba',
        ingredients: [
          '1 beterraba cozida',
          '1 limão com casca sem caroço',
          '1 litro de água',
          'Açúcar a gosto'
        ],
        instructions: 'Bater primeiro a beterraba e coar. Adicionar o restante dos ingredientes e bater bem. Coar e bater novamente.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/5Ar7BKE.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'suco_de_casca_de_maca',
        name: 'Suco de Casca de Maçã',
        ingredients: [
          'Cascas de 6 maçãs',
          '1 litro de água',
          'Açúcar a gosto'
        ],
        instructions: 'Lavar bem as maçãs e depois descascá-las. Levar ao fogo as cascas e a água para ferver. Bater no liquidificador, coar e adoçar a gosto. Completar com água gelada. OBS.: Se for para consumo imediato, não precisa de cozimento.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/5Ar7BKE.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'suco_de_cascas_de_frutas',
        name: 'Suco de Cascas de Frutas',
        ingredients: [
          '3 xícaras (chá) de cascas de frutas variadas',
          '2 litros de água',
          'Açúcar a gosto'
        ],
        instructions: 'Lavar bem as cascas, bater no liquidificador com água. A seguir, coar bem e adoçar a gosto. Dica: Podemos utilizar apenas a casca de uma fruta, como a de abacaxi, maçã, manga etc.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/gZTReiO.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      },
      {
        id: 'cha_de_frutas',
        name: 'Chá de Frutas',
        ingredients: [
          '1 maçã com casca',
          'Cascas de 1 abacaxi',
          '1 laranja com casca',
          'Açúcar a gosto',
          '2 cravos-da-índia',
          'Canela em pau a gosto',
          '1 litro de água',
          'Chá de sua preferência (opcional)'
        ],
        instructions: 'Lave bem as frutas e corte em pedaços. Em uma panela, leve ao fogo médio o açúcar, o cravo e a canela para caramelizar. Acrescente as frutas e a água e deixe cozinhar. Adicione o chá de sua preferência (opcional), desligue o fogo e deixe descansar com a panela tampada. Coar.',
        category: 'Sucos e Bebidas',
        image: 'https://i.imgur.com/SVqSD55.jpeg',
        source: 'RIO DE JANEIRO (Cidade). Secretaria Municipal de Saúde. Cartilha de Receitas de Aproveitamento Integral dos Alimentos. Rio de Janeiro: Secretaria Municipal de Saúde, 2024.'
      }
    ]
  }
]
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
