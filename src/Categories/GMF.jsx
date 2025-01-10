import React from 'react';
import './gmf.css';

const GMF = () => {
  return (
    <div className="p-4 md:p-8">
      {/* Sección Nosotros */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-4 gap-x-6 mt-8">
        <div className="flex-1 text-justify">
          <h1 className="text-center text-3xl font-bold font-serif border-b-2 border-amber-400 mb-4 text-yellow-400">Nosotros</h1>
          <p className="text-xl font-serif">
            Somos una empresa conformada por un equipo de profesionales altamente capacitados y especializados en el sector del transporte. Nuestro objetivo es ofrecer soluciones eficientes y de calidad, respaldadas por años de experiencia y compromiso en satisfacer las necesidades de nuestros clientes.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="./Images/crafter4.jpeg"
            alt="Nosotros"
            className="w-3/4 rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Sección Misión */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-y-8 md:gap-y-4 gap-x-6 mt-12">
        
        <div className="flex-1 flex justify-center items-center">
          <img
            src="./Images/crafter4.jpeg"
            alt="Misión"
            className="w-3/4 rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className="flex-1 text-justify">
          <h1 className="text-center text-3xl font-bold font-serif border-b-2 border-amber-400 mb-4 text-yellow-400">Misión</h1>
          <p className="text-xl font-serif">
            Nuestra misión es ofrecer seguridad, tranquilidad, puntualidad y comodidad a quienes nos eligen. Utilizamos vehículos de alta gama, equipados con la tecnología más avanzada, y contamos con un personal íntegro, responsable y comprometido en brindar un servicio competitivo, inclusivo y amigable con el medio ambiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GMF;
