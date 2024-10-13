import React from 'react'

function Service() {
    return (
        <>
            <section className="service" id="service">
                <div className="section__container service__container" data-aos="fade-up">
                    <h2 className="section__header" data-aos="fade-up">What I Do</h2>
                    <p className="section__description" data-aos="fade-up">
                        I will builds both the front-end and back-end of web applications, ensuring
                        seamless integration between user interfaces and server-side functionalities.
                        They handle everything from creating engaging user experiences to managing databases and server logic,
                        delivering complete and efficient web solutions.
                    </p>
                    <div className="service__grid">
                        <div className="service__card" data-aos="fade-up">
                            <span><i className="ri-mac-line"></i></span>
                            <div>
                                <h4>End-to-End Development:</h4>
                                <p>
                                    To handle both front-end and back-end development, ensuring that all components of the
                                    application work together seamlessly.
                                </p>
                            </div>
                        </div>
                        <div className="service__card" data-aos="fade-up">
                            <span><i className="ri-loop-right-line"></i></span>
                            <div>
                                <h4>Performance Optimization</h4>
                                <p>
                                    To create efficient, fast, and responsive applications by optimizing both the client-side
                                    and server-side performance.
                                </p>
                            </div>
                        </div>
                        <div className="service__card" data-aos="fade-up">
                            <span><i className="ri-code-s-slash-fill"></i></span>
                            <div>
                                <h4> API Development and Integration</h4>
                                <p>
                                    Develop RESTful APIs that enable communication between different parts of the
                                    application or between different applications.
                                </p>
                            </div>
                        </div>
                        <div className="service__card" data-aos="fade-up">
                            <span><i className="ri-box-3-line"></i></span>
                            <div>
                                <h4>Scalability and Flexibility</h4>
                                <p>
                                    To design applications that can easily scale and adapt to growing user bases and evolving
                                    business needs and also building a flexible architecture that can accommodate future
                                    enhancements and increased demand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
