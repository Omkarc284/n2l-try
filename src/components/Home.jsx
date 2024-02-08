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
        className='cardcontainer hover:bg-gradient-to-b hover:from-[#416EA0] hover:to-[#60AEE0] group'
      >
        <img src={props.image} className='absolute right-6 top-8 group-hover:scale-110'/>
        <h1 className='font-montserrat font-bold text-[#5B5D5C] text-3xl pt-16 w-[80%] group-hover:text-white'>{props.title}</h1>
        <p className='font-montserrat font-light text-4 group-hover:text-white'>{props.description}</p>

      </div>
    </motion.div>
    
  )
}
const Home = () => {
  return (
    
    <div className='w-full h-screen flex items-center'>
        <div className="w-full h-full flex items-center max-w-8xl mx-auto">
            <div className='w-full flex flex-col'>
              <motion.div variants={textVariant()} className="flex flex-col pt-8">
                <h1 className="font-montserrat font-bold w-3/5 text-[#24346F] text-[24px] lg:text-[36px] 2xl:text-[48px] stroke-white">Crafting Tomorrow’s Digital Experiences</h1>
                <h2 className='w-3/5 font-montserrat font-medium text-black text-[12px] lg:text-[18px] 2xl:text-[24px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
              </motion.div>
              <div className=" w-full flex flex-wrap justify-between mt-[6%]">
                {     
                  cardData.map((card, index) => (
                    <div className="flex justify-between" key={card.id}>
                      <Cards index={index} props={card}/>
                    </div>
                    
                  ))
                }
              </div>
                
                
            </div>
            <img src={frame} alt='frame' className='object-contain w-[36%] absolute top-[16%] right-[3%] -z-10' />
            

        </div>
        
    </div>
    
  )
}

export default SectionWrapper(Home,'home')