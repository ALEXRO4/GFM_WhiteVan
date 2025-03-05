import React from 'react';
import { Link } from 'react-router-dom';
import './estilo4.css';
const Diapositiva4 = () => {
  return (
    <div>
      <div className='cajaE4'>
              <div className='cajaIz4'>
                <div className='fotoU4'>
                  <img src="/Images/especs/hiace15.jpeg" alt="foto1" className='rounded-lg' />
                </div>
                <div className='Imgs4'>
                  <div className='fotoD4 mx-10 '>
                    <img src="/Images/especs/hiace14.jpeg" alt="foto2" className='rounded-lg' />
                  </div>
                 
                </div>
              </div>
              <div className='cajaDer4'>
                <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Camioneta Toyota Hiace</h2>
                <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
                <div className='arriba text-justify text-lg'>La <strong className='text-amber-500'>Toyota</strong> para excursiones es una furgoneta 
                <strong className='text-amber-500'> robusta</strong> y <strong className='text-amber-500'>versátil</strong>, diseñada para ofrecer un viaje 
                <strong className='text-amber-500'> cómodo</strong> y <strong className='text-amber-500'>seguro</strong> en diversos tipos de terreno. Es ideal para quienes necesitan <strong className='text-amber-500'>transportar a varias personas</strong> de manera <strong className='text-amber-500'>segura</strong> y <strong className='text-amber-500'>cómoda</strong>, tanto en <strong className='text-amber-500'>rutas urbanas</strong> como en <strong className='text-amber-500'>viajes largos</strong>, <strong className='text-amber-500'>uso como transporte de empleados</strong> o <strong className='text-amber-500'>familiar</strong>.
                </div>
                <h3 className='font-semibold text-2xl mt-10'>Características</h3>
                <div className='abajo4'><ul className='text-justify text-lg list-none'>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                15 Pasajeros
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
                <div className='fondo4'>
                  <Link to="/Diapositivas/Diapositiva3">
                    <div className='botones4 text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>
                      <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                      </svg>
                      <div className='font-semibold transition '>Anterior</div>
                    </div>
                  </Link>
                  <Link to="/Contact">
      
                    <div className='font-semibold transition text-2xl text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>Agenda una cita</div>
                  </Link>
                  <Link to="/Diapositivas/Diapositiva5">
                    <div className='botones4 text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>
                     <div className='font-semibold transition '>Siguiente</div>
                      <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Diapositiva4
