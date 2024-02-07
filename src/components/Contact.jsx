import React, { useState } from 'react'
import { styles } from '../styles'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'
import gplus from '../assets/gplus.svg'
import { Button, Input } from "@material-tailwind/react";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phone , setPhone] = useState('')
    const [company, setCompany] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            phone: phone,
            company: company,
            message: message
        }
        console.log(data)
    }
  return (
    <div className={`${styles.padding} w-full h-screen flex items-center`}>
        <div className="w-full h-[84%] flex justify-between items-start px-16 py-28 rounded-[81px] max-w-8xl bg-gradient-to-br from-[#24346F] to-[#416EA0] mx-auto">
            <div className='flex p-6 justify-start items-start w-1/2 flex-col'>
                <h2 className='text-white font-montserrat font-bold text-4xl'>Get In Touch</h2>
                <p className='text-white font-montserrat font-light text-[28px] py-4'>To request a quote or want to meet up contact us directly or fill out the form and we will get back to you promptly.</p>
                <div className="flex items-start">
                    <a href="https://facebook.com"> <img src={fb} alt="Facebook" className='pr-4'/></a>
                    <a href="https://instagram.com"><img src={insta} alt="Instagram" className='pr-4'/></a>
                    <a href="https://google.com"><img src={gplus} alt="Google Plus" className='pr-4'/></a>
                    
                </div>
                <div className="flex justify-end items-end text-white font-montserrat font-medium mt-8">
                    <a href="" className='pr-6'>Terms & Condition</a>
                    <a href="" className='pr-6'>Privacy Policy</a>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2">
                <form action="" onSubmit={handleSubmit} className='flex lg:w-96 flex-col gap-6 items-center'>
                    <Input variant="standard" color='white' label='Name' placeholder='Your Name' required  onChange={(e)=>{setName(e.target.value)}}/>
                    <Input variant="standard" color='white' inputMode='tel' label='Phone' placeholder='Enter 10 digit mobile number' required pattern='[0-9]{10}'  onChange={(e)=>{setPhone(e.target.value)}}/>
                    <Input variant="standard" color='white' inputMode='email' label='Email' placeholder='Your Email Address' required  onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Input variant="standard" color='white' label='Company' placeholder='Your Company' required  onChange={(e)=>{setCompany(e.target.value)}}/>
                    <Input variant='standard' color='white' multiple={true} label='Message' placeholder='Enter your  message...' rows={4}  onChange={(e)=>{setMessage(e.target.value)}}/>
                    <Button type='submit' className='mt-6 w-36'  color='white' ripple size='lg'>Submit</Button>
                </form>
                
            </div>

        </div>
        
    </div>
  )
}

export default Contact