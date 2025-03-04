import React from 'react';
import { Link } from 'react-router-dom';
import './estilo3.css';


const Diapositiva3 = () => {
  return (
    <div>
      <div className='cajaE'>
        <div className='cajaIz'>
          <div className='fotoU'>
            <img src="/Images/especs/suburbanLat.jpg" alt="foto1" className='rounded-lg' />
          </div>
          <div className='Imgs'>
            <div className='fotoD mx-10 '>
              <img src="/Images/especs/suburbanDentro.png" alt="foto2" className='rounded-lg' />
            </div>
            <div className='fotoT mx-10'>
              <img src="/Images/especs/suburbanFrente.jpeg" alt="foto3" className='rounded-lg' />
            </div>
          </div>
        </div>
        <div className='cajaDer'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Camioneta Suburban</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
          <div className='arriba text-justify text-lg'>La <strong className='text-amber-500'>Chevrolet Suburban</strong> es un SUV de gran tamaño, 
          <strong className='text-amber-500'> robusto</strong> y <strong className='text-amber-500'>elegante</strong>, ideal para excursiones y viajes largos. 
          Su diseño ofrece un interior <strong className='text-amber-500'>amplio</strong> y <strong className='text-amber-500'>confortable</strong>, con asientos de alta 
          calidad y una excelente capacidad de carga. Equipado con <strong className='text-amber-500'>tecnología avanzada</strong>, incluye un sistema de 
          <strong className='text-amber-500'> climatización</strong> para asegurar la comodidad de todos los ocupantes. Su 
          <strong className='text-amber-500'> potente motor</strong> y <strong className='text-amber-500'>tracción en las cuatro ruedas </strong> 
          permiten un rendimiento sólido tanto en caminos urbanos como en terrenos más desafiantes. Es perfecta para quienes buscan un vehículo 
          <strong className='text-amber-500'> confiable</strong>, <strong className='text-amber-500'>espacioso</strong> y con gran capacidad para aventuras al aire libre.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Características</h3>
          <div className='abajo'><ul className='text-justify text-lg list-none'>
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
          <div className='fondo3'>
            <Link to="/Diapositivas/Diapositiva2">
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
            <Link to="/Diapositivas/Diapositiva4">
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

export default Diapositiva3
