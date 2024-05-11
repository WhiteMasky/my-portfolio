import { useState, useEffect } from "react"; 
import { Navbar, Nav, Container } from "react-bootstrap"; 
import { Map, Compass } from 'react-bootstrap-icons'; 
import navIconLinkedIn from '../assets/img/nav-icon-linkedin.svg'; 
import navIconGithub from '../assets/img/nav-icon-github.svg'; 
import navIconYoutube from '../assets/img/nav-icon-youtube.svg'; 
import navIconFacebook from '../assets/img/nav-icon-facebook.svg'; 
import { HashLink } from 'react-router-hash-link'; 
import { BrowserRouter as Router } from "react-router-dom"; 

export const NavBar = ({ isDarkMode, toggleMode }) => {
  const [activeLink, setActiveLink] = useState('home'); // Creating a state variable for the active link
  const [scrolled, setScrolled] = useState(false); // Creating a state variable to track if the page has been scrolled

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true); // If the page has been scrolled more than 80 pixels, set scrolled state to true
      } else {
        setScrolled(false); // Otherwise, set scrolled state to false
      }
    }

    window.addEventListener("scroll", onScroll); // Adding a scroll event listener to the window

    return () => window.removeEventListener("scroll", onScroll); // Removing the scroll event listener when the component is unmounted
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value); // Function to update the active link state
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}> 
      {/* Creating a responsive navigation bar component */}
        <Container>
          <Navbar.Brand href="./sitemap.html">
            <Compass size={50} className={`map-icon ${isDarkMode ? 'map-icon-dark' : 'map-icon-light'}`}/> 
            {/* Displaying a compass icon with dynamic styling based on dark mode */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> 
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link> 
              <Nav.Link href="#gallery" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>Gallery</Nav.Link> 
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> 
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yichizhang54"><img src={navIconLinkedIn} alt="" /></a> 
                <a href="https://github.com/WhiteMasky"><img src={navIconGithub} alt="" /></a> 
                <a href="https://www.youtube.com/channel/UC5jq2ipvNFnFPE2v_zbdZBw"><img src={navIconYoutube} alt="" /></a> 
                <a href="https://www.facebook.com/YichiZhang0504"><img src={navIconFacebook} alt="" /></a> 
              </div>
              <button className="vvd" onClick={toggleMode}>{isDarkMode ? 'Light' : 'Dark'}</button> 
              <a href="./feedback.html">
                <button className="vvd"><span>Feedback</span></button> 
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
