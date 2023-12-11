import React from 'react';
import Skills from '../src/components/Skills';
import '../src/index.css';
import Header from '../src/components/Header';
import About from './pages/About Me';
import Navbar from '../src/components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from '../src/components/Footer';

import{BrowserRouter ,Router , Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/About Me" element={<About Me />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Resume" element={<Resume />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;




