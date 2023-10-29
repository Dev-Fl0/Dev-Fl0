import React from 'react';
import Navbar2 from '../Navbar/Navbar2';
import Contact2 from '../Contact/Contact2';



export default function Project() {

        const iframeSource = "https://immopros-app.com";



    return (
        <div className="accueil flex flex-col gap-1 justify-center items-center">
            <div className="accueil-navbar">
                <Navbar2 />  
            </div>
            <div> 
            <iframe src={iframeSource} height="300" width="300" title="Immo'Pros"/>   
            </div>
            <h1 className="title ">Projets</h1>
            <Contact2 />
        </div>
        
    );
};
