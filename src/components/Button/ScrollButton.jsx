import React from 'react';

// import Presentation from '../Presentation/Presentation';

export default function ScrollButton() {
  // const [showPresentation, setShowPresentation] = useState(false);

  const handleClick = () => {
    // setShowPresentation(!showPresentation);
  };

  return (
    <>
      <button
        type="button"
        className="btn faceDown bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleClick}
      >
        Scroll
      </button>
      {/* {showPresentation && <div><Presentation /></div>}   */}
    </>
  );
}
