import React from 'react'
import './estilo1.css';

const Diapositiva1 = () => {
  return (
    <div>
      <div className='cajaE'>
        <div className='cajaIz'>
          <div className='fotoU'>
            <img src="/Images/especs/Lateral.jpeg"  alt="foto1" />
          </div>
          <div className='Imgs'>
          <div className='fotoD'>
            <img src="/Images/especs/dentro.jpeg" alt="foto2" />
          </div>
          <div className='fotoT'>
            <img src="/Images/especs/frente.jpeg" alt="foto3" />
          </div>
          </div>
        </div>
        <div className='cajaDer'>
         <div className='arriba'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, quae aliquid. Adipisci cumque asperiores sint neque corporis voluptatibus quaerat rerum aspernatur? Eveniet, ratione. Molestiae nemo blanditiis dolor tenetur, voluptas asperiores.</div>
         <div className='abajo'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quaerat doloremque expedita quidem, quae doloribus minima, ullam vero totam dignissimos repudiandae dolorem? Exercitationem cumque sapiente enim quam eaque quas id?</div>
        </div>
      </div>
    </div>
  )
}

export default Diapositiva1
