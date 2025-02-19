import React from 'react'
import password_checker from './assets/password-checker.jpg'
import ecommerce from './assets/e-commerce.jpeg'
import website from './assets/website.png'


function Blog() {
    return (
        <>
            <section className="section__container blog__container" id="blog" data-aos="fade-up">
                <h2 className="section__header" vdata-aos="fade-up">What Helps My Goals</h2>
                <div className="blog__grid">
                <div className="blog__card" data-aos="fade-up">
                        <img src={ecommerce} alt="blog" />
                        <div className="blog__content">
                            <h4>E-Commerce</h4>
                            <p className="section__description">
                                Building a E-commerce website similar to that of Ajio, we
                                will be able to create account and explore the product, order the product.
                                Online payment is also available.
                            </p>
                            <div>
                                <a href="https://e-commerce-frontend-zrep.onrender.com/">Read More</a>
                                <div className="blog__socials">
                                    <a href="https://github.com/selvaganapathy0605/Campgrounds"><i
                                        className="ri-github-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__card" data-aos="fade-up">
                        <img src={website} alt="blog" />
                        <div className="blog__content">
                            <h4>Symposium  Web Site</h4>
                            <p className="section__description">
                                I developed the official website for our college symposium. 
                                This website will serve as a hub for event details, registration, and 
                                updates, making it easier for everyone to stay connected with what’s happening.
                            </p>
                            <div>
                                <a href="https://grt-texpo-24.netlify.app/">Read More</a>
                                <div className="blog__socials">
                                    <a href="https://github.com/selvaganapathy0605/college-symposium-project"><i className="ri-github-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__card" data-aos="fade-up">
                        <img src={password_checker} alt="blog" />
                        <div className="blog__content">
                            <h4>Password Checker</h4>
                            <p className="section__description">
                                The project it takes our password and it tell us to how our password is strong.
                                If it is strong it tells carry on or tells change the password -"only code".
                            </p>
                            <div>
                                <a href="https://github.com/selvaganapathy0605/password-checker">Read More</a>
                                <div className="blog__socials">
                                    <a href="https://github.com/selvaganapathy0605/password-checker"><i
                                        className="ri-github-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
