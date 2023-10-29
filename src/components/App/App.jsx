// For Strict Mode
import React from 'react';
// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import '../../styles/App.css';
import '../../styles/presentation.css';
import '../../styles/accueil.css';

// Components
import InitApp from './InitApp';
import Project from '../Project/Project';
import Accueil from '../Accueil/Accueil';
import Contact from '../Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<InitApp />} />
    <Route path="/accueil" element={<Accueil />} />
    <Route path="/projects" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
