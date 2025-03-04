import React from 'react';
import { Link } from 'react-router-dom';
import './estilo5.css';
const Diapositiva4 = () => {
  return (
    <div>
      <div className='cajaE'>
        <div className='cajaIz'>
          <div className='fotoU'>
            <img src="/Images/especs/cocheLat.jpeg" alt="foto1" className='rounded-lg' />
          </div>
          <div className='fotoU mt-5'>
            <img src="/Images/especs/vento.jpeg" alt="foto1" className='rounded-lg' />
          </div>
        </div>
        <div className='cajaDer'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Coches</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
          <div className='arriba text-justify text-lg'>Se ofrecen diversos coches ideales para excursiones y viajes largos, que combinan 
            <strong className='text-amber-500'> comodidad</strong>, <strong className='text-amber-500'>eficiencia</strong> y 
            <strong className='text-amber-500'> versatilidad</strong>. Estos vehículos cuentan con interiores <strong className='text-amber-500'>espaciosos
              </strong>, <strong className='text-amber-500'>asientos ergonómicos</strong> y sistemas de <strong className='text-amber-500'>climatización </strong> 
              que aseguran un viaje agradable. Además, están equipados con <strong className='text-amber-500'>motores potentes</strong> que ofrecen un rendimiento 
              sólido tanto en rutas urbanas como en terrenos más desafiantes. Son opciones perfectas para quienes buscan vehículos <strong className='text-amber-500'>
                confiables</strong>, <strong className='text-amber-500'>económicos</strong> y <strong className='text-amber-500'>cómodos</strong> para cualquier tipo de aventura.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Características</h3>
          <div className='abajo'> <ul className='text-justify text-lg list-none'>
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
            <Link to="/Diapositivas/Diapositiva4">
              <div className='botones'>
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                Anterior
              </div>
            </Link>
            <Link to="/Contact">

              <div>Contactanos</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva1">
              <div className='botones'>
                Siguiente
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
