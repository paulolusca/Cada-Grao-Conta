import React from 'react';
import { getResizedImgurUrl } from './utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const About = () => {
  const images = [
    'https://i.imgur.com/8FyIlCG.jpeg',
    'https://i.imgur.com/lmxiW1K.jpeg',
    'https://i.imgur.com/r48EOS7.jpeg',
    'https://i.imgur.com/LkSeUjV.jpeg',
    'https://i.imgur.com/9OcmEBT.jpeg',
    'https://i.imgur.com/i192O1f.jpeg',
    'https://i.imgur.com/YySyotX.jpeg',
    'https://i.imgur.com/HxZjyv1.jpeg',
    'https://i.imgur.com/h9EvGFQ.jpeg',
    'https://i.imgur.com/QfRJkym.jpeg',
    'https://i.imgur.com/UHIj9Ru.jpeg',
    'https://i.imgur.com/3O8JeLv.jpeg',
    'https://i.imgur.com/jsA9w8H.jpeg',
    'https://i.imgur.com/859nod5.jpeg',
    'https://i.imgur.com/jMU4Ckn.jpeg',
    'https://i.imgur.com/NIcPNp8.jpeg',
    'https://i.imgur.com/s3p0hQG.jpeg',
    'https://i.imgur.com/60Ih53Y.jpeg',
    'https://i.imgur.com/ht63045.jpeg',
    'https://i.imgur.com/1r4l1sc.jpeg',
    'https://i.imgur.com/H054w76.jpeg'
  ];

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold text-brand-primary mb-4">Sobre o Projeto</h2>
      <p className="text-brand-primary mb-4">
        O aplicativo “Cada Grão Conta” nasceu como parte de um projeto pedagógico desenvolvido com os estudantes do 3º Ano A da Escola do Futuro ETI Padre Geraldo MC Cluskey, inspirado pelo desafio de unir sustentabilidade, protagonismo infantil e participação da comunidade escolar. A proposta surgiu da necessidade de refletir sobre o desperdício de alimentos na escola e de criar estratégias para transformá-lo em aprendizado significativo, dentro e fora da sala de aula.
      </p>
      <p className="text-brand-primary mb-4">
        Durante os meses de trabalho, os estudantes participaram de rodas de conversa, realizaram pesquisas, entrevistas e levantaram dados sobre o desperdício da alimentação escolar. Também exploraram formas criativas de reaproveitar alimentos, resgatando receitas de família e investigando pratos que utilizam cascas, talos e folhas. A cada etapa, o protagonismo infantil foi valorizado, permitindo que as crianças se reconhecessem como agentes capazes de impactar a comunidade com pequenas atitudes.
      </p>
      <p className="text-brand-primary mb-4">
        Os estudantes elaboraram cartazes, roteiros de entrevistas, vídeos e contribuíram ativamente no desenvolvimento do aplicativo. Além disso, o diálogo com as famílias ampliou o alcance da proposta: histórias, dicas e receitas transmitidas de geração em geração passaram a compor um repertório coletivo de saberes, fortalecendo laços culturais e afetivos.
      </p>
      <p className="text-brand-primary mb-4">
      O resultado desse percurso é o aplicativo “Cada Grão Conta”, que reúne receitas de reaproveitamento e de famílias, acompanhadas de dicas e histórias que valorizam tanto a memória quanto a sustentabilidade. Mais do que um produto digital, o app é a materialização de um processo pedagógico que mostrou às crianças e à comunidade que pequenas ações podem gerar grandes transformações. Afinal, cada grão realmente conta.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-brand-primary mb-3">Nossos Pequenos Autores</h3>
        <p className="text-brand-primary mb-4">
          Este aplicativo é o resultado do trabalho, pesquisa e criatividade dos seguintes estudantes:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 bg-brand-secondary/10 p-4 rounded-lg">
          {[
            'ALEXANDRE ARANDES SILVA', 'ALICE SANTOS DE VASCONCELLOS', 'ALICE TORRES ULTRAMAR GIMENES',
            'ANA CLARA FREITAS RAMOS', 'ANA JULIA BATISTA DA SILVA', 'ARTHUR DOS SANTOS REIS',
            'BERNADO GABRIEL DA SILVA LIMA', 'BERNARDO ISMAEL BONFIM GOUVEIA', 'CARLOS EDUARDO SILVA',
            'DAVID MENEZES DA SILVA', 'EMILLY VITORIA DOS SANTOS BACAGINE', 'GABRIEL OLIVEIRA LOPES',
            'ISAAC KALEB TORQUATO PACHECO', 'JOAO CARLOS ARAUJO DE SANTANA', 'JOAO MIGUEL SANTANA BUORSCHIET ANTONIO',
            'JOAO PEDRO PONTUAL RAMOS', 'KETHELYN VALE PEREIRA', 'KEVIN GABRIEL FIGUEIREDO DA SILVA',
            'LARA EVANGELISTA DURAES', 'LARISSA RODRIGUES GOUVEIA', 'LIVIA CASSIANA RODRIGUES',
            'LORENA REIS DA SILVA', 'LUCAS GABRIEL DIAS CERQUEIRA', 'LUKAS MIGUEL TELMIRO DOS SANTOS',
            'MAISA VITORIA LOPES JESUS DA CONCEIÇÃO', 'MARIA FERNANDA QUEIROZ DE ALMEIDA', 'MIGUEL DE ALMEIDA FERREIRA',
            'MIKAELLY ALMEIDA DE FREITAS', 'MILLENA SILVA DE LIMA', 'PEDRO GABRIEL PEREIRA FIGUEIREDO',
            'PEDRO VIEIRA FERREIRA SALGADO', 'PIETTRO MIGUELL OLIVEIRA CRUZ DE LIMA', 'SOPHIA SCARLLET SOARES DUARTE',
            'VITOR MOURA VIANA', 'BRUNO BARBOSA ALVES ALMEIDA', 'ARTUR WILIAN AMARO DE ALMEIDA'
          ].map((name, index) => (
            <p key={index} className="text-brand-primary font-medium tracking-wide">
              {name}
            </p>
          ))}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-brand-primary mt-6 mb-3">Galeria de Fotos do Projeto</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={getResizedImgurUrl(image, 'l')} alt={`Foto do projeto ${index + 1}`} className="w-full h-64 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="text-xl font-semibold text-brand-primary mt-6 mb-3">Vídeos</h3>
      <div className="space-y-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/TuMRZOhfS70?si=5hGuwrWVbZJcuJf-"
              title="Dia Internacional da Conscientização contra o Desperdício de Alimentos e lançamento do aplicativo Cada Grão Conta"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/_tnT4JINgh4?si=CcfnYz1fVpUtXw_P"
              title="Apresentando o aplicativo Cada Grão Conta"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/6rP-A8VlVLc?si=7tvL5r9Oxl7jn2mV"
              title="Dia do Prato Limpo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
