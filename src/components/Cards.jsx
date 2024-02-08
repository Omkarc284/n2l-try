import React from 'react'

const Cards = ({props}) => {

  return (
    <div className="flex overflow-hidden">
      <div className='cardcontainer hover:bg-gradient-to-b hover:from-[#416EA0] hover:to-[#60AEE0] group'>
        <img src={props.image} className='absolute right-6 top-8 group-hover:scale-110'/>
        <h1 className='font-montserrat font-bold text-[#5B5D5C] text-3xl pt-16 w-[80%] group-hover:text-white'>{props.title}</h1>
        <p className='font-montserrat font-light text-4 group-hover:text-white'>{props.description}</p>

      </div>
    </div>
    
  )
}

export default Cards