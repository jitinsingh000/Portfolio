import React, { useEffect, useState } from 'react';
import '../css/education.css'

export default function Education() {

    // animation js
    const [animatedSections, setAnimatedSections] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setAnimatedSections((prevSections) => [...prevSections, entry.target.id]);
                    observer.unobserve(entry.target);
                }
            });
        });

        const sections = document.querySelectorAll('section');

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id='education'>
            <h1 className='pt-5 pb-2 text-decoration-underline text-center'><i className="fa-solid fa-graduation-cap"></i> Education <i className="fa-solid fa-graduation-cap"></i></h1>
            <h5 className='pb-5 text-center'>Academics - My Educational Qualifications</h5>
            <div className='education-outer card-container'>
                <div className="education-inner card left-card">
                    <section id="education-section-comp-card-left" className={animatedSections.includes('education-section-comp-card-left') ? 'animate-education-card-left' : ''}>
                        <h2 className='pb-2 text-center'>GRADUATION</h2>
                        <hr />
                        <p><b>Course : </b>B.Tech - CSE</p>
                        <p><b>Institution :</b> IFTM University Moradabad</p>
                        <p><b>Grade :</b> Still Persuing</p>
                        <p><b>Session :</b> 2021 - 25</p>
                    </section>
                </div>

                <div className="education-inner card middle-card">
                    <section id="education-section-comp-card-middle" className={animatedSections.includes('education-section-comp-card-middle') ? 'animate-education-card-middle' : ''}>
                        <h2 className='pb-2 text-center'>INTERMEDIATE</h2>
                        <hr />
                        <p><b>Board :</b> Uttarakhand Board</p>
                        <p><b>Institution :</b> DIC Gadarpur US Nagar</p>
                        <p><b>Grade :</b> 1st division with 89.8%</p>
                        <p><b>Session :</b> 2020 - 21</p>
                    </section>
                </div>
                <div className="education-inner card right-card">
                    <section id="education-section-comp-card-right" className={animatedSections.includes('education-section-comp-card-right') ? 'animate-education-card-right' : ''}>
                        <h2 className='pb-2 text-center'>HIGHSCHOOL</h2>
                        <hr />
                        <p><b>Board :</b> Uttarakhand Board</p>
                        <p><b>Institution :</b> DIC Gadarpur US Nagar</p>
                        <p><b>Grade :</b> 1st division with 93.4%</p>
                        <p><b>Session :</b> 2018 - 19</p>
                    </section>
                </div>
            </div>
        </div >
    )
}
