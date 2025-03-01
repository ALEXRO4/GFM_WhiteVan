import React from 'react'
import './estilo1.css';

const Diapositiva1 = () => {
  return (
    <div>
      <div className='cajaE'>
        <div className='cajaIz'>
          <div className='fotoU'>
            <img src="/Images/especs/Lateral.jpeg"  alt="foto1" className='rounded-lg' />
          </div>
          <div className='Imgs'>
          <div className='fotoD mx-10 '>
            <img src="/Images/especs/dentro.jpeg" alt="foto2"  className='rounded-lg'/>
          </div>
          <div className='fotoT mx-10'>
            <img src="/Images/especs/frente.jpeg" alt="foto3" className='rounded-lg' />
          </div>
          </div>
        </div>
        <div className='cajaDer'>
          <h2 className='font-bold text-4xl border-b-2 py-2 mx-6 text-center'>Camioneta 1</h2>
          <h3 className='font-semibold text-2xl mt-10'>Descripción</h3>
         <div className='arriba'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, quae aliquid. Adipisci cumque asperiores sint neque corporis 
          voluptatibus quaerat rerum aspernatur? Eveniet, ratione. Molestiae nemo blanditiis dolor tenetur, voluptas asperiores.
          </div>
          <h3 className='font-semibold text-2xl mt-10'>Especificaciones</h3>
         <div className='abajo'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quaerat doloremque expedita quidem, quae doloribus minima, 
          ullam vero totam dignissimos repudiandae dolorem? Exercitationem cumque sapiente enim quam eaque quas id?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diapositiva1
