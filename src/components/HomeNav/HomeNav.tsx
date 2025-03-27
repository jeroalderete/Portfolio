"use client"

import React from 'react'
import {ContactModalHome} from '../ContactModalHome/ContactModalHome'
import './homenav.css'

export const HomeNav = () => {
  return (
<nav id="navbar" className="navbar">
    <ul>
      <li><a className="home-nav active" href="#">Home</a></li>
      <li><a className="home-nav nav-link" href="/experience">Experience</a></li>
      <li><a className="home-nav nav-link" href="/about">About</a></li>
      <li><a className="home-nav nav-link" href="/projects">Projects</a></li>
      <li className='hidden md:block relative bottom-[9.8px]'><a  className="none md:block md:relative top-[9.8px] home-nav text-black"><ContactModalHome /></a></li>
    </ul>
  </nav>

  )
}

