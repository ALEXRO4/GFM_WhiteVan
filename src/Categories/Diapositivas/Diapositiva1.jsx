import React from 'react';
import { Link } from 'react-router-dom'; 
import './estilo1.css';

const Diapositiva1 = () => {
  return (
    <div>
      <div className='cajaE'>
        <div className='cajaIz'>
          <div className='fotoU'>
            <img src="/Images/especs/Lateral.jpeg" alt="foto1" className='rounded-lg' />
          </div>
          <div className='Imgs'>
            <div className='fotoD mx-10'>
              <img src="/Images/especs/dentro.jpeg" alt="foto2" className='rounded-lg' />
            </div>
            <div className='fotoT mx-10'>
              <img src="/Images/especs/frente.jpeg" alt="foto3" className='rounded-lg' />
            </div>
          </div>
        </div>
        <div className='cajaDer'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Camioneta Crafter</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
          <div className='arriba text-justify text-lg'>
          La Volkswagen Crafter para excursiones es una furgoneta robusta y espaciosa, diseñada para ofrecer comodidad y seguridad en viajes largos y por terrenos variados. 
          Con un interior amplio, cuenta con asientos ergonómicos, buena ventilación y una suspensión que permite manejar diferentes tipos de caminos. 
          Además, está equipada con un sistema de climatización para garantizar el confort de los pasajeros, y su motor eficiente asegura un rendimiento confiable, 
          tanto en rutas urbanas como en caminos más desafiantes. Es ideal para quienes buscan un vehículo práctico y versátil para aventuras al aire libre.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Especificaciones</h3>
          <div className='abajo'>
            <ul className='text-justify text-lg'>
              <li>12 Pasajeros</li>
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
            </ul>
          </div>
          <div className='fondo'>
            <Link to="/Diapositivas/Diapositiva4">
            <div className='botones'>
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
</svg>
Anterior
</div> 
            </Link>
            <Link to="/Contact">
            
              <div>Contactanos</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva2">
            <div className='botones'>
              Siguiente
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diapositiva1;
