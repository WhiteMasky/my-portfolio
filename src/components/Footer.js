import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIconLinkedIn from '../assets/img/nav-icon-linkedin.svg';
import navIconGithub from '../assets/img/nav-icon-github.svg';
import navIconDiscord from '../assets/img/nav-icon-discord.svg';
import navIconFacebook from '../assets/img/nav-icon-facebook.svg';
import { HandThumbsUpFill } from 'react-bootstrap-icons';

export const Footer = () => {
  const [liked, setLiked] = useState(false); 

  const handleLike = () => {
    setLiked(!liked); 
  };
  // A state variable liked is initialized with a default value of false using React's useState hook
  // The handleLike function is a handler for the click event of the "Like" button. 
  // When the "Like" button is clicked, this function toggles the value of liked between true and false.
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p className='click-like'>Click Like</p>
          <HandThumbsUpFill size={30} color={liked ? '#4169E1' : undefined} onClick={handleLike} className='hand-thumbs-up'/> 
          {/* The first section contains a paragraph with the text "Click Like" and a "Like" button represented by a HandThumbsUpFill icon. 
          The color of the icon changes to #4169E1 when liked is true (i.e., the button has been clicked), 
          and is undefined otherwise. The handleLike function is attached to the onClick event of the icon, so it gets called when the icon is clicked. */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIconLinkedIn} alt="" /></a>
              <a href="#"><img src={navIconGithub} alt="" /></a>
              <a href="#"><img src={navIconDiscord} alt="" /></a>
              <a href="#"><img src={navIconFacebook} alt="" /></a>
            </div>
            <p>Designed and Coded by Yichi Zhang</p>
            {/* The second section contains a div with the class social-icon, 
            which contains links to various social media platforms. 
            Each link is represented by an image.  */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

