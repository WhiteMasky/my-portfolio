import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from './components/About';
import { Gallery } from "./components/Gallery";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [showPage, setShowPage] = useState(false);

  const handleClick = () => {
    setShowPage(true);
  };

  return (
    <div>
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
          <NavBar />
          <Banner />
          <About />
          <Gallery />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
