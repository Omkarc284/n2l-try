import React, {useState} from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Navbar = () => {
    
  
//   const handleScroll = () => {

//     resultRef.current?.scrollIntoView({ behavior: "smooth" });
//   }
  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 backdrop-blur shadow-sm rounded-b-2xl bg-blue-300 bg-opacity-20`}>
        <div className="w-full flex justify-between items-center max-w-8xl sm:py-4 lg:py-8 mx-auto">
            <Link 
                to="/" 
                className='flex items-center gap-2' 
                onClick={()=>{ window.scrollTo({top: 0,behavior: 'smooth'});}}
            >
                <img src={logo} alt="logo" className='w-64 object-contain' />
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
                
                <button className='p-4 font-montserrat rounded-full bg-gray-700 text-white shadow-lg' onClick={()=> window.scrollTo({top: 9000,behavior: 'smooth'})}>
                    Contact Us
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar