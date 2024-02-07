import React from 'react'
import about from '../assets/about.svg'
import { styles } from '../styles'

const About = () => {
  return (
    <div className={`${styles.padding} w-full h-screen flex items-center`}>
        <div className='w-full h-full flex justify-between items-center max-w-8xl mx-auto'>
            <div className="flex justify-center items-center w-1/2">
                <img src={about} alt="" className='h-[60%] w-[60%] object-cover ' />
            </div>
            <div className='flex p-6 justify-center items-start w-1/2 flex-col'>
                <h2 className='text-[#23346F] font-montserrat font-bold text-4xl mb-12'>Nex2Link is a dynamic team of innovators and developers dedicated to turning your digital dreams into reality.</h2>
                <h3 className='text-black font-montserrat font-bold text-3xl py-6'>Mission</h3>
                <p className='text-black font-montserrat font-light text-[28px]'>Empowering businesses through cutting-edge technology, creativity, and strategic thinking.</p>
                <h3 className='text-black font-montserrat font-bold text-3xl py-6'>Why Nex2Link</h3>
                <p className='text-black font-montserrat font-light text-[28px]'>Explore the reasons behind our success, including a client-centric approach, passion for innovation, and commitment to excellence.</p>
            </div>
        </div>
    </div>
  )
}

export default About