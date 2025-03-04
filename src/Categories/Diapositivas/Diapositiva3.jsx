import React from 'react';
import { Link } from 'react-router-dom'; 
import './estilo3.css';


const Diapositiva3 = () => {
  return (
    <div>
      <div className='cajaE'>
        <div className='cajaIz'>
          <div className='fotoU'>
            <img src="/Images/especs/suburbanLat.jpg"  alt="foto1" className='rounded-lg' />
          </div>
          <div className='Imgs'>
          <div className='fotoD mx-10 '>
            <img src="/Images/especs/suburbanDentro.png" alt="foto2"  className='rounded-lg'/>
          </div>
          <div className='fotoT mx-10'>
            <img src="/Images/especs/suburbanFrente.jpeg" alt="foto3" className='rounded-lg' />
          </div>
          </div>
        </div>
        <div className='cajaDer'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Camioneta Suburban</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
         <div className='arriba text-justify text-lg'>La Chevrolet Suburban es un SUV de gran tamaño, robusto y elegante, ideal para excursiones y viajes largos. 
          Su diseño ofrece un interior amplio y confortable, con asientos de alta calidad y una excelente capacidad de carga. Equipado con tecnología avanzada, 
          incluye un sistema de climatización para asegurar la comodidad de todos los ocupantes. Su potente motor y tracción en las cuatro ruedas permiten un rendimiento 
          sólido tanto en caminos urbanos como en terrenos más desafiantes. Es perfecta para quienes buscan un vehículo confiable, espacioso y con gran capacidad para aventuras 
          al aire libre.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Especificaciones</h3>
         <div className='abajo'><ul className='text-justify text-lg'>
              <li>9 Pasajeros</li>
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
            </ul>
          </div>
          <div className='fondo'>
            <Link to="/Diapositivas/Diapositiva2">
              <div>Anterior</div>
            </Link>
            <Link to="/Contact">
              <div>Contactanos</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva4">
              <div>Siguiente</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diapositiva3
