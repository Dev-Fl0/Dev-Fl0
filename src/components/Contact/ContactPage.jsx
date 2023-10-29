import React from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Link } from 'react-router-dom';

import emailIcone from '../../../src/assets/icons/email_logo1.png';
import linkedinIcone from '../../../src/assets/icons/linkedin_logo.png';
import twitterIcone from '../../../src/assets/icons/twitter_logo.png';
import phoneIcone from '../../../src/assets/icons/smartphone_logo.png';



export default function ContactPage() {

    return (
        <div className="accueil flex flex-col gap-1 justify-center items-center">
        <div className="accueil-navbar">
            <Navbar2 />  
        </div>
        <h1 className="title ">Contact</h1>
        <div className='navbar-icone- flex gap-6 '>
            <a className='icone navbar-contact' href="mailto:florian.wauthier74@gmail.com" target="_blank" rel="noreferrer">
                <img src={emailIcone} alt="logo" className='img-logo'/>
            </a>
            <Link className='icone navbar-contact' to="https://www.linkedin.com/in/florian-wauthier/" target="_blank">
                <img src={linkedinIcone} alt="logo" className='img-logo'/>
            </Link>
            <Link className='icone navbar-contact' to="https://twitter.com/Dev_Flo_ppeur">
                <img src={twitterIcone} alt="logo" className='img-logo'/>
            </Link>
            <a className='icone navbar-contact' href="mailto:florian.wauthier74@gmail.com" target="_blank" rel="noreferrer">
                <img src={phoneIcone} alt="logo" className='img-logo'/>
            </a>
        </div>
    </div>
    );
};
