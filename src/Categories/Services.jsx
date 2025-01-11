import React from 'react'
import './services.css'

const Services = () => {
  return (
    <div className='border-t-2 mx-20 mt-8 pb-2 border-amber-400'>

      <div className='flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-4 gap-x-6 mt-8'>
        <div className='flex-1 text-center font-serif text-2xl lg:mx-20 border-b-2 pb-8 border-amber-400 sm:text-justify '>
          Descubre nuestros servicios de <strong className='text-amber-500'>renta de vehiculos</strong>, ya sea dentro de la <strong className='text-amber-500'>CDMX</strong> 
          o hacia cualquier destino en la <strong className='text-amber-500'>República Mexicana</strong>, garantizando un viaje seguro. Nos gusta atender a 
          celebridades del mundo del espectáculo, miembros de la realeza, empresarios destacados, deportistas de alto rendimiento y cualquier persona que, como usted, busca un 
          servicio de calidad inigualable. Queriendo brindar una <strong className='text-amber-500'>experiencia única</strong> y personalizada.
        </div>
      </div>






      <div className='flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-4 gap-x-6 mt-8'>
        <div className='flex-1  font-serif text-center'>
          <h1 className='text-2xl font-semibold '>¿Que ofrecemos?</h1>
          <ol>
            <li className=''>Camionetas de turismo</li>
            <li>Camionetas</li>
            <li>Autos</li>
            <li>Vann</li>
          </ol>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="./Images/crafter4.jpeg"
            alt="Misión"
            className="w-3/4 rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className='flex-1 text-center font-serif'>
          <h1 className='text-2xl font-semibold flex-col pb-2'>Nuestra experiencia</h1>
          <p className='lg:mr-10 sm:mx-4 md:mx-2 text-xl'>
          <strong className='text-amber-500'>GFM </strong> ha sido el aliado de confianza en eventos emblemáticos como 
          <strong className='text-amber-500'> Vive Latino, Corona Capital, Flow Fest, Bahidorá, Belife y Teketóny</strong> siendo puntuales para cada ocasión
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
