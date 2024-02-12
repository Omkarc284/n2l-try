import React from 'react'
import about2 from '../assets/about2.svg'
import tick from '../assets/tick.svg'
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const About2 = () => {
  return (
    <div className='w-full h-screen flex items-center'>
        <div className='w-full h-full flex flex-col justify-center md:flex-row md:justify-between items-center max-w-[360px] md:max-w-[640px] lg:max-w-[1280px]  mx-auto'>
            
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)} 
                className='flex md:p-6 justify-center items-center md:items-start w-1/2 flex-col'
            >
                <h2 className='text-[#23346F] font-montserrat text-center md:text-justify font-bold text-[9px] sm:text-[18px] lg:text-[24px] 2xl:text-[30px] md:mb-12'>Why Choose Nex2Link?</h2>
                <p className='text-black font-montserrat text-center md:text-justify font-light text-[7px] sm:text-[12px] lg:text-[18px] 2xl:text-2xl py-6'>At Nex2Link, we understand that choosing a digital solutions partner is a critical decision for the success of your business.</p>
                <div className="flex justify-start items-start">
                    <img className='w-[6px] sm:w-[10px] lg:w-[16px] 2xl:w-[22px]' src={tick} alt="" />
                    <p className='text-black font-montserrat text-left md:text-justify font-light text-[6px] sm:text-[10px] lg:text-[16px] 2xl:text-[22px]'>Collaborative Innovation</p>
                </div>
                <div className="flex justify-start items-start">
                    <img className='w-[6px] sm:w-[10px] lg:w-[16px] 2xl:w-[22px]' src={tick} alt="" />
                    <p className='text-black font-montserrat text-left md:text-justify font-light text-[6px] sm:text-[10px] lg:text-[16px] 2xl:text-[22px]'>Strategic Planning for Success</p>
                </div>
                <div className="flex justify-start items-start">
                    <img className='w-[6px] sm:w-[10px] lg:w-[16px] 2xl:w-[22px]' src={tick} alt="" />
                    <p className='text-black font-montserrat text-left md:text-justify font-light text-[6px] sm:text-[10px] lg:text-[16px] 2xl:text-[22px]'>Agile and Adaptive</p>
                </div>
                <div className="flex justify-start items-start">
                    <img className='w-[6px] sm:w-[10px] lg:w-[16px] 2xl:w-[22px]' src={tick} alt="" />
                    <p className='text-black font-montserrat text-left md:text-justify font-light text-[6px] sm:text-[10px] lg:text-[16px] 2xl:text-[22px]'>Dedicated Project Management</p>
                </div>
                <div className="flex justify-start items-start">
                    <img className='w-[6px] sm:w-[10px] lg:w-[16px] 2xl:w-[22px]' src={tick} alt="" />
                    <p className='text-black font-montserrat text-left md:text-justify font-light text-[6px] sm:text-[10px] lg:text-[16px] 2xl:text-[22px]'>Continuous Learning and Growth</p>
                </div>
                <div className="flex justify-start items-start">
                    <img className='w-[6px] sm:w-[10px] lg:w-[16px] 2xl:w-[22px]' src={tick} alt="" />
                    <p className='text-black font-montserrat text-left md:text-justify font-light text-[6px] sm:text-[10px] lg:text-[16px] 2xl:text-[22px]'>Global Vision, Local Understanding</p>
                </div>
                
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex justify-center items-center w-full md:w-1/2"
            >
                <img src={about2} alt="" className='h-[60%] w-[90%] md:h-[60%] md:w-[60%] object-contain' />
            </motion.div>
        </div>
    </div>
  )
}

export default SectionWrapper(About2, 'about2')