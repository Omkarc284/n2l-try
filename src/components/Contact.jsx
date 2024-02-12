import React, { forwardRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { styles } from '../styles'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'
import gplus from '../assets/gplus.svg'
import { Button, Input, Dialog, DialogBody, DialogHeader, DialogFooter, Typography } from "@material-tailwind/react";

const Contact = forwardRef((props, ref) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phone , setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [termsmodal, setTermsModal] = useState(false)
    const [privacymodal, sePrivacyModal] = useState(false)
    const [loading, setLoading] = useState(false);
    const handleTerms = () => setTermsModal(!termsmodal)
    const handlePrivacy = () => sePrivacyModal(!privacymodal)
    const handleSubmit = (e) => {
        
        e.preventDefault();
        setLoading(true)
        emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          phone: phone,
          company: company,
          to_email: "hello@nex2link.com",
          message: message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setName('')
          setEmail('')
          setCompany('')
          setPhone('')
          setMessage('')
          window.scrollTo({top:0, behavior: 'smooth'})
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      )
    }
    
  return (
    <div ref={ref} className={`w-[360px] md:w-[640px] lg:w-[1280px] h-screen flex items-center justify-center `}>
        <div className="w-full h-[84%] flex justify-between items-start px-16 py-28 rounded-[81px] max-w-8xl bg-gradient-to-br from-[#24346F] to-[#416EA0] mx-auto mt-48">
            <div className='flex p-6 justify-start items-start w-1/2 flex-col'>
                <h2 className='text-white font-montserrat font-bold text-4xl'>Get In Touch</h2>
                <p className='text-white font-montserrat font-light text-[28px] py-4'>To request a quote or want to meet up contact us directly or fill out the form and we will get back to you promptly.</p>
                <div className="flex items-start">
                    <a href="https://facebook.com"> <img src={fb} alt="Facebook" className='pr-4'/></a>
                    <a href="https://instagram.com"><img src={insta} alt="Instagram" className='pr-4'/></a>
                    <a href="https://google.com"><img src={gplus} alt="Google Plus" className='pr-4'/></a>
                    
                </div>
                <div className="flex justify-end items-end text-white font-montserrat font-medium mt-8">
                    <button className='pr-6' onClick={handleTerms}>Terms & Condition</button>
                    <button className='pr-6' onClick={handlePrivacy}>Privacy Policy</button>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2">
                <form action="" onSubmit={handleSubmit} className='flex lg:w-96 flex-col gap-6 items-center'>
                    <Input variant="standard" color='white' label='Name' placeholder='Your Name' value={name} required  onChange={(e)=>{setName(e.target.value)}}/>
                    <Input variant="standard" color='white' inputMode='tel' label='Phone' value={phone} placeholder='Enter 10 digit mobile number' required pattern='[0-9]{10}'  onChange={(e)=>{setPhone(e.target.value)}}/>
                    <Input variant="standard" color='white' inputMode='email' label='Email' value={email} placeholder='Your Email Address' required  onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Input variant="standard" color='white' label='Company' placeholder='Your Company' value={company} required  onChange={(e)=>{setCompany(e.target.value)}}/>
                    <Input variant='standard' color='white' multiple={true} label='Message' value={message} placeholder='Enter your  message...' rows={4}  onChange={(e)=>{setMessage(e.target.value)}}/>
                    <Button type='submit' className='mt-6 w-36'  color='white' ripple size='lg'>
                        {loading ? "Sending..." : "Send"}
                    </Button>
                </form>
                
            </div>

        </div>
        <Dialog open={termsmodal} size={"sm"} handler={handleTerms}>
            <DialogHeader>
                Terms and Conditions:
            </DialogHeader>
            <DialogBody className='p-9 font-montserrat overflow-y-scroll overflow-x-hidden text-black max-h-96'>
                Welcome to <span className='text-[#23346F] font-bold'>Nex2Link!</span>  By using our website and services, you agree to abide by the following terms and conditions:

                <h2 className=' modal_h2'>1.Website Usage:</h2>
                <p>Our website's content is for general information only and may change without notice.</p>
                <p>While we aim for accuracy, we make no warranties about the completeness or reliability of the information provided.</p>

                <h2 className=' modal_h2'>2.Intellectual Property:</h2>
                <p>All trademarks and content on this website are either owned by us or licensed to us. Reproduction without permission is prohibited.</p>
                <h2 className=' modal_h2'>3.Third-Party Links:</h2>
                <p>We may link to third-party websites for your convenience. However, we do not endorse or take responsibility for their content.</p>
                
                <h2 className=' modal_h2'>4.Limitation of Liability:</h2>
                <p>Your use of our website is at your own risk. We are not liable for any damages resulting from the use of information or services provided.</p>
                
                
            </DialogBody>
            <DialogFooter>
            
            <Button variant="gradient" color='blue-gray' onClick={handleTerms}>
                <span>Continue</span>
            </Button>
            </DialogFooter>
        </Dialog>
        <Dialog open={privacymodal} size={"md"} handler={handlePrivacy} >
            <DialogHeader>
                Privacy Policy:
            </DialogHeader>
            <DialogBody className='p-9 font-montserrat overflow-y-scroll overflow-x-hidden text-black max-h-96'>
                Your privacy matters to us. Here's how we handle your information:

                <h2 className=' modal_h2'>1.Information Collection:</h2>
                <p>We collect personal information when you use our website, such as when you register, make a purchase, or subscribe to our newsletter.</p>

                <h2 className=' modal_h2'>2.Information Usage:</h2>
                <p>We use your information to improve our services, personalize your experience, and send you relevant updates.</p>
                <h2 className=' modal_h2'>3.Protection of Information:</h2>
                <p>We take security measures to safeguard your personal information from unauthorized access or disclosure.</p>
                
                <h2 className=' modal_h2'>4.Sharing Your Information:</h2>
                <p>We do not sell or rent your personal information to third parties. However, we may share generic aggregated demographic information for analytics purposes.</p>
                <h2 className=' modal_h2'>5.Third-Party Websites:</h2>
                <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
                
            </DialogBody>
            <DialogFooter>
            
            <Button variant="gradient" color='blue-gray' onClick={handlePrivacy}>
                <span>Continue</span>
            </Button>
            </DialogFooter>
        </Dialog>
    </div>
  )
})

export default Contact