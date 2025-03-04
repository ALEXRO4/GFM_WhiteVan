import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import GFM from './Categories/GFM';
import Services from './Categories/Services';
import Contact from './Categories/Contact';
import Diapositiva1 from './Categories/Diapositivas/Diapositiva1';
import Diapositiva2 from './Categories/Diapositivas/Diapositiva2';
import Diapositiva3 from './Categories/Diapositivas/Diapositiva3';
import Diapositiva4 from './Categories/Diapositivas/Diapositiva4';

const App = () => {
  return (
    <Router>
      <div className="App bg-white">
        <NavBar />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/gfm" element={<GFM />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Diapositivas/Diapositiva1" element={<Diapositiva1 />} />
          <Route path="/Diapositivas/Diapositiva2" element={<Diapositiva2 />} />
          <Route path="/Diapositivas/Diapositiva3" element={<Diapositiva3 />} />
          <Route path="/Diapositivas/Diapositiva4" element={<Diapositiva4 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;