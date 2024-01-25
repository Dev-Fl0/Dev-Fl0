import React from 'react';

import projectImage from '../../assets/images/gitHubSearch.png';

export default function GitHubSearch() {
  return (
    <div className="flex flex-col w-9/12 gap-8 max-w-lg">
      <a
        href="https://dev-flo-github-recherche.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="btn bg-red-600 hover:bg-red-700 sm:items-start text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          GitHub recherches
        </h1>
      </a>
      <div className="project-div-images">
        <img src={projectImage} alt="projet GitHub recherche" className="img-logo-project " />
      </div>
    </div>
  );
}
