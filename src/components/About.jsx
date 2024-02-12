import React from 'react'
import about from '../assets/about.svg'
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const About = () => {
  return (
    <div className={` w-full h-screen flex items-center`}>
        <div className='w-full h-full flex flex-col-reverse justify-center md:flex-row md:justify-between items-center max-w-[360px] md:max-w-[640px] lg:max-w-[1280px] mx-auto'>
            <motion.div 
              variants={slideIn("left", "tween", 0.2, 1)}
              className="flex justify-center items-center w-full md:w-1/2"
            >
                <img src={about} alt="" className='h-[60%] w-[90%] md:h-[60%] md:w-[60%] object-contain ' />
            </motion.div>
            <motion.div 
              variants={slideIn("right", "tween", 0.2, 1)}
              className='flex md:p-6 justify-center items-center md:items-start md:w-1/2 flex-col'
            >
                <h2 className='text-[#23346F] font-montserrat text-center md:text-justify font-bold text-[9px] sm:text-[18px] lg:text-[24px] 2xl:text-[30px] md:mb-12'>Nex2Link is a dynamic team of innovators and developers dedicated to turning your digital dreams into reality.</h2>
                <h3 className='text-black font-montserrat text-center md:text-justify font-bold text-[7px] sm:text-[12px] lg:text-[18px] 2xl:text-2xl py-6'>Mission</h3>
                <p className='text-black font-montserrat text-center md:text-justify font-light text-[6px] sm:text-[10px] lg:text-[16px] 2xl:text-[22px]'>Empowering businesses through cutting-edge technology, creativity, and strategic thinking.</p>
                <h3 className='text-black font-montserrat text-center md:text-justify font-bold text-[7px] sm:text-[12px] lg:text-[18px] 2xl:text-2xl py-6'>Why Nex2Link</h3>
                <p className='text-black font-montserrat text-center md:text-justify font-light text-[6px] sm:text-[10px] lg:text-[16px] 2xl:text-[22px]'>Explore the reasons behind our success, including a client-centric approach, passion for innovation, and commitment to excellence.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')