import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Copyright/>
    </>
  );
}
