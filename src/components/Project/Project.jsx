import React from 'react';
import Navbar2 from '../Navbar/Navbar2';
import Contact2 from '../Contact/Contact2';
import ImmoPros from './ImmoPros';




export default function Project() {


    return (
        <div className="accueil flex flex-col gap-1 justify-center items-center">
            <div className="accueil-navbar">
                <Navbar2 />  
            </div>
            <h1 className="title title-page-project">Projets</h1>
            <div className='project-div flex gap-6 justify-between'>    
               <ImmoPros />
            </div>
            <Contact2 />
        </div>
        
    );
};
