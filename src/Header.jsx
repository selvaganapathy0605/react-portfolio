import React from 'react'
import Navbar from './Navbar'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Thiruvallur from './assets/Thiruvallur.pdf'


function Header() {
    const [ texts ] = useTypewriter({
        words: ["Fullstack Developer", "Python Developer"],
        loop: {},
        typeSpeed:80,
        deleteSpeed:120,
        delaySpeed:1500
    })
    return (
        <>
            <header className="header" id="home" data-aos="fade-up">
                <Navbar />
                <div className="section__container header__container">
                    <h3>Hello, I'm Selvaganapathy D</h3>
                    <h1><sapn>{texts}</sapn>
                        <Cursor /></h1>
                    <p className="section__description">
                        In the world of development, I fuse finesse with creative flair. As a
                        Fullstack & Python Developer, my portfolio is a visual journey where
                        innovation meets aesthetics. Welcome to a space where every pixel
                        tells a story and each interaction is a work of art.
                    </p>
                    <div className="header__btns">
                        <a download="CV.pdf" href={Thiruvallur}><button className="btn btn__primary">Download
                            CV</button></a>
                        <a href="#contact"><button className="btn btn__secondary">Contact Me</button></a>
                    </div>
                </div>
            </header>
        </>

    )
}
export default Header
