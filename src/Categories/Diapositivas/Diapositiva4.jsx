import React from 'react';
import { Link } from 'react-router-dom'; 
import './estilo4.css';
const Diapositiva4 = () => {
  return (
    <div>
      <div className='cajaE'>
        <div className='cajaIz'>
          <div className='fotoU'>
            <img src="/Images/especs/cocheLat.jpeg"  alt="foto1" className='rounded-lg' />
          </div>
          <div className='fotoU mt-5'>
            <img src="/Images/especs/vento.jpeg"  alt="foto1" className='rounded-lg' />
          </div>
        </div>
        <div className='cajaDer'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Coches</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
         <div className='arriba text-justify text-lg'>Se ofrecen diversos coches ideales para excursiones y viajes largos, que combinan comodidad, eficiencia y versatilidad. Estos vehículos cuentan con interiores espaciosos, asientos ergonómicos y sistemas de climatización que aseguran un viaje agradable. Además, están equipados con motores potentes que ofrecen un rendimiento sólido tanto en rutas urbanas como en terrenos más desafiantes. Son opciones perfectas para quienes buscan vehículos confiables, económicos y cómodos para cualquier tipo de aventura.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Especificaciones</h3>
         <div className='abajo'> <ul className='text-justify text-lg'>
              <li>5 Pasajeros</li>
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
            </ul>
          </div>
          <div className=''>
            <Link to="/Diapositivas/Diapositiva3">
              <div></div>
            </Link>
            <Link to="/Contact">
              <div>Contactanos</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva1">
              <div>Siguiente</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diapositiva4
