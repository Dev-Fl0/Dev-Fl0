import React from 'react';
import Navbar2 from '../Navbar/Navbar2';



export default function Project() {

    return (
        <div className="accueil flex flex-col gap-1 justify-center items-center">
            <div className="accueil-navbar">
                <Navbar2 />  
            </div>
            <h1 className="title ">Projets</h1>
        </div>
        
    );
};
