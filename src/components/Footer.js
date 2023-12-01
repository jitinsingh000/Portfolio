import React, { useEffect, useState } from 'react';
import '../css/footer.css'
import github from '../images/logos/github.png'
import linkedin from '../images/logos/linkedin.png'
import insta from '../images/logos/insta.png'
import x from '../images/logos/x.png'
import whatsapp from '../images/logos/whatsapp.png'
import telegram from '../images/logos/telegram.png'

export default function Footer() {

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
        <section id="footer-section-comp" className={animatedSections.includes('footer-section-comp') ? 'animate-footer-comp' : ''}>
            <div id='footer'>
                <div className="footer-outer-div">
                    <div className='footer-left-div'>
                        <h3><a href="#home">Jitin Singh</a></h3>
                        <p className="">MERN Full Stack Web Developer</p>
                    </div>
                    <div className="footer-right-div">
                        <div className="row-footer-links">
                            <div className='footer-link-item text-center d-flex flex-column'><a href="https://github.com/jitinsingh000"><img src={github} alt='github'></img></a>
                                <a href="https://github.com/jitinsingh000">GitHub</a>
                            </div>
                            <div className='footer-link-item text-center d-flex flex-column'><a href="https://www.linkedin.com/in/jitin-singh-080290253/" ><img src={linkedin} style={{ filter: 'invert(100%)' }} alt='linkedin'></img></a>
                                <a href="https://www.linkedin.com/in/jitin-singh-080290253/">LinkedIn</a>
                            </div>
                            <div className='footer-link-item text-center d-flex flex-column'><a href="https://twitter.com/jitinsingh000/" ><img src={x} alt='twitter'></img></a>
                                <a href="https://twitter.com/jitinsingh000/">Twitter(X)</a>
                            </div>
                        </div>
                        <div className="row-footer-links">
                            <div className='footer-link-item text-center d-flex flex-column'><a href="https://www.instagram.com/jitin_singh_000/" ><img src={insta} alt='insta'></img></a>
                                <a href="https://www.instagram.com/jitin_singh_000">Instagram</a>
                            </div>
                            <div className='footer-link-item text-center d-flex flex-column'><a href="https://t.me/jitinsingh000" ><img src={telegram} style={{ filter: 'invert(100%)' }} alt='telegram'></img></a>
                                <a href="https://t.me/jitinsingh000">Telegram</a>
                            </div>
                            <div className='footer-link-item text-center d-flex flex-column'><a href="https://wa.me/+919548751573" ><img src={whatsapp} style={{ filter: 'invert(100%)' }} alt='whatsapp'></img></a>
                                <a href="https://wa.me/+919548751573">Whatsapp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
