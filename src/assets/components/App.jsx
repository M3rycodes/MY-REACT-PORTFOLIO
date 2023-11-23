import React from 'react';
import './App.css';
import './index.css';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
      {/* Other sections if needed */}
    </div>
  );
}

export default App;




