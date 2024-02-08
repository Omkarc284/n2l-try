import React from 'react'
import { styles } from '../styles'
import frame from '../assets/frame.svg'
import { cardData } from './content'
import Cards from './Cards'

const Home = () => {
  return (
    
    <div className={`${styles.padding} w-full h-screen flex items-center`}>
        <div className="w-full h-full flex items-center max-w-8xl mx-auto">
            <div className='w-full flex flex-col'>
              <div className="flex flex-col mt-9 pt-48">
                <h1 className="font-montserrat font-bold w-3/5 text-[#24346F] text-[32px] lg:text-[48px] 2xl:text-[64px] stroke-white">Crafting Tomorrow’s Digital Experiences</h1>
                <h2 className='w-3/5 font-montserrat font-medium text-black text-[16px] lg:text-[24px] 2xl:text-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
              </div>
              <div className=" w-full flex flex-wrap justify-between mt-[9%]">
                {
                  
                  cardData.map((card) => (
                    <div className="flex justify-between" key={card.id}>
                      <Cards props={card}/>
                    </div>
                    
                  ))
                }
              </div>
                
                
            </div>
            <img src={frame} alt='frame' className='object-contain absolute top-[16%] right-[3%] -z-10' />
            

        </div>
        
    </div>
    
  )
}

export default Home