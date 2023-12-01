import React from 'react'
import '../css/projects.css'
import img from '../images/projects.png'
// import foodsite from '../images/foodsite.png'

export default function Projects() {
    return (
        <div id='projects'>
            <h1 className='pt-5 pb-2 text-decoration-underline text-center'><i className="fa-solid fa-list-check"></i> Projects <i className="fa-solid fa-list-check"></i></h1>
            <h5 className='pb-5 text-center'>My Works - project works I done using my skillset</h5>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img src={img} className="d-block" alt="..." /> */}
                        <img src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg" className="d-block" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <img src={img} className="d-block mb-3" alt="..." />
                            <div className="project-content mt-3">
                                <h6>GoFood</h6>
                                <h4 className=''>Food Ordering Website</h4>
                                <p className=''>A website created using MERN Stack.</p>
                                <div className="project-btns d-flex justify-content-center">
                                    <a href="https://github.com/jitinsingh000/GoFood"><button type="button" className='btn btn-dark mx-2 px-3 py-2' style={{ backgroundColor: 'black' }}>Source Code Soon...</button></a>
                                    {/* <button type="button" className='btn btn-dark mx-2 px-3 py-2' style={{ backgroundColor: 'black' }}>Live</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={img} className="d-block" alt="..." /> */}
                        <img src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg" className="d-block" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <img src={img} className="d-block mb-3" alt="..." />
                            <div className="project-content mt-3">
                                <h6>Netflix Clone</h6>
                                <h4 className=''>OTT Platform Website</h4>
                                <p className=''>Cloned Netflix using MERN Stack.</p>
                                <div className="project-btns d-flex justify-content-center">
                                    <a href="https://github.com/jitinsingh000/Netflix-Clone"><button type="button" className='btn btn-dark mx-2 px-3 py-2' style={{ backgroundColor: 'black' }}>Source Code Soon...</button></a>
                                    {/* <button type="button" className='btn btn-dark mx-2 px-3 py-2' style={{ backgroundColor: 'black' }}>Live</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={img} className="d-block" alt="..." /> */}
                        <img src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg" className="d-block" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <img src={img} className="d-block mb-3" alt="..." />
                            <div className="project-content mt-3">
                                <h6>iNoteBook</h6>
                                <h4 className=''>Note Taking Website</h4>
                                <p className=''>A note taking website with login-signup system.</p>
                                <div className="project-btns d-flex justify-content-center">
                                    <a href="https://github.com/jitinsingh000/iNotebook"><button type="button" className='btn btn-dark mx-2 px-3 py-2' style={{ backgroundColor: 'black' }}>Source Code Soon...</button></a>
                                    {/* <button type="button" className='btn btn-dark mx-2 px-3 py-2' style={{ backgroundColor: 'black' }}>Live</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
