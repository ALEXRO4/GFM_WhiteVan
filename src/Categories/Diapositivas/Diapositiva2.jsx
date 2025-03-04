import React from 'react';
import { Link } from 'react-router-dom'; 
import './estilo2.css';



const Diapositiva2 = () => {
  return (
    <div>
      <div className='cajaE'>
        <div className='cajaIz'>
          <div className='fotoU'>
            <img src="/Images/especs/hiaceLat.jpeg"  alt="foto1" className='rounded-lg' />
          </div>
          <div className='Imgs'>
          <div className='fotoD mx-10 '>
            <img src="/Images/especs/haice.jpg" alt="foto2"  className='rounded-lg'/>
          </div>
          <div className='fotoT mx-10'>
            <img src="/Images/especs/hiaceFrent.jpeg" alt="foto3" className='rounded-lg' />
          </div>
          </div>
        </div>
        <div className='cajaDer'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Camioneta Hiace</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
         <div className='arriba text-justify text-lg'>La Toyota Hiace para excursiones es una furgoneta robusta y versátil, diseñada para ofrecer un viaje cómodo y seguro en diversos 
          tipos de terreno. Con un interior espacioso, cuenta con asientos cómodos y un sistema de ventilación eficiente, lo que asegura confort durante largos trayectos. 
          Su suspensión está diseñada para adaptarse a caminos irregulares, mientras que el motor potente y eficiente ofrece un buen rendimiento tanto en rutas urbanas 
          como en terrenos más difíciles. Es la opción ideal para quienes buscan un vehículo confiable y cómodo para viajes y aventuras.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Especificaciones</h3>
         <div className='abajo'> <ul className='text-justify text-lg'>
              <li>12 Pasajeros</li>
              <li>aaa</li>
              <li>aaa</li>
              <li>aaa</li>
            </ul>
          </div>
          <div className=''>
            <Link to="/Diapositivas/Diapositiva1">
              <div>Anterior</div>
            </Link>
            <Link to="/Contact">
              <div>Contactanos</div>
            </Link>
            <Link to="/Diapositivas/Diapositiva3">
              <div>Siguiente</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diapositiva2
