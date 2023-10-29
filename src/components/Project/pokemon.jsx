import React from 'react';


import pokedexPage from '../../../src/assets/images/pokedex.png';

export default function Pokemon() {


    return (
            <div className='flex flex-col w-9/12 gap-8 max-w-lg'>    
                <a href='https://support.google.com/webmasters/answer/2445990?hl=fr' target="_blank" rel="noreferrer">
                <h1 className='btn bg-red-600 hover:bg-red-700 sm:items-start text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Pokedex</h1>
                </a>
                <div className='project-div-images'>
                    <img src={pokedexPage} alt="loginPage" className='img-logo-project'/>
                </div>
            </div>      
    );
};
