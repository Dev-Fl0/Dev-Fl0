import React from 'react';


import loginPage from '../../../src/assets/images/immo-pro-login.png';

export default function ImmoPros() {


    return (
            <div className='flex flex-col w-9/12 gap-8 max-w-lg'>    
                <a href='https://immopros-app.com' target="_blank" rel="noreferrer">
                <h1 className='btn bg-red-600 hover:bg-red-700 sm:items-start text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Immo&apos;Pros</h1>
                </a>
                <div className='project-div-images'>
                    <img src={loginPage} alt="loginPage" className='img-logo-project '/>
                </div>
            </div>      
    );
};
