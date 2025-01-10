import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import GMF from './Categories/GMF';
import Services from './Categories/Services';
import Contact from './Categories/Contact';

const App = () => {
  return (
    <div className="App bg-gray-300 scroll-smooth">
      <NavBar />
      
      {/* Sección Nosotros */}
      <div id="GMF" className="min-h-screen py-8">
                <GMF />
      </div>
      
      {/* Sección Servicios */}
      <div id="Services" className="min-h-screen py-16 bg-gray-200">
        <h1 className="text-center text-4xl text-yellow-500 font-serif font-bold ">Servicios</h1>
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
