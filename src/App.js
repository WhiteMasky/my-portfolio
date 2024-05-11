import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from './components/About';
import { Gallery } from "./components/Gallery";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/**
 * The main component of the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  // State variables to control the visibility of the page and the dark mode
  const [showPage, setShowPage] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Event handler for the button click.
   * Sets the showPage state to true.
   */
  const handleClick = () => {
    setShowPage(true);
  };

  /**
   * Toggles the dark mode.
   * Sets the isDarkMode state to the opposite value.
   */
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      {/* Conditional rendering of the stylesheet based on the isDarkMode state */}
      <link rel="stylesheet" type="text/css" href={isDarkMode ? 'styles/dark.css' : 'styles/light.css'} />
      {!showPage && (
        <div className='enter_container'>
          <h1 className='enter_title'>Hi! Welcome to my world.👉</h1>
          <div className="enter_container">
            <button onClick={handleClick} className='enter_button'>EXPLORE</button>
          </div>
        </div>
      )}
      {showPage && (
        <div className="App">
          {/* Render the navigation bar component */}
          <NavBar isDarkMode={isDarkMode} toggleMode={toggleMode} />
          {/* Render the banner component */}
          <Banner isDarkMode={isDarkMode} toggleMode={toggleMode}/>
          {/* Render the about section */}
          <About />
          {/* Render the gallery section */}
          <Gallery />
          {/* Render the projects section */}
          <Projects />
          {/* Render the contact section */}
          <Contact />
          {/* Render the footer component */}
          <Footer isDarkMode={isDarkMode} toggleMode={toggleMode}/>
        </div>
      )}
    </div>
  );
}

export default App;