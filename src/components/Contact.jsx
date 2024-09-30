import React, { useRef } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pfex46l', 
      'template_ef7pcah',  
      form.current,
      't-qpD284tQ6-eYAog'      
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the message.');
    });
    e.target.reset();
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mt-16 mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:mailsforharris@gmail.com" className='hover:underline'>
                mailsforharris@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <span>+91 8220600748</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span>Krishnamanaidu street, ondipudur, coimbatore - 641 016</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea 
                  name="message"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  required
                />
              </div>
              <button 
                type="submit" 
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
              transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
