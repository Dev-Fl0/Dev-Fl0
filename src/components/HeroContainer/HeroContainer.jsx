import React from 'react';

// Component
import ScrollButton from '../Button/ScrollButton';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';

export default function HeroContainer() {


    return (
        <div className="hero-container">
            <Navbar />
            <h1 className="title faceDown">Bienvenue sur Dev-Fl0</h1>
            <ScrollButton />
            <Contact />
        </div>
    );
};
