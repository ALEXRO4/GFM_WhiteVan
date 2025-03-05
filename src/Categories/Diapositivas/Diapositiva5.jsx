import React from 'react';
import { Link } from 'react-router-dom';
import './estilo5.css';
const Diapositiva5 = () => {
  return (
    <div>
      <div className='cajaE5'>
        <div className='cajaIz5'>
          <div className='fotoU5'>
            <img src="/Images/especs/cocheLat.jpeg" alt="foto1" className='rounded-lg' />
          </div>
          <div className='Imgs5'>
                  <div className='fotoD5 mx-10 '>
                    <img src="/Images/especs/coche2.jpeg" alt="foto2" className='rounded-lg' />
                  </div>
                  <div className='fotoT5 mx-10'>
                    <img src="/Images/especs/coche3.jpeg" alt="foto3" className='rounded-lg' />
                  </div>
                </div>
        </div>
        <div className='cajaDer5'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Coches</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
          <div className='arriba text-justify text-lg'>Se ofrecen diversos coches ideales para excursiones y viajes largos, que combinan 
            <strong className='text-amber-500'> comodidad</strong>, <strong className='text-amber-500'>eficiencia</strong> y 
            <strong className='text-amber-500'> versatilidad</strong>. Estos vehículos cuentan con interiores <strong className='text-amber-500'>espaciosos
              </strong>, <strong className='text-amber-500'>asientos ergonómicos</strong> y sistemas de <strong className='text-amber-500'>climatización </strong> 
              que aseguran un viaje agradable. Además, están equipados con <strong className='text-amber-500'>motores eficientes</strong> que ofrecen un rendimiento 
              sólido tanto en rutas urbanas como en terrenos más desafiantes. Son opciones perfectas para quienes buscan vehículos <strong className='text-amber-500'>
                confiables</strong>, <strong className='text-amber-500'>económicos</strong> y <strong className='text-amber-500'>cómodos</strong> para cualquier tipo de servicio.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Características</h3>
          <div className='abajo5'> <ul className='text-justify text-lg list-none'>
            <li className="flex items-center">
              <img src="/Images/viñeta1.svg" alt="icon" className="w-5 h-5 mr-2" />
              4 Pasajeros
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
          <div className='fondo5'>
            <Link to="/Diapositivas/Diapositiva4">
              <div className='botones5 transition text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                <div className='font-semibold'>Anterior</div>
              </div>
            </Link>
            <Link to="/Contact">

              <div className='font-semibold transition  text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>Contactanos</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva1">
              <div className='botones5 transition text-amber-500 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'>
                <div className='font-semibold'>Siguiente</div>
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

export default Diapositiva5
