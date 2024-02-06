import React, {useState} from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Navbar = () => {
    const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed top-0 z-2`}>
        <div className="w-full flex justify-between items-center max-w-8xl py-12 mx-auto">
            <Link 
                to="/" 
                className='flex items-center gap-2' 
                onClick={()=>{setActive(""); window.scrollTo(0,0);}}
            >
                <img src={logo} alt="logo" className='w-64 object-contain' />
            </Link>
            <ul className='list-none flex justify-between items-center gap-4'>
                <li className='text-black font-montserrat font-medium text-[16px] cursor-pointer mx-4'>
                    <a href="/">Home</a>
                </li>
                <li className='text-black font-montserrat font-medium text-[16px] cursor-pointer  mx-4'>
                    <a href="/">About Us</a>
                </li>
                <li className='text-black font-montserrat font-medium text-[16px] cursor-pointer  mx-4'>
                    <a href="/">Services</a>
                </li>
                    
            </ul>
            <div className="flex justify-end items-center gap-2">
                <button className='p-4 rounded-full bg-gray-700 text-white shadow-lg'>
                    Contact Us
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar