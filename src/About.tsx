import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const About = () => {
  const images = [
    'https://i.imgur.com/381beb58-32a5-4cda-96a6-92c1f3cd04da',
    'https://i.imgur.com/i5Avlm3.jpeg',
    'https://i.imgur.com/uxWSBHW.jpeg',
    'https://i.imgur.com/9tRQE9H.jpeg',
  ];

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold text-brand-primary mb-4">Sobre o Projeto</h2>
      <p className="text-brand-primary mb-4">
        O aplicativo "Cada Grão Conta" é o resultado de um projeto pedagógico desenvolvido com os estudantes do 3º Ano do Ensino Fundamental da EMEF Professor João de Lima Paiva. A iniciativa buscou conectar a educação alimentar e nutricional com a valorização da cultura familiar e o combate ao desperdício de alimentos.
      </p>
      <p className="text-brand-primary mb-4">
        Ao longo do projeto, os estudantes pesquisaram receitas familiares, aprenderam sobre o aproveitamento integral dos alimentos e descobriram como a tecnologia pode ser uma ferramenta para compartilhar conhecimento. Este aplicativo é um convite para que todos possam cozinhar, aprender e fazer a diferença, um prato de cada vez.
      </p>

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
            <img src={image} alt={`Foto do projeto ${index + 1}`} className="w-full h-64 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="text-xl font-semibold text-brand-primary mt-6 mb-3">Vídeos Educativos</h3>
      <div className="space-y-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/U476_V57uXk"
              title="Como Aproveitar 100% dos Alimentos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/eSOaM3G3ruE"
              title="Compostagem Caseira: Passo a Passo"
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