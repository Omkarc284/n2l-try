import React from 'react'
import { styles } from '../styles'
import frame from '../assets/frame.svg'
import { cardData } from './content'
import Cards from './Cards'

const Home = () => {
  return (
    
    <div className={`${styles.padding} w-full h-screen flex items-center`}>
        <div className="w-full h-full flex justify-between items-center max-w-8xl mx-auto">
            <div className='relative items-center'>
                <h1 className="font-montserrat font-bold w-3/5 text-[#24346F] text-[64px]">Crafting Tomorrow’s Digital Experiences</h1>
                <h2 className='w-3/5 font-montserrat font-medium text-black text-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                <div className="my-9">
                    <button className='p-4 bg-[#60AEE0] text-white rounded-3xl font-montserrat text-md shadow-lg'>Explore More</button>
                </div>
                <Cards/>
            </div>
            <img src={frame} alt='frame' className='object-contain absolute top-[16%] right-[3%] -z-10' />
            

        </div>
        
    </div>
    
  )
}

export default Home