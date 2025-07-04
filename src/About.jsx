import { React, useState } from 'react'
import profile1 from './assets/profile1.jpg'
import selvaphoto from './assets/selva-photo.jpg'

function About() {
    return (
        <>
            <section className="section__container about__container" id="about">
                <div className="about__image" data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={selvaphoto} alt="" />
                </div>
                <div className="about__content" data-aos="fade-up">
                    <h4 data-aos="fade-up">Let's Introduce About Myself</h4>
                    <p className="section__description" data-aos="fade-up">
                        Hello, I'm Selvaganapathy, a passionate Full Stack Developer & Python Developer on a mission
                        to design, build, and maintain comprehensive web applications.
                        <span>Systems by leveraging expertise across both front-end and back-end technologies.</span> My work is
                        a
                        fusion of user-centric design and aesthetic innovation, creating
                        engaging and memorable interactions.
                    </p>
                    <p className="section__description" data-aos="fade-up">
                        Let's embark on a visual journey that
                        <span> transcends boundaries</span> and redefines the Fullstack Developer
                        landscape.
                    </p>
                    <div className="about__progress" data-aos="fade-up">
                        <h5>HTML & CSS</h5>
                        <div className="about__progressbar"><span className='html-css'></span></div>
                        <h5>JS</h5>
                        <div className="about__progressbar"><span className='js'></span></div>
                        <h5>MERN</h5>
                        <div className="about__progressbar"><span className='mern'></span></div>
                        <h5>PYTHON</h5>
                        <div className="about__progressbar"><span className='python'></span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
