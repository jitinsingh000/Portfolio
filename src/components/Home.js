import React, { useEffect, useState } from 'react';
import '../css/home.css';
// import jitinImg from '../images/jitin-Copy.png';
import jitinImg from '../images/jitin.jpg';
// import resume from '../resume.pdf';

export default function Home() {


    // typer cursor js

    const phrases = ["Freelancer", "FrontEnd Developer", "BackEnd Developer", "FullStack Developer"];
    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

    useEffect(() => {
        let sleepTime = 100;
        let curPhraseIndex = 0;

        const writeLoop = async () => {
            while (true) {
                const curWord = phrases[curPhraseIndex];

                for (let i = 0; i <= curWord.length; i++) {
                    setCurrentPhrase(curWord.substring(0, i));
                    await sleep(sleepTime);
                }

                await sleep(sleepTime * 10);

                for (let i = curWord.length; i >= 0; i--) {
                    setCurrentPhrase(curWord.substring(0, i));
                    await sleep(sleepTime);
                }

                await sleep(sleepTime * 5);

                curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
            }
        };

        const sleep = (ms) => {
            return new Promise((resolve) => setTimeout(resolve, ms));
        };

        writeLoop();
    }, []);



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
        <div id='home' className='card-container'>
            <div className='home-left card left-card'>
                <section id="home-section-comp-card-left" className={animatedSections.includes('home-section-comp-card-left') ? 'animate-home-card-left' : ''}>
                    <h1>Hi 👋, I'm Jitin Singh</h1>
                    {/* <h3 className='role-heading'>Full Stack Web Developer (MERN)</h3> */}
                    <h1 className='role-heading'>
                        A <span id="typewriter">{currentPhrase}</span><span id="cursor">|</span>
                    </h1>
                    <p className='fs-5'>
                        I am a <b>fresher</b> who is searching for an <b>internship</b> for the role of <b>MERN Full Stack Web Developer</b> in a reputed company or start-up where I can apply my skills as well as improve them and can gain knowledge and experience in this field.
                    </p>
                    <div className='resume-btns d-flex'>
                        <a style={{ backgroundColor: 'black' }} href="https://drive.google.com/file/d/17u57xdOqcS6yx5vfXDdP4DU2edjcMuJw/view?usp=sharing" className='btn px-3 py-2 text-white'>Resume</a>
                        {/* <a style={{ backgroundColor: 'black' }} href="https://drive.google.com/file/d/18Jc-psNRS5sioo3t6RrFbS3LcXrnQvxG/view?usp=sharing" className='btn px-3 py-2 text-white'>Resume</a> */}
                        {/* <a style={{ backgroundColor: 'black' }} href={resume} className='btn p-3 ms-3 text-white'>Download Resume</a> */}
                    </div>
                </section>
            </div>
            <div className='home-right card right-card'>
                <section id="home-section-comp-card-right" className={animatedSections.includes('home-section-comp-card-right') ? 'animate-home-card-right' : ''}>
                    {/* <div className='roles'>
                    <h1>
                    Services <br />
                    I do <span id="typewriter">{currentPhrase}</span><span id="cursor">|</span>
                    </h1>
                </div> */}
                    <img className='drop-shadow' src={jitinImg} alt="jitinsingh" />
                </section>
            </div>
        </div >
    );
}
