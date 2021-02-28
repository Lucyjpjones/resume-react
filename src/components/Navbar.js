import Hamburger from 'hamburger-react';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const closeMobileMenu = () => setOpen(false)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className='menu-icon'>
                    <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#B7CCB7" />
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item'>
                        <Link to='/lj-online-resume/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/lj-online-resume/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/lj-online-resume/projects' className='nav-links' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/lj-online-resume/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
