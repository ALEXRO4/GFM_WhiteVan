import React from 'react'
import './services.css'
const Services = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-4 gap-x-6 mt-8'>
        <div className='flex-1 text-center'>
          <h1 className='text-2xl font-semibold '>Que ofrecemos?</h1>
          <ul className='text-center'>
          <li>Camionetas de Turismo</li>
          <li>Camionetas</li>
          <li>Autos</li>
          <li>Vann</li>
            
            
          </ul>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="./Images/crafter4.jpeg"
            alt="Misión"
            className="w-3/4 rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className='flex-1 text-center'>
          <h1 className='text-2xl font-semibold flex-col'>Nuestra experiencia</h1>
          <div className='grid grid-cols-2'>
          <ul className='grid grid-col'>
            <li>Vive Latino     </li>
            <li>Formula 1       </li>
            <li>Corona Capital  </li>
            <li>Flow Fest       </li>
          </ul>
          <ul className='grid grid-col'>
          <li>Vive Latino     </li>
            <li>Formula 1       </li>
            <li>Corona Capital  </li>
            <li>Flow Fest       </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
