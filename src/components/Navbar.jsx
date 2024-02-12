import React, {useState} from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Navbar = () => {
    
  
//   const handleScroll = () => {

//     resultRef.current?.scrollIntoView({ behavior: "smooth" });
//   }
  return (
    <nav className={`w-full h-[84px] lg:h-[128px] flex justify-center items-center fixed top-0 z-20 backdrop-blur shadow-sm rounded-b-2xl bg-blue-300 bg-opacity-20`}>
        <div className="w-full p-2 md:p-0 max-w-[360px] md:max-w-[640px] lg:max-w-[1280px] flex justify-between items-center">
            <Link 
                to="/" 
                className='flex items-center gap-2' 
                onClick={()=>{ window.scrollTo({top: 0,behavior: 'smooth'});}}
            >
                <img src={logo} alt="logo" className=' w-[128px] sm:w-[160px] lg:w-64 object-contain' />
            </Link>
            {/* <ul className='list-none flex justify-between items-center gap-4'>
                <li className='text-black font-montserrat font-medium text-[16px] cursor-pointer mx-4'>
                    <a href="/">Home</a>
                </li>
                <li className='text-black font-montserrat font-medium text-[16px] cursor-pointer  mx-4'>
                    <a href='/aboutus' >About Us</a>
                </li>
                <li className='text-black font-montserrat font-medium text-[16px] cursor-pointer  mx-4'>
                    <a href="/">Services</a>
                </li>
                    
            </ul> */}
            <div className="flex justify-end items-center gap-2">
                
                <button className='py-1 px-3 font-montserrat rounded-full bg-gray-700 text-white text-[7px] md:[12px] lg:text-[20px] shadow-lg' onClick={()=> window.scrollTo({top: 9000,behavior: 'smooth'})}>
                    Contact Us
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar