import React from 'react'
import frame from '../assets/frame.svg'
import { cardData } from './content'
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Cards = ({index, props}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex overflow-hidden"
    >
      <div 
        className='cardcontainer w-[170px] md:w-[144px] lg:w-[288px] hover:bg-gradient-to-b hover:from-[#416EA0] hover:to-[#60AEE0] group'
      >
        <img src={props.image} className='scale-50 sm:scale-75 md:scale-50 xl:scale-100 absolute top-2 right-2 lg:right-6 lg:top-8 md:group-hover:scale-[60%] xl:group-hover:scale-110'/>
        <h1 className='font-montserrat font-bold text-[#5B5D5C] text-[12px] lg:[18px] xl:text-[24px] pt-16 w-[108px] md:w-[72px] lg:w-[128px] xl:w-[176px] group-hover:text-white'>{props.title}</h1>
        <p className='w-[144px] md:w-[128px] lg:w-[196px] xl:w-[256px] font-montserrat font-light text-[7px] lg:text-[12px] group-hover:text-white'>{props.description}</p>

      </div>
    </motion.div>
    
  )
}
const Home = () => {
  return (
    
    <div className=' w-full h-full flex justify-center'>
        <div className=" max-w-[360px] md:max-w-[640px] lg:max-w-[1080px] xl:max-w-[1280px] justify-center h-full flex flex-col xs:pt-[72px] md:pt-[96px] lg:pt-[144px]">
            <div className='flex flex-col md:flex-row items-center  text-center md:text-left '>
              <motion.div variants={textVariant()} className="flex flex-1 flex-col md:-mt-36 pt-8 items-center md:items-start">
                <h1 className="font-montserrat font-bold w-4/5 text-[#24346F] text-[18px] sm:text-[24px] lg:text-[44px]">Crafting Tomorrow’s Digital Experiences</h1>
                <h2 className='w-4/5  font-montserrat font-medium text-black text-[9px] sm:text-[12px] lg:text-[24px] '>Welcome to Nex2Link, where digital possibilities transform into reality. We specialize in crafting bespoke digital solutions that redefine industries.</h2>
              </motion.div>
              <img src={frame} alt='frame' className='object-contain w-[35%] sm:w-[270px] lg:w-[540px] -z-10'/>

                
            </div>
            <div className="md:-mt-8 xl:-mt-36 w-full grid grid-flow-row md:gap-3 lg:gap-8 justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {     
                  cardData.map((card, index) => (
                    <div className="flex justify-center sm:justify-normal" key={card.id}>
                      <Cards index={index} props={card}/>
                    </div>
                    
                  ))
                }
              </div>
                

        </div>
        
    </div>
    
  )
}

export default SectionWrapper(Home,'home')