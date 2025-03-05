import React from 'react';
import { Link } from 'react-router-dom';
import './estilo3.css';


const Diapositiva3 = () => {
  return (
    <div>
      <div className='cajaE3'>
        <div className='cajaIz3'>
          <div className='fotoU3'>
            <img src="/Images/especs/suburban2.jpeg" alt="foto1" className='rounded-lg' />
          </div>
          <div className='Imgs3'>
            <div className='fotoD3 mx-10 '>
              <img src="/Images/especs/suburban3.jpeg" alt="foto2" className='rounded-lg' />
            </div>
            
          </div>
        </div>
        <div className='cajaDer3'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Camioneta Suburban</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
          <div className='arriba3 text-justify text-lg'>
          Suburban es una <strong className='text-amber-500'>SUV grande</strong> ideal para <strong className='text-amber-500'>familias numerosas </strong> 
          o para quienes un <strong className='text-amber-500'>vehículo de lujo</strong>, <strong className='text-amber-500'>espacio </strong> y 
          <strong className='text-amber-500'> capacidad de remolque</strong>. Su combinación de <strong className='text-amber-500'>potente motor</strong>, 
          <strong className='text-amber-500'> amplio interior</strong>, <strong className='text-amber-500'>opciones de lujo</strong> la convierten en una excelente opción para 
          <strong className='text-amber-500'> viajes largos</strong> como <strong className='text-amber-500'>transportes comerciales</strong> y 
          <strong className='text-amber-500'> uso familiar</strong>.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Características</h3>
          <div className='abajo3'><ul className='text-justify text-lg list-none'>
              <li className="flex items-center">
                <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
                9 Pasajeros
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
          <div className='fondo3'>
            <Link to="/Diapositivas/Diapositiva2">
              <div className='botones3 transition  text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                <div className='font-semibold '>Anterior</div>
              </div>
            </Link>
            <Link to="/Contact">

              <div className='font-semibold transition text-2xl text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>Agenda una cita</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva4">
              <div className='botones3 transition  text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>
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
  )
}

export default Diapositiva3
