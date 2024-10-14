'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import project1 from '../assets/proj1.png';
import project2 from '../assets/proj2.png';
import project3 from '../assets/proj3.png';


const projects = [
    {
        title: "Music WebApp Simple FrontEnd Project",
        desc: "A Spotify Like Music app for personal use",
        devstack: "HTML , CSS JavaScript",
        link: "https://panu.freewebhostmost.com",
        git: "https://github.com/panu-27/Music-App---Using-Simple-Javascript-HTML-CSS",
        src: project1
    },
    {
        title: "Project 2 Title",
        desc: "Project 2 is focused on enhancing user experience with intuitive design.",
        devstack: "Next.js React.js Frame Motion",
        link: "https://portfolio-website-delta-gilt.vercel.app/",
        git: "https://github.com/panu-27/Portfolio-Website-",
        src: project2
    },
    {
      title: "iTask todo list app",
      desc: "todo app ",
      devstack: "Vite React.js",
      link: "https://portfolio-website-delta-gilt.vercel.app/",
      git: "https://github.com/panu-27/Portfolio-Website-",
      src: project3
  },
  
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

