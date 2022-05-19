import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 mt-10'>Soy </p>
        <h1 className='text-4xl sm:text-7xl mt-5 font-bold text-[#ccd6f6]'>
          Omar Ortiz J
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Soy un Desarrollador Web Full Stack (MERN)
        </h2>
        <p className='text-[#8892b0] py-5 max-w-[700px] text-xl'>
        Sin duda, me siento muy afortunado de haber encontrado lo que me apasiona y de hacer de ello mi trabajo, veo el desarrollo web en su totalidad como una oportunidad para modelar el mundo del mañana por eso me interesa participar en proyectos de vanguardia en el que su impacto en la sociedad sea tal que el mundo no vuelva a ser el mismo.
        Me apasiona el tema de estructuras de datos y eficiencia computacional 
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
              <a href="https://www.linkedin.com/in/omarortizj/">
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' /> 
            </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
