import React from 'react'
import Formvalidate from './Formvalidate'
function Footer() {
    return (
        <>
            <footer className="footer" id="contact">
                <div className="section__container footer__container" data-aos="fade-up">
                    <h2 className="section__header" data-aos="fade-up">24/7 Support Hello Says</h2>
                    <p className="section__description" data-aos="fade-up">
                        A testament to our commitment, these testimonials showcase the
                        satisfaction of clients who've experienced our 24/7 support.
                    </p>
                    <div className="footer__grid" data-aos="fade-up">
                        <div className="footer__content">
                            <h4>Selva</h4>
                            <p>
                                Explore more of my work, connect with me on social media, or drop
                                a message.
                            </p>
                            <p>
                                Let's continue the developement conversation and embark on new creative
                                journeys together.
                            </p>
                            <p>Thank you for visiting!</p>
                            <div className="footer__socials">
                                <a href="https://github.com/selvaganapathy0605"><i className="ri-github-fill"></i></a>
                                <a href="https://www.frontendmentor.io/profile/selvaganapathy0605"><i
                                    className="ri-bring-to-front"></i></a>
                                <a href="https://www.linkedin.com/in/selvaganapathy-d-822286291"><i
                                    className="ri-linkedin-fill"></i></a>
                                <a href="https://www.instagram.com/itz_selvaganapathii"><i className="ri-instagram-fill"></i></a>
                            </div>
                        </div>
                        <Formvalidate />
                    </div>
                </div>
                <div className="footer__bar">
                    Copyright © 2024 -Selvaganapathy D- All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
