import React from 'react';
import Contact2 from './Contact2';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';



export default function ContactPage() {

    return (
        <div className="accueil flex flex-col gap-1 justify-center items-center">
        <div className="accueil-navbar">
            <Navbar2 />  
        </div>
        <h1 className="title ">Contact</h1>
        <div className='navbar-icone- flex gap-6 '>
            <a className='icone navbar-contact' href="mailto:florian.wauthier74@gmail.com" target="_blank" rel="noreferrer">
                <img src="../src/assets/icons/email_logo1.png" alt="logo" className='img-logo'/>
            </a>
            <Link className='icone navbar-contact' to="https://www.linkedin.com/in/florian-wauthier/" target="_blank">
                <img src="../src/assets/icons/linkedin_logo.png" alt="logo" className='img-logo'/>
            </Link>
            <Link className='icone navbar-contact' to="https://twitter.com/Dev_Flo_ppeur">
                <img src="../src/assets/icons/twitter_logo.png" alt="logo" className='img-logo'/>
            </Link>
            <a className='icone navbar-contact' href="mailto:florian.wauthier74@gmail.com" target="_blank" rel="noreferrer">
                <img src="../src/assets/icons/phone-call_logo.png" alt="logo" className='img-logo'/>
            </a>
        </div>
    </div>
    );
};
