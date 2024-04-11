// import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
// import navIconLinkedIn from '../assets/img/nav-icon-linkedin.svg';
// import navIconGithub from '../assets/img/nav-icon-github.svg';
// import navIconDiscord from '../assets/img/nav-icon-discord.svg';
// import navIconFacebook from '../assets/img/nav-icon-facebook.svg';
// import { HandThumbsUp } from "react-bootstrap-icons";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} sm={6}>
//             <p>Like Me</p>
//             <HandThumbsUp size={40} />
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
//               <a href="#"><img src={navIconLinkedIn} alt="" /></a>
//               <a href="#"><img src={navIconGithub} alt="" /></a>
//               <a href="#"><img src={navIconDiscord} alt="" /></a>
//               <a href="#"><img src={navIconFacebook} alt="" /></a>
//             </div>
//             <p>Designed and Coded by Yichi Zhang</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }


import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIconLinkedIn from '../assets/img/nav-icon-linkedin.svg';
import navIconGithub from '../assets/img/nav-icon-github.svg';
import navIconDiscord from '../assets/img/nav-icon-discord.svg';
import navIconFacebook from '../assets/img/nav-icon-facebook.svg';
import { HandThumbsUpFill } from 'react-bootstrap-icons';
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';

export const Footer = () => {
  const [liked, setLiked] = useState(false); 

  const handleLike = () => {
    setLiked(!liked); 
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <HandThumbsUpFill size={40} color={liked ? 'deeppink' : undefined} onClick={handleLike} /> 
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIconLinkedIn} alt="" /></a>
              <a href="#"><img src={navIconGithub} alt="" /></a>
              <a href="#"><img src={navIconDiscord} alt="" /></a>
              <a href="#"><img src={navIconFacebook} alt="" /></a>
            </div>
            <p>Designed and Coded by Yichi Zhang</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

