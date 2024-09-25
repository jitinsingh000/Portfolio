import React, { useEffect, useState } from 'react'
import '../css/contact.css';

export default function Contact() {

    // JS to handle contact form

    // const [data, setData] = useState({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: ""
    // });

    // const onChange = (event) => {
    //     // console.log(event.target);
    //     setData({ ...data, [event.target.name]: event.target.value })
    // }

    // const onSubmitHandler = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const message = {
    //             name: data.name,
    //             email: data.email,
    //             subject: data.subject,
    //             message: data.message
    //         }
    //         const response = await fetch(`http://127.0.0.1:5000/message`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(message),
    //         });
    //         const json = await response.json();

    //         if (!json.success) {
    //             alert("Failed - Message Not Sent");
    //         } else {
    //             alert("Message Sent Successfully");
    //             setData({
    //                 name: "",
    //                 email: "",
    //                 subject: "",
    //                 message: ""
    //             })
    //         }
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }

    // }

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
        <div id='contact'>
            <h1 className='pt-5 pb-2 text-decoration-underline text-center'><i className="fa-solid fa-handshake"></i> Contact <i className="fa-solid fa-handshake"></i></h1>
            <h5 className='pb-5 text-center'>Any Question ?? - Get in touch</h5>
            {/* <div className="text-center w-responsive mx-auto mb-5">
                <p className='fs-5'>Do you have any questions? Please do not hesitate to contact me directly.</p>
                <p className='fs-5'>I will get back to you within a matter of hours to help you.</p>
            </div> */}
            <div className="">
                <div className="row card-container">
                    {/* <div className="card left-card col-md-9 mb-md-0 mb-5 mt-4">
                        <section id="contact-section-comp-card-left" className={animatedSections.includes('contact-section-comp-card-left') ? 'animate-contact-card-left' : ''}>
                            <form id='contact-form' onSubmit={onSubmitHandler}>
                                <div className="row">
                                    <div className="contact-name-input col-md-6">
                                        <div className=" md-form mb-0">
                                            <input type="text" id="name" name="name" className="form-control" placeholder='Your Name' required onChange={onChange} value={data.name} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="email" name="email" className="form-control" placeholder='Your Email' required onChange={onChange} value={data.email} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="subject" name="subject" className="form-control" placeholder='Inquiry Concern' required onChange={onChange} value={data.subject} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" placeholder='Your Message' required onChange={onChange} value={data.message} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-md-left d-flex mt-4">
                                    <button type="submit" className="btn contact-btn fs-5 text-white" style={{ backgroundColor: 'black' }}>Send<i className="ri-arrow-right-up-line"></i></button>
                                </div>
                            </form>
                            <div className="status" />
                        </section>
                    </div> */}
                    <div className="card right-card col-md-3 text-center">
                        <section id="contact-section-comp-card-right" className={animatedSections.includes('contact-section-comp-card-right') ? 'animate-contact-card-right' : ''}>
                            <ul className="contact-ul list-unstyled mb-0">
                                <li>
                                    <i className="fas fa-envelope mt-4 fa-2x" />
                                    <p>jitinsingh000@gmail.com</p>
                                </li>
                                <li>
                                    <i className="fas fa-phone mt-4 fa-2x" />
                                    <p>+91 95487 51573</p>
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt mt-4 fa-2x" />
                                    <p>Moradabad, India</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div >
    )
}
