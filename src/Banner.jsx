import React from 'react'

function Banner() {
    return (
        <>
            <section className="banner">
                <div className="section__container banner__container">
                    <div className="banner__card" data-aos="fade-up">
                        <h4>8.5+</h4>
                        <p>CGPA</p>
                    </div>
                    <div className="banner__card" data-aos="fade-up">
                        <h4>3+</h4>
                        <p>Completed Projects</p>
                    </div>
                    <div className="banner__card" data-aos="fade-up">
                        <h4>100+</h4>
                        <p>Python Problem Solved</p>
                    </div>
                    <div className="banner__card" data-aos="fade-up">
                        <h4>15+</h4>
                        <p>Web Problem Solved</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
