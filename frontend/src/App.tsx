import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LandingPageComponent from './components/landingPage/LandingPageComponent'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
     <LandingPageComponent/>
    </>
  )
}

export default App
