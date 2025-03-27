import React from 'react'
import Image from 'next/image'
import './navbar.css'
import { ContactModal } from '../ContactModal/ContactModal'

const Navbar = () => {

    return (
        <header className="navbar-desk container flex items-center justify-between h-[80px] sm:h-[123px]">
            <a
                className="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit"
                href="/"
            >
                <Image src={"https://res.cloudinary.com/dvrc38ei4/image/upload/v1724639017/logosinfd_sm8z1b.png"}   alt={"sadasd"} width={75} height={75}/>
            </a>
            <nav id="navbar" className="navbar">
                <ul className="flex items-center">
                    <li>
                        <a className="nav-link p-4 dark:text-light block text-lg" href="/">Home</a>
                    </li>
                    <li>
                        <a className="nav-link p-4 dark:text-light block text-lg" href="/experience">Experience</a>
                    </li>
                    <li>
                        <a className="nav-link p-4 dark:text-light block text-lg" href="/about">About</a>
                    </li>

                    <li>
                        <a className="nav-link p-4 dark:text-light block text-lg" href="/projects"
                        >Projects</a>
                    </li>
                    <li>
                        <a className="nav-link p-4 dark:text-light block text-lg" href="#"
                        ><ContactModal/></a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Navbar