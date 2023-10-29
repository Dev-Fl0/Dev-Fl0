import React from 'react';

// React Router
import { Link, useNavigate } from 'react-router-dom';



export default function Navbar() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
        // Actualisez la page
        window.location.reload();
    };


    return (
        <header className="navbar faceDown">
            <Link to="/" onClick={handleLogoClick}>
            <img src="/logo.svg" alt="logo" className='img-logo'/>
            </Link>
        <ul className='flex'>
            <li className="link">
            <Link to="/accueil">Accueil</Link>
            </li>
            <li className="link">
            <Link to="/projects">Projets</Link>
            </li>
            <li className="link">
            <Link to="/contact">contact</Link>
            </li>
        </ul>
        </header>
    );
};
