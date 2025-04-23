import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black px-4 md:px-16 lg:px-28">
      {/* Contenedor principal del footer */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Sección "About Us" */}
        <div className="flex-1 p-4 text-gray-300">
          <h2 className="text-lg font-bold  mb-4 text-white text-center">Nosotros</h2>
          <p className='text-justify'>
          Somos una empresa consolidada en el sector del transporte, con un equipo altamente especializado. Ofrecemos soluciones eficientes y de calidad, respaldadas por años de experiencia y un firme compromiso con la satisfacción y confianza de nuestros clientes.
          </p>
        </div>

        {/* Sección "Links" */}
        <div className="flex-1 p-4 text-center">
          <h2 className="text-lg font-bold mb-2 text-white">Contactos</h2>
          <div className=' text-white'>
          cotizaciones@gfmwhitevan.com.mx
          </div>
          
          <div className=' text-white font-semibold'>
          Telefonos: 
          </div>
          <div className=' text-white'>
          55 9372 7356 /
          55 4133 4597 /
          55 8062 5857 
          </div>
          
          <div className='text-white mt-2'>
          Cuarta cerrada de Río Churubusco # 38 Colonia Agrícola Pantitlán Alcaldía Iztacalco C.P. 08100
          </div>
          
          
        </div>

        {/* Sección "GMF" */}
        <div className="flex-1 pt-4 font-serif border-l-0 md:border-l-2 my-8"><a href="#">
        <div className="font-bold text-5xl text-amber-400 text-center ">GFM</div>
        <div className="text-xl text-amber-400 text-center">White Van</div>
        </a>
        </div>
      </div>

      {/* Texto inferior */}
      <div>
        <p className="text-gray-300 border-t p-4 mt-4 text-center">
        Para más información o cotizaciones comunícate con nosotros
        </p>
      </div>
    </footer>
  );
};

export default Footer;
