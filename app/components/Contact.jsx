'use client';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='text-white bg-[#381a5f] py-10 px-4' id='contact'>
      <h1 className='text-4xl md:text-6xl text-center font-semibold mb-6'>
        Get in <span className='text-orange-400'>Touch</span>
      </h1>
      <div className='max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-6'>
        
    
        <div className='flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <FaGithub className='text-3xl mb-2 text-orange-400' />
          <a href='https://github.com/panu-27' target='_blank' rel='noopener noreferrer' className='text-lg'>GitHub</a>
        </div>
        
        <div className='flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <FaInstagram className='text-3xl mb-2 text-orange-400' />
          <a href='https://instagram.com/pranav_zinjad' target='_blank' rel='noopener noreferrer' className='text-lg'>Instagram</a>
        </div>
        
        <div className='flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <FaLinkedin className='text-3xl mb-2 text-orange-400' />
          <a href='https://www.linkedin.com/in/pranav-zinjad-b4aa312a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3EQ5IOBdRx2rgF6xKfAvJA%3D%3D' target='_blank' rel='noopener noreferrer' className='text-lg'>LinkedIn</a>
        </div>

        <div className='flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <FaFacebook className='text-3xl mb-2 text-orange-400' />
          <a href='https://facebook.com/pranav.zinjad' target='_blank' rel='noopener noreferrer' className='text-lg'>Facebook</a>
        </div>
        
        <div className='flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <FaEnvelope className='text-3xl mb-2 text-orange-400' />
          <a href='mailto:pranavzinjad06@gmail.com' className='text-lg'>Email</a>
        </div>
        
        <div className='flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 transition-transform duration-300 hover:scale-105'>
          <FaPhone className='text-3xl mb-2 text-orange-400' />
          <span className='text-lg'>+91 8956456522</span>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
