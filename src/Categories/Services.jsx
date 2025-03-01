import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow(); // Llamada inicial
    window.addEventListener("resize", updateSlidesToShow);
    
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: slidesToShow > 1, // Desactiva centerMode si solo hay 1 diapositiva
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl mt-10 font-bold text-amber-500 font-sans'> Rentas de Camionetas</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-4 gap-x-6 mt-8'>
        <div className='flex-1 text-center font-serif text-2xl lg:mx-20 border-b-2 pb-8 border-t-2 pt-5 border-amber-400 sm:text-justify '>
          Descubre nuestros servicios de <strong className='text-amber-500'>renta de vehículos</strong>, ya sea dentro de la <strong className='text-amber-500'>CDMX </strong> 
          o hacia cualquier destino en la <strong className='text-amber-500'>República Mexicana</strong>, garantizando un viaje seguro. Nos gusta atender a 
          celebridades del mundo del espectáculo, miembros de la realeza, empresarios destacados, deportistas de alto rendimiento y cualquier persona que, como usted, busca un 
          servicio de calidad inigualable. Queriendo brindar una <strong className='text-amber-500'>experiencia única</strong> y personalizada.
        </div>
      </div>

      <div className='md:flex-row items-center gap-y-8 md:gap-y-4 gap-x-6 mt-8'>
        <div className='cuadroEx'> 
          <Slider {...settings} className='carouselStyle'> 
            <Link to="/Diapositivas/Diapositiva1">
              <div> 
                <img src="/Images/carrusel/camion.png" alt="Vehículo 1" className='slidesF'/> 
                <p className='text-center text-gray-900 font-semibold border-b-2 border-b-amber-500 mx-32'>Camion 1</p>
              </div>
            </Link>
            <div>
              <img src="/Images/carrusel/crafter.png" alt="Vehículo 2" className='slidesF'/>
              <p className='text-center text-gray-900 font-semibold border-b-2 border-b-amber-500 mx-32'>Camion 2</p>
            </div>
            <div>
              <img src="/Images/carrusel/camion.png" alt="Vehículo 3" className='slidesF'/>
              <p className='text-center text-gray-900 font-semibold border-b-2 border-b-amber-500 mx-32'>Camion 3</p>
            </div>
            <div>
              <img src="/Images/carrusel/crafter.png" alt="Vehículo 4" className='slidesF'/>
              <p className='text-center text-gray-900 font-semibold border-b-2 border-b-amber-500 mx-32'>Camion 4</p>
            </div>
          </Slider>
        </div>
        <div className='flex-1 text-center font-serif mb-7 mt-7'>
          <h2 className='text-2xl font-semibold flex-col pb-2'>Nuestra experiencia</h2>
          <p className='lg:mr-10 sm:mx-4 md:mx-2 text-xl'>
            <strong className='text-amber-500'>GFM</strong> ha sido el aliado de confianza en eventos emblemáticos como 
            <strong className='text-amber-500'> Vive Latino, Corona Capital, Flow Fest, Bahidorá, Belife y Teketóny</strong>, siendo puntuales para cada ocasión.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
