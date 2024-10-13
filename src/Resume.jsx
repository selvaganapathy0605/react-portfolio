import React from 'react'

function Resume() {

    // const tabList = document.getElementsByTagName("resume__tablist");

    // tabList.addEventListener("click", (e) => {
    //     const tabIndex = e.target.dataset.tab;
    //     if (!tabIndex) return;

    //     const tabs = document.querySelectorAll("[data-tab]");
    //     Array.from(tabs).forEach((tab) => {
    //         if (tab.dataset.tab === tabIndex) {
    //             tab.classList.add("active");
    //         } else {
    //             tab.classList.remove("active");
    //         }
    //     });

    //     const activePanel = document.querySelector(".panel__grid.active");
    //     const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
    //     if (activePanel.dataset.panel === tabIndex) return;
    //     activePanel.classList.add("close");
    //     activePanel.addEventListener(
    //         "animationend",
    //         (e) => {
    //             activePanel.classList.remove("active");
    //             activePanel.classList.remove("close");
    //             toActivePanel.classList.add("active");
    //         },
    //         { once: true }
    //     );
    // });


    return (
        <>
            <section className="section__container resume__container" id="resume" data-aos="fade-up">
                <h2 className="section__header">My Qualifications</h2>
                <p className="section__description">
                    Combined with a passion for continuous learning, my qualifications
                    extend beyond academia, encompassing hands-on projects and a commitment
                    to staying at the forefront of design trends.
                </p>
                <div className="resume__tabs">
                    <div className="resume__tablist">
                        <button className="btn  active" data-tab="1">Education</button>
                    </div>
                    <div className="resume__tabpanel">
                        <div className="panel__grid active" data-panel="1" id="education">
                            <div className="panel__card" data-aos="fade-up">
                                <span><i className="ri-graduation-cap-fill"></i></span>
                                <h4>Bachelor's Degree in Computer Science Engineering</h4>
                                <p className="section__description">Crafting Visual Narratives</p>
                                <p className="section__description">
                                    Doing Bachelor of Computer Science Engineering(pre-final year ) in GRT Institute of
                                    Engineering and Technology in Tiruttani,Tamilnadu.
                                </p>
                            </div>
                            <div className="panel__card" data-aos="fade-up">
                                <span><i className="ri-graduation-cap-fill"></i></span>
                                <h4>Completed Higher Education in Bio-Maths</h4>
                                <p className="section__description">Elevating Digital Interactions</p>
                                <p className="section__description">
                                    Completed my higher education in Bio-Maths Group(Tamilnadu Borad Education) in DRBCCC in
                                    Thiruvallur,Tamilnadu.

                                </p>
                            </div>
                            <div className="panel__card" data-aos="fade-up">
                                <span><i className="ri-graduation-cap-fill"></i></span>
                                <h4>Professional Certification in Fullstack Development</h4>
                                <p className="section__description">
                                    Bridging Design and Functionality
                                </p>
                                <p className="section__description">
                                    A Fullstack developement certification is a professional credential that demonstrates a
                                    developer's expertise in both front-end and back-end development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume
