import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function Navbar() {

    const [isMobile,isOpne] = useState(false)
    return (
        <>
            <nav>
                <div className="nav__header">
                    <div className="nav__logo">
                        <a href="#">S<span>e</span>LVA<span>.</span></a>
                    </div>
                    <div className="nav__menu__btn" id="menu-btn" onClick={()=> isOpne(!isMobile)}>
                        <i className={isMobile ? 'ri-close-line' : 'ri-menu-line'}></i>
                    </div>
                </div>
                <ul className={ isMobile ? 'open': 'nav__links' } id="nav-links">
                    <li className="link"><a href="#home">Home</a></li>
                    <li className="link"><a href="#about">About</a></li>
                    <li className="link"><a href="#blog">Projects</a></li>
                    <li className="link"><a href="#resume">Resume</a></li>
                    <li className="link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
