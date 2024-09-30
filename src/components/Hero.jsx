import React from 'react'
import HeroImage from '../assets/harris_img_-removebg-preview.png'

const Hero = () => {
  return (
    <div className=' bg-black text-white text-center flex flex-col items-center pt-20 ' id='home'>
        <img src={HeroImage} alt="" 
        className='mx-auto mt-24 mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl mt-10 font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Harris raj</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-6 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-7 space-x-4'>
            <a href="#contact"
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2  rounded-full'>Contact With Me</a>
        
        </div>

    </div>
  )
}

export default Hero