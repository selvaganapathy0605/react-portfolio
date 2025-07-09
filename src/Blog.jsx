import React from 'react'
import password_checker from './assets/password-checker.jpg'
import ecommerce from './assets/e-commerce.jpeg'
import website from './assets/website.png'
import financeBlog from './assets/financeblog.jpg'


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
                                <a href="https://e-commerce-frontend-zrep.onrender.com/">Preview</a>
                                <div className="blog__socials">
                                    <a href="https://github.com/selvaganapathy0605/Campgrounds"><i
                                        className="ri-github-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__card" data-aos="zoom-in-up">
                        <img src={financeBlog} alt="blog" />
                        <div className="blog__content">
                            <h4>Financial Secret Growth</h4>
                            <p className="section__description">
                                Financial Growth Secret is a MERN stack-based blog platform for sharing financial insights. 
                                It allows admins to publish blogs and connect with customers through contact and inquiry features."
                            </p>
                            <div>
                                <a href="https://financialgrowthsecret.onrender.com">Preview</a>
                                <div className="blog__socials">
                                    <a href="https://github.com/selvaganapathy0605/financialgrowthsecret"><i
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
                                <a href="https://grt-texpo-24.netlify.app/">Preview</a>
                                <div className="blog__socials">
                                    <a href="https://github.com/selvaganapathy0605/college-symposium-project"><i className="ri-github-fill"></i></a>
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
