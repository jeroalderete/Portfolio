import React from 'react'
import './style.css'
import Link from 'next/link'
import { Instagram, Linkedin, Github, Facebook } from 'lucide-react';
import { HomeNav } from '@/components/HomeNav/HomeNav';


const Home = () => {

  return (

    <>

      <header id="header">

        <div className="container">
          <h1><a href='/'>Jeronimo Alderete</a></h1>
          <h2>Specialized <span> Frontend Web Developer</span> focusing on e-commerce.</h2>

          <HomeNav />

          <div className="social-links">
            <Link href="https://www.instagram.com/desarrolloliebre_/" target="_blank" className="instagram"><Instagram size={20}/></Link>
            <Link href="https://www.linkedin.com/in/jeronimoalderete/" target="_blank" className="linkedin"><Linkedin size={20}/></Link>
            <Link href="https://github.com/jeroalderete" target="_blank" className="github"><Github size={20} /></Link>
          </div>
        </div>
        
      </header>
    </>
  )
}

export default Home