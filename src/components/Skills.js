import React, { useEffect, useState } from 'react';
import '../css/skills.css'
import html from '../images/logos/html.png'
import css from '../images/logos/css.jpg'
import js from '../images/logos/js.png'
import bootstrap from '../images/logos/bootstrap.png'
import reactLogo from '../images/logos/react-white.png'
import redux from '../images/logos/redux.png'
import mongo from '../images/logos/mongo.png'
import node from '../images/logos/nodejs.jpeg'
import express from '../images/logos/express.png'
import rest from '../images/logos/restfulapi.png'
// import dsa from '../images/logos/dsa.png'
import dsa from '../images/logos/dsa_1.png'
// import vscode from '../images/logos/vscode.png'
// import vscode from '../images/logos/vsc.png'
import ccplusplus from '../images/logos/cc++.jpeg'
import gitNGithub from '../images/logos/Git&GitHub.png'
// import chromeDevTools from '../images/logos/ChromeDevTools.png'
import chromeDevTools from '../images/logos/ChromeDevToolsBlue.png'



export default function Skills() {

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
        <div id='skills'>
            <h1 className='pt-5 pb-2 text-decoration-underline text-center'><i className="fa-solid fa-ribbon"></i> Skills <i className="fa-solid fa-ribbon"></i></h1>
            <h5 className='pb-5 text-center'>My skillset - tools & technologies I work with</h5>
            <div className='skills-outer card-container'>
                <div className='skills-inner card left-card'>
                    <section id="skills-section-comp-card-left" className={animatedSections.includes('skills-section-comp-card-left') ? 'animate-skills-card-left' : ''}>
                        <h3 className='text-center'>Front End</h3>
                        <hr />
                        <div className='skills-container'>
                            <div className='skills-row d-flex justify-content-around my-3'>
                                <div className='d-flex flex-column text-center'>
                                    <img src={html} alt="" className='mx-auto' />
                                    <p>HTML</p>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <img src={css} alt="" className='mx-auto' />
                                    <p>CSS</p>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <img src={js} alt="" className='mx-auto' />
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div className='skills-row d-flex justify-content-around my-3'>
                                <div className='d-flex flex-column text-center'>
                                    <img src={bootstrap} alt="" className='mx-auto' />
                                    <p>BootStrap CSS</p>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <img src={reactLogo} alt="" className='mx-auto' />
                                    <p>React JS</p>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <img src={redux} alt="" className='mx-auto' />
                                    <p>Redux Toolkit</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='skills-inner card middle-card' >
                    <section id="skills-section-comp-card-middle" className={animatedSections.includes('skills-section-comp-card-middle') ? 'animate-skills-card-middle' : ''}>
                        <h3 className='text-center'>Back End</h3>
                        <hr />
                        <div className='skills-container'>
                            <div className='skills-row d-flex justify-content-around my-3'>
                                <div className='d-flex flex-column text-center'>
                                    <img src={mongo} alt="" className='mx-auto' />
                                    <p>Mongo DB</p>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <img src={node} alt="" className='mx-auto' />
                                    <p>Node JS</p>
                                </div>
                            </div>
                            <div className='skills-row d-flex justify-content-around my-3'>
                                <div className='d-flex flex-column text-center'>
                                    <img src={express} alt="" className='mx-auto' />
                                    <p>Express JS</p>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <img src={rest} alt="" className='mx-auto' />
                                    <p>RESTful API</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='skills-inner card right-card'>
                    <section id="skills-section-comp-card-right" className={animatedSections.includes('skills-section-comp-card-right') ? 'animate-skills-card-right' : ''}>
                        <h3 className='text-center'>Other Skills</h3>
                        <hr />
                        <div className='skills-container'>
                            <div className='skills-row d-flex justify-content-around my-3'>
                                <div className='d-flex flex-column  text-center'>
                                    <img src={ccplusplus} alt="" className='mx-auto' />
                                    <p>C/C++ Programming</p>
                                </div>
                                <div className='d-flex flex-column  text-center'>
                                    <img src={dsa} alt="" className='mx-auto' />
                                    <p>DS & Algo(s)</p>
                                </div>
                            </div>
                            <div className='skills-row d-flex justify-content-around my-3'>
                                <div className='d-flex flex-column  text-center'>
                                    <img src={chromeDevTools} alt="" className='mx-auto' />
                                    <p>Chrome DevTools</p>
                                </div>
                                <div className='d-flex flex-column  text-center'>
                                    <img src={gitNGithub} alt="" className='mx-auto' /* style={{border:'5px solid #161716',borderRadius:'50%'}} *//>
                                    <p>Git & GitHub</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
