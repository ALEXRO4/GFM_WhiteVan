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
          La <strong className='text-amber-500'>Volkswagen Crafter</strong> para excursiones es una furgoneta <strong className='text-amber-500'>robusta</strong> y 
          <strong className='text-amber-500'> espaciosa</strong>, diseñada para ofrecer <strong className='text-amber-500'>comodidad</strong> y 
          <strong className='text-amber-500'> seguridad</strong> en viajes largos y por terrenos variados. Con un interior amplio, cuenta con 
          <strong className='text-amber-500'> asientos ergonómicos</strong>, buena ventilación y una suspensión que permite manejar diferentes tipos de caminos. 
          Además, está equipada con un sistema de <strong className='text-amber-500'>climatización</strong> para garantizar el confort de los pasajeros, y su 
          <strong className='text-amber-500'> motor eficiente</strong> asegura un rendimiento confiable, tanto en rutas urbanas como en caminos más desafiantes. 
          Es ideal para quienes buscan un vehículo <strong className='text-amber-500'>práctico</strong> y <strong className='text-amber-500'>versátil </strong> 
          para aventuras al aire libre.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Características</h3>
          <div className='abajo'>
            <ul className='text-justify text-lg list-none'>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                12 Pasajeros
              </li>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                Seguro de viajero
              </li>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                Aire acondicionado
              </li>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                Sistema de video
              </li>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                Amplia capacidad de equipaje
              </li>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                Localizador GPS
              </li>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                Operador capacitado
              </li>
            </ul>

          </div>
          <div className='fondo1'>
            <Link to="/Diapositivas/Diapositiva5">
              <div className='botones'>
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                <div className='font-semibold transition border-b-2 border-black hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>Anterior</div>
              </div>
            </Link>
            <Link to="/Contact">

              <div className='font-semibold transition border-b-2 border-black hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>Agenda una cita</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva2">
              <div className='botones'>
                <div className='font-semibold transition border-b-2 border-black hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>Siguiente</div>
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
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
