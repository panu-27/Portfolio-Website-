'use client';
import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt, FaPython } from 'react-icons/fa'; 

const skills = [
  { name: 'JavaScript', icon: <FaJsSquare className='text-yellow-500 text-4xl' /> },
  { name: 'React', icon: <FaReact className='text-blue-500 text-4xl' /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-green-500 text-4xl' /> },
  { name: 'CSS', icon: <FaCss3Alt className='text-blue-400 text-4xl' /> },
  { name: 'Python', icon: <FaPython className='text-blue-600 text-4xl' /> },
];

const Skills = () => {
  return (
    <div className='text-white bg-[#381a5f] py-10 px-4' id='skills'>
      <h1 className='text-4xl md:text-6xl text-center font-semibold mb-6'>
        My <span className='text-orange-400'>Skills</span>
      </h1>
      <div className='max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-6'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center transition-transform duration-300 ease-in-out hover:transform hover:scale-105 hover:animate-ping'>
            {skill.icon}
            <span className='text-lg md:text-xl mt-2'>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
