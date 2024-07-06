// import React, { useState } from 'react'
// import '../css/navbar.css'
// import logojs from '../images/logos/LogoJS.png'

// export default function Navbar() {

//     const [showNavItems, setShowNavItems] = useState(false);

//     const toggleNavItems = () => {
//         setShowNavItems(!showNavItems);
//     };

//     return (
//         <div id='navbar'>
//             <div className='nav-heading'>
//                 <a href="#home"><img className='logojs' src={logojs} alt="jslogo" /></a>
//                 <h1><a href="#home">Jitin Singh</a></h1>
//             </div>
//             <div className={`nav-items-div ${showNavItems ? 'active' : ''}`}>
//                 <div className="hamburger" onClick={toggleNavItems}>
//                     <button>
//                         <i className={showNavItems ? "ri-close-line" : "ri-menu-5-fill"}></i>
//                     </button>
//                 </div>
//                 <ul className={`nav-items ${showNavItems ? 'active' : ''}`}>
//                     <li><a href="#home" >Home</a></li>
//                     <li><a href="#skills" >Skills</a></li>
//                     <li><a href="#projects" >Projects</a></li>
//                     <li><a href="#education" >Education</a></li>
//                     <li><a href="#contact" >Contact</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }


import React from 'react';
import '../css/navbar.css'
import logojs from '../images/logos/LogoJS.png'

const Navbar = ({ showNavItems, toggleNavItems }) => {
    return (
        <div id='navbar'>
            <div className='nav-heading'>
                <a href="#home"><img className='logojs' src={logojs} alt="jslogo" /></a>
                <h1><a href="#home">Jitin Singh</a></h1>
            </div>
            <div className={`nav-items-div ${showNavItems ? 'active' : ''}`}>
                <div className="hamburger" onClick={toggleNavItems}>
                    <button>
                        <i className={showNavItems ? "ri-close-line" : "ri-menu-5-fill"}></i>
                    </button>
                </div>
                <ul className={`nav-items ${showNavItems ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;