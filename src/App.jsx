import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import GFM from './Categories/GFM';
import Services from './Categories/Services';
import Contact from './Categories/Contact';

const App = () => {
  return (
    <div className="App bg-gray-300 scroll-smooth">
      <NavBar />
      
      {/* Sección Nosotros */}
      <div id="GFM" className="min-h-screen py-8  ">
      <h1 className="text-center text-4xl text-yellow-400 font-serif font-bold border-b-2 mx-20 mt-8 pb-2 border-amber-400">Nosotros</h1>
                <GFM />
      </div>
      
      {/* Sección Servicios */}
      <div id="Services" className="min-h-screen py-16 bg-gray-200">
        <h1 className="text-center text-4xl text-yellow-400 font-serif font-bold ">Servicios</h1>
        <Services />
      </div>
      
      {/* Sección Contacto */}
      <div id="Contact" className="min-h-screen py-16 bg-gray-300">
        <h1 className="text-center text-4xl text-gray-800 font-serif font-bold mb-8">Contacto</h1>
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
