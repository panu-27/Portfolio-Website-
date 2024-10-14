'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import project1 from '../assets/proj1.jpg';
import project2 from '../assets/proj2.jpg';
import project3 from '../assets/proj3.png';
import project4 from '../assets/proj4.jpg';

const projects = [
    {
        title: "Project 1 Title",
        desc: "This is a description of Project 1. It showcases various features and functionalities.",
        devstack: "React, Tailwind CSS, Node.js",
        link: "https://project1-demo.com",
        git: "https://github.com/username/project1",
        src: project1
    },
    {
        title: "Project 2 Title",
        desc: "Project 2 is focused on enhancing user experience with intuitive design.",
        devstack: "Vue.js, Vuetify, Express",
        link: "https://project2-demo.com",
        git: "https://github.com/username/project2",
        src: project2
    },
    {
        title: "Project 3 Title",
        desc: "This project aims to optimize performance for large datasets.",
        devstack: "Angular, Bootstrap, MongoDB",
        link: "https://project3-demo.com",
        git: "https://github.com/username/project3",
        src: project3
    },
    {
        title: "Project 4 Title",
        desc: "A collaborative platform for team management and communication.",
        devstack: "Next.js, Tailwind CSS, Firebase",
        link: "https://project4-demo.com",
        git: "https://github.com/username/project4",
        src: project4
    },
    {
        title: "Project 5 Title",
        desc: "An e-commerce application with features for a seamless shopping experience.",
        devstack: "React, Redux, GraphQL",
        link: "https://project5-demo.com",
        git: "https://github.com/username/project5",
        src: project4
    }
];

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-10 md:py-18' id='portfolio'>
      <h1 className='text-white text-4xl md:text-6xl w-[90%] md:w-[600px] mx-auto font-semibold p-4 mb-4'>
        Portfolio <span className='text-orange-400'>Projects</span>
      </h1>

      <div className='max-w-[1200px] mx-auto space-y-24 px-4'> 
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-4"
          >
            <div className='p-4'> 
              <h2 className="text-xl md:text-2xl font-bold">{`0${index + 1} ${project.title}`}</h2>
              <p className="mt-2 text-sm md:text-base">{project.desc}</p>
              <p className="font-semibold">{project.devstack}</p>
              <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
                <a href={project.link} className='text-blue-400 hover:underline mb-2 md:mb-0'>Link</a>
                <a href={project.git} className='text-blue-400 hover:underline'>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image src={project.src} alt={project.title} className='h-[200px] md:h-[400px] w-auto' /> 
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

