import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaPaintBrush } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <NavLink to="/" activeclassname="active" className="nav-logo">
                        ETHAN-ART
                        <i className='brand-icon'> <FaPaintBrush /> </i>
                    </NavLink>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
                        <li className='nav-item'>
                            <NavLink to="/" activeclassname="active" className="nav-links" onClick={handleClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/about" activeclassname="active" className="nav-links" onClick={handleClick}>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/contact" activeclassname="active" className="nav-links" onClick={handleClick}>
                                Contact
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/gallery" activeclassname="active" className="nav-links" onClick={handleClick}>
                                Gallery
                            </NavLink>
                        </li>
                    </ul>
                    <div className='nav-icon' onClick={handleClick}>
                        <i className="  "> {click ? <FaTimes /> : <FaBars />} </i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
