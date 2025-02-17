import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import './nav.css';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-800 transition mt-10'>
      <ul className='text-center text-xl p-20'>
        <Link to="/gfm" onClick={() => setClick(false)}>
          <li className='py-4 border-b border-amber-500 hover:bg-yellow-600 hover:rounded'> GFM </li>
        </Link>
        <Link to="/services" onClick={() => setClick(false)}>
          <li className='my-4 py-4 border-b border-amber-500 hover:bg-yellow-600 hover:rounded'> SERVICIOS </li>
        </Link>
        <Link to="/contact" onClick={() => setClick(false)}>
          <li className='my-4 py-4 border-b border-amber-500 hover:bg-yellow-600 hover:rounded'> CONTACTO </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 flex-1 bg-black'>
        <div className='flex items-center flex-1'>
          <span><img src="./Images/logo.png" alt="logo" className='h-20 mx-auto' /></span>
        </div>
        
        <div className="flex flex-col items-center mt-3 font-serif lg:block hidden">
          <div className="font-bold text-5xl text-amber-400 text-center">GFM</div>
          <div className="text-xl text-amber-400 text-center">White Van</div>
        </div>
        
        <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
          <ul className='flex gap-8 m-6 text-[18px]'>
            <Link to="/gfm">
              <li className='text-2xl transition border-b-2 border-slate-700 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'> NOSOTROS </li>
            </Link>
            <Link to="/services">
              <li className='text-2xl transition border-b-2 border-slate-700 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'> SERVICIOS </li>
            </Link>
            <Link to="/contact">
              <li className='text-2xl transition border-b-2 border-slate-700 hover:border-amber-500 hover:text-yellow-600 cursor-pointer'> CONTACTO </li>
            </Link>
          </ul>
        </div>
        
        <div>
          {click && content}
        </div>
        
        <button className="block sm:hidden transition right-5" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
