import React from 'react';
import { Link } from 'react-router-dom';



export default function Contact2() {

    return (
        <div className='navbar-icone flex gap-6 '>
            <a className='icone' href="mailto:florian.wauthier74@gmail.com" target="_blank" rel="noreferrer">
                <img src="../src/assets/icons/email_logo1.png" alt="logo" className='img-logo'/>
            </a>
            <Link className='icone' to="https://www.linkedin.com/in/florian-wauthier/" target="_blank">
                <img src="../src/assets/icons/linkedin_logo.png" alt="logo" className='img-logo'/>
            </Link>
            <Link className='icone' to="https://twitter.com/Dev_Flo_ppeur">
                <img src="../src/assets/icons/twitter_logo.png" alt="logo" className='img-logo'/>
            </Link>
            <a className='icone' href="mailto:florian.wauthier74@gmail.com" target="_blank" rel="noreferrer">
                <img src="../src/assets/icons/phone-call_logo.png" alt="logo" className='img-logo'/>
            </a>
        </div>
    );
};
