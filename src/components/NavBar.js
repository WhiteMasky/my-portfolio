import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Map, Compass } from 'react-bootstrap-icons';
import navIconLinkedIn from '../assets/img/nav-icon-linkedin.svg';
import navIconGithub from '../assets/img/nav-icon-github.svg';
import navIconYoutube from '../assets/img/nav-icon-youtube.svg';
import navIconFacebook from '../assets/img/nav-icon-facebook.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  // The useEffect hook is used to add a scroll event listener to the window when the component mounts. 
  // The callback function for this event listener checks if the vertical scroll position (window.scrollY) is greater than 80. 
  // If it is, setScrolled is called with true, otherwise it's called with false. This could be used, for example, 
  // to apply different styles to the navigation bar depending on whether the user has scrolled down the page or not. 
  // The return function of the useEffect hook removes the event listener when the component unmounts.
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  // The onUpdateActiveLink function is a helper function that updates the activeLink state with a new value. 
  // This function is used in the onClick handlers of the Nav.Link components to update the activeLink state when a link is clicked.

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="./sitemap.html">
            <Compass size={50} className="map-icon"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            {/* The return statement of the component renders a Router component that wraps a Navbar component. 
            The Navbar component has several child components, including a Navbar.Brand that contains a Compass component, 
            a Navbar.Toggle for collapsing and expanding the navigation links on smaller screens, and a Navbar.Collapse 
            that contains the navigation links themselves. */}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#gallery" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>Gallery</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              {/* The Navbar.Collapse contains a Nav component with several Nav.Link components. 
              Each Nav.Link has an href prop that points to a section of the page, 
              a className prop that applies different CSS classes depending on whether the link is the active link or not, 
              and an onClick handler that calls onUpdateActiveLink with the corresponding section name when the link is clicked. */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yichizhang54"><img src={navIconLinkedIn} alt="" /></a>
                <a href="https://github.com/WhiteMasky"><img src={navIconGithub} alt="" /></a>
                <a href="https://www.youtube.com/channel/UC5jq2ipvNFnFPE2v_zbdZBw"><img src={navIconYoutube} alt="" /></a>
                <a href="https://www.facebook.com/YichiZhang0504"><img src={navIconFacebook} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'> */}
                <a href="./feedback.html">
                <button className="vvd"><span>Feedback Wanted</span></button>
                {/* The Navbar.Collapse also contains a span with some social media icons 
                and a HashLink component that points to the 'connect' section of the page.  */}

                {/* I changed the hash link here for the feedback form, 
                and since feedback form is another static webpage, 
                so I just use basic operation to acchieve the link.*/}
                
              </a>
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
