import React from 'react';
import { Link } from 'react-router-dom';
import './estilo1.css';




const Diapositiva1 = () => {
  return (
    <div>
      <div className='cajaE1'>
        <div className='cajaIz1'>
          <div className='fotoU1'>
            <img src="/Images/especs/crafter2.jpeg" alt="foto1" className='rounded-lg' />
          </div>
          <div className='Imgs1'>
            <div className='fotoD1 mx-10'>
              <img src="/Images/especs/dentro.jpeg" alt="foto2" className='rounded-lg' />
            </div>
            <div className='fotoT1 mx-10'>
              <img src="/Images/especs/splinter.jpeg" alt="foto3" className='rounded-lg  ' />
            </div>
          </div>
        </div>
        <div className='cajaDer1'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Camionetas Splinter / Crafter</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
          <div className='arriba1 text-justify text-lg'>
          La <strong className='text-amber-500'>Splinter / Crafter</strong> para excursiones es una furgoneta <strong className='text-amber-500'>robusta</strong> y 
          <strong className='text-amber-500'> espaciosa</strong>, diseñada para ofrecer <strong className='text-amber-500'>comodidad</strong> y 
          <strong className='text-amber-500'> seguridad</strong> en viajes largos y por terrenos variados. Con un interior amplio, cuenta con 
          <strong className='text-amber-500'> asientos ergonómicos</strong>, buena ventilación y una suspensión que permite manejar diferentes tipos de caminos. 
          Además, está equipada con un sistema de <strong className='text-amber-500'>climatización</strong> para garantizar el confort de los pasajeros, y su 
          <strong className='text-amber-500'> motor eficiente</strong> asegura un rendimiento confiable, tanto en rutas urbanas como en caminos más desafiantes. 
          Es ideal para quienes buscan un vehículo <strong className='text-amber-500'>práctico</strong> y <strong className='text-amber-500'>versátil </strong> 
          para aventuras al aire libre.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Características</h3>
          <div className='abajo1'>
            <ul className='text-justify text-lg list-none'>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                20 Pasajeros
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
              <div className='botones1 transition  text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                <div className='font-semibold '>Anterior</div>
              </div>
            </Link>
            <Link to="/Contact">

              <div className='font-semibold transition text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>Contactanos</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva2">
              <div className='botones1 transition  text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>
                <div className='font-semibold '>Siguiente</div>
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
