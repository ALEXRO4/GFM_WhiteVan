import React from 'react';
import './gfm.css';

const GMF = () => {
  return (
    <div className='cajaP'>
      <div className='cajaI'>
        <h2 className="text-center text-3xl font-bold font-serif border-b-2 border-amber-400 mb-4 text-yellow-400">Nosotros</h2>
        <p className="text-xl font-serif">
        Nos encontramos en la industria del transporte como una empresa consolidada, compuesta por un equipo de profesionales con una formación sólida y una alta especialización en este sector. Contamos con expertos que han adquirido conocimientos y habilidades en diversas áreas, lo que nos permite brindar un servicio excepcional. Nuestro principal objetivo es ofrecer <strong className='text-amber-500'>soluciones eficaces</strong> y de <strong className='text-amber-500'>alta calidad</strong>, que se caractericen por su <strong className='text-amber-500'>eficiencia</strong> y atención al detalle. Estas soluciones están respaldadas por muchos años de <strong className='text-amber-500'>experiencia</strong> en el mercado y por un firme compromiso con la <strong className='text-amber-500'>satisfacción total</strong> de las necesidades y expectativas de nuestros clientes, siempre priorizando su <strong className='text-amber-500'>bienestar</strong> y <strong className='text-amber-500'>confianza</strong>.</p>
        <div className=" h-[400px] imgNos">
          <img
            src="./Images/crafter1.webp"
            alt="Nosotros"
            className="w-1/2 max-w-xl md:w-1/3 rounded-lg shadow-lg mx-auto" 
          />
        </div>
      </div>
      
      <div className='cajaD'>
        <div className='cajaSu '>
          <div className='text-center text-3xl font-bold font-serif border-b-2 border-amber-400 mb-4 text-yellow-400'>
            Descubre como ayudamos al medio ambiente!
          </div>
          <p className='text-xl font-serif'>
          Nuestros vehículos utilizan nuestro sistema de reducción catalítica selectiva para contribuir a la mejora de la calidad del aire y al cumplimiento de las normativas medioambientales, ya que convierte los NOx en nitrógeno y 
          vapor de agua inofensivos. Este compromiso con la sostenibilidad beneficia al medio ambiente al disminuir la contaminación del aire y contribuir a un futuro más limpio.
          </p>
          <div className='imaGfm'>
            <img
              src="./Images/leaf.webp"
              alt="Nosotros"
              className="m-5"
            />
          </div>
        </div>
        
        <div className='cajaIn pb-5'> 
          <h1 className="text-center text-3xl font-bold font-serif border-b-2 border-amber-400 mb-4 text-yellow-400">Misión</h1>
          <p className="text-xl font-serif">
          Nuestra misión es ofrecer <strong className='text-amber-500'>seguridad</strong>, <strong className='text-amber-500'>puntualidad</strong> y <strong className='text-amber-500'>comodidad</strong> a quienes nos eligen. Utilizamos <strong className='text-amber-500'>vehículos de alta gama</strong> y contamos con un personal <strong className='text-amber-500'>comprometido</strong> en brindar un servicio <strong className='text-amber-500'>competitivo</strong> y <strong className='text-amber-500'>amigable con el medio ambiente</strong>.
          </p>
          <div className='flex justify-center'>
            <img
              src="./Images/crafter2.webp"
              alt="Misión"
              className="w-full max-w-4xl md:w-2/3 rounded-lg shadow-lg mx-auto pt-4" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GMF;
