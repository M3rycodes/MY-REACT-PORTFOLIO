import React from 'react';
import './index.css';
import Header from './assets/components/Header';
import About from './assets/components/About Me';
import Navigation from './assets/components/Navigation';
import Portfolio from './assets/components/Portfolio';
import Contact from './assets/components/Contact';
import Resume from './assets/components/Resume';
import Footer from './assets/components/Footer';

import{BrowserRouter ,Router , Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/About Me" element={<About Me />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Resume" element={<Resume />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;




