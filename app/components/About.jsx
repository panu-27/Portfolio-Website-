'use client';
import React from 'react';
import Image from 'next/image';
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-10' id="about">
      <h1 className='text-white text-4xl md:text-6xl w-[90%] md:w-[320px] mx-auto font-semibold p-4 mb-4'>
        About <span className='text-orange-400'>Me</span>
      </h1>

      <div className='relative grid grid-cols-1 md:grid-cols-8 gap-6'>
    
        <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={book} alt='book' className='w-auto h-[100px] md:h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white/80'>Education</h2>
              <p className='text-sm md:text-lg text-white/70 mt-2'>Doing Computer Engineering From NBN Sinhgad Teechnical Institute Of Technology Pune , 2027 Passing Out</p>
            </div>
          </div>
        </div>

        <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={pc} alt='computer' className='w-auto h-[100px] md:h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white/80'>Problem-Solving</h2>
              <p className='text-sm md:text-lg text-white/70 mt-2'>I Approach Problem with Logical MindSet , Have a Good Command in DSA</p>
            </div>
          </div>
        </div>

        <div className='w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={card} alt='card' className='w-auto h-[100px] md:h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white/80'>Experience</h2>
              <p className='text-sm md:text-lg text-white/70 mt-2'>Currently Not have any experience , Building My skills </p>
            </div>
          </div>
        </div>

        <div className='w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={finance} alt='finance' className='w-auto h-[100px] md:h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white/80'>Technical Domains</h2>
              <p className='text-sm md:text-lg text-white/70 mt-2'>Full Stack Web Development MERN Stack </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
