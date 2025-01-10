import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black px-4 md:px-16 lg:px-28">
      {/* Contenedor principal del footer */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Sección "About Us" */}
        <div className="flex-1 p-4 text-gray-300">
          <h2 className="text-lg font-bold mb-4 text-white text-center">About Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            distinctio, provident, necessitatibus aliquid.
          </p>
        </div>

        {/* Sección "Links" */}
        <div className="flex-1 p-4 text-center">
          <h2 className="text-lg font-bold mb-2 text-white">Contactos</h2>
          <ul className="text-gray-300">
            <li > Correo: </li>
            <li>gmfwhitevan@hotmail.com</li>
            <li>Telefono:</li>
            <li>+55 00000000</li>
          </ul>
        </div>

        {/* Sección "GMF" */}
        <div className="flex-1 pt-4  font-serif">
        <div className="font-bold text-5xl text-amber-400 text-center mt-5">GMF</div>
        <div className="text-xl text-amber-400 text-center">White Van</div>
        </div>
      </div>

      {/* Texto inferior */}
      <div>
        <p className="text-gray-300 border-t p-4 mt-4 text-center">
        Para más información comunicate con nosotros
        </p>
      </div>
    </footer>
  );
};

export default Footer;
