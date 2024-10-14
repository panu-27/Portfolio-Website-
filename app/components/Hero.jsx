'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import lightning from '../assets/icon2.png';
import cursor from '../assets/icon1.png';
import profilepic from '../assets/profilepic.png';

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
        <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-[radial-gradient(closest-side,#000_80%,#2B1942)] top-[550px] left-[50%] -translate-x-1/2"></div>


      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Pranav Zinjad</h1>
        </div>

        <motion.div
          className="absolute left-[240px] top-[170px]"
          drag
        >
          <Image
            src={cursor}
            height='170'
            width='170'
            alt="Cursor icon"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute left-[220px] top-[170px]"
          drag
        >
          <Image
            src={lightning}
            height='120'
            width='120'
            alt="Lightning icon"
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/70">
        "Hi, I'm Pranav, a Computer Science student at NBNSTIC, affiliated with SPPU. I specialize in MERN stack development, crafting dynamic web applications that enhance user experince"
        </p>

        <Image
          src={profilepic}
          alt="Profile picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
