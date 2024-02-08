import React from 'react'
import about2 from '../assets/about2.svg'
import tick from '../assets/tick.svg'
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const About2 = () => {
  return (
    <div className='w-full h-screen flex items-center'>
        <div className='w-full h-full flex justify-between items-center max-w-8xl mx-auto overflow-x-hidden'>
            
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)} 
                className='flex p-6 justify-center items-start w-1/2 flex-col'
            >
                <h2 className='text-[#23346F] font-montserrat font-bold text-[9px] sm:text-[18px] lg:text-[24px] 2xl:text-[30px] mb-12'>Why Choose Nex2Link?</h2>
                <p className='text-black font-montserrat font-light text-[6px] sm:text-[12px] lg:text-[18px] 2xl:text-[24px] py-4'>At Nex2Link, we understand that choosing a digital solutions partner is a critical decision for the success of your business.</p>
                <div className="flex justify-center items-start">
                    <img src={tick} alt="" />
                    <p className='text-black font-montserrat font-light text-[6px] sm:text-[12px] lg:text-[18px] 2xl:text-[24px]'>Collaborative Innovation</p>
                </div>
                <div className="flex justify-center items-start">
                    <img src={tick} alt="" />
                    <p className='text-black font-montserrat font-light text-[6px] sm:text-[12px] lg:text-[18px] 2xl:text-[24px]'>Strategic Planning for Success</p>
                </div>
                <div className="flex justify-center items-start">
                    <img src={tick} alt="" />
                    <p className='text-black font-montserrat font-light text-[6px] sm:text-[12px] lg:text-[18px] 2xl:text-[24px]'>Agile and Adaptive</p>
                </div>
                <div className="flex justify-center items-start">
                    <img src={tick} alt="" />
                    <p className='text-black font-montserrat font-light text-[6px] sm:text-[12px] lg:text-[18px] 2xl:text-[24px]'>Dedicated Project Management</p>
                </div>
                <div className="flex justify-center items-start">
                    <img src={tick} alt="" />
                    <p className='text-black font-montserrat font-light text-[6px] sm:text-[12px] lg:text-[18px] 2xl:text-[24px]'>Continuous Learning and Growth</p>
                </div>
                <div className="flex justify-center items-start">
                    <img src={tick} alt="" />
                    <p className='text-black font-montserrat font-light text-[6px] sm:text-[12px] lg:text-[18px] 2xl:text-[24px]'>Global Vision, Local Understanding</p>
                </div>
                
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex justify-center items-center w-1/2"
            >
                <img src={about2} alt="" className='h-[60%] w-[60%] object-cover' />
            </motion.div>
        </div>
    </div>
  )
}

export default SectionWrapper(About2, 'about2')