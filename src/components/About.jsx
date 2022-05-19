import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 hover:text-sky-700'>
              Acerca de mi
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola. Soy Omar, encantado de conocerte. Por favor mira a tu alrededor.</p>
            </div>
            <div>
              <p className='text-xl'> Tengo 2 años de experiencia construyendo Apps con la pila MERN, Nextjs. Me apasiona construir software excelente que mejore
              la vida de los que me rodean. Me especializo en la creación de software.
              para clientes que van desde individuos y pequeñas empresas y mi meta es desarrollar
              para  grandes corporaciones empresariales. ¿Qué harías si tuvieras
              un experto en software disponible a su alcance?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
