import React from 'react';

// Audio
// import Tudum from '../../audio/tudum.mp3';

export default function EnterButton() {
  const handleClick = () => {
    const logoElement = document.querySelector('.logo-container');
    const btnElement = document.querySelector('.welcome-container');

    setTimeout(() => {
      document.body.classList.add('done');
    }, 1600);

    setTimeout(() => {
      logoElement.classList.add('logo-done');
      btnElement.classList.add('welcome-done');
    }, 3500);

    document.body.classList.add('run');
  };

  return (
    <div className="welcome-container">
      <button
        type="button"
        className="btn bg-red-600 hover:bg-red-700 sm:items-start text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleClick}
      >
        Entrer
      </button>
    </div>
  );
}
