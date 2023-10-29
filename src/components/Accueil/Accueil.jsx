import React from 'react';

// Component
import ScrollButton from '../Button/ScrollButton';
import Navbar2 from '../Navbar/Navbar2';

export default function Accueil() {


    return (
        <div className="accueil flex flex-col gap-1 justify-center items-center">
            <div className="accueil-navbar">
                <Navbar2 />  
            </div>
            <h1 className="title ">Bienvenue sur Dev-Fl0</h1>
            <ScrollButton />
        </div>

    );
};
