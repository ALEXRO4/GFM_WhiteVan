import React from 'react';
import './gfm.css';

const GMF = () => {
  return (
    <div className='cajaP'>
      <div className='cajaI'>
        <h2 className="text-center text-3xl font-bold font-serif border-b-2 border-amber-400 mb-4 text-yellow-400">Nosotros</h2>
        <p className="text-xl font-serif">
        Nos encontramos en la industria del transporte como una empresa consolidada, compuesta por un equipo de profesionales con una formación sólida y una alta especialización en este sector. Contamos con expertos que han adquirido conocimientos y habilidades en diversas áreas, lo que nos permite brindar un servicio excepcional. Nuestro principal objetivo es ofrecer soluciones eficaces y de alta calidad, que se caractericen por su eficiencia y atención al detalle. Estas soluciones están respaldadas por muchos años de experiencia en el mercado y por un firme compromiso con la satisfacción total de las necesidades y expectativas de nuestros clientes, siempre priorizando su bienestar y confianza.        </p>
        <div className=" h-[400px] imgNos">
          <img
            src="./Images/crafter1.jpg"
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
          <p className='text-xl font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro ducimus officia, atque, minima delectus beatae odio recusandae, ratione unde quae voluptatibus ipsum! Sequi architecto quisquam, est accusantium nihil quidem.</p>
          <div className='imaGfm'>
            <img
              src="./Images/leaf.png"
              alt="Nosotros"
              className="m-5"
            />
          </div>
        </div>
        
        <div className='cajaIn'> 
          <h1 className="text-center text-3xl font-bold font-serif border-b-2 border-amber-400 mb-4 text-yellow-400">Misión</h1>
          <p className="text-xl font-serif">
            Nuestra misión es ofrecer seguridad, tranquilidad, puntualidad y comodidad a quienes nos eligen. Utilizamos vehículos de alta gama, equipados con la tecnología más avanzada, y contamos con un personal íntegro, responsable y comprometido en brindar un servicio competitivo, inclusivo y amigable con el medio ambiente.
          </p>
          <div className='flex justify-center'>
            <img
              src="./Images/crafter3.jpg"
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
