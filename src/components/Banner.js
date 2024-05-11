import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/coding-girl.svg";
import headerImgDark from "../assets/img/coding-girl-brown.svg"
import { PersonCircle, ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ isDarkMode, toggleMode }) => {
  console.log('isDarkMode:', isDarkMode);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Developer", "Student" ];
  const period = 2000;
  

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])
  // The useEffect hook is used to create a side effect that runs after every render when the text state variable changes. 
  // This effect sets up an interval timer that calls the tick function every delta milliseconds. 
  // The tick function is responsible for updating the text animation. It calculates the current word to display, 
  // whether it's adding or removing characters, and updates the state variables accordingly.
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  // The useState hook is used to create several state variables: 
  // loopNum, isDeleting, text, delta, and index. 
  // These are used to control the text animation that cycles between the words "Developer" and "Student". 
  // The initial state of delta is set to a random value between 200 and 300 milliseconds, 
  // which determines the speed of the text animation.

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility offset={50}>
            {/* The return statement of the Banner component describes the JSX to render. 
            It uses Container, Row, and Col components from react-bootstrap to create a responsive layout. 
            The TrackVisibility component from react-on-screen is used to apply different CSS classes 
            based on whether the component is currently visible in the viewport, creating an animation effect. */}
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounceInDown" : "animate__animated animate__flipOutX"}>
                <span className="tagline">你好! Hello! Привет!</span>
                <h1>{`I'm Yichi, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Developer", "Student" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm currently pursuing a Master of Computing at <abbr title='Australian National University'>ANU</abbr> with a passion for becoming a full-stack engineer. Eager to leverage my education and skills to contribute to innovative software solutions, I thrive on exploring new technologies and tackling complex challenges.</p>
                  <button onClick={() => console.log('connect')}>Know more about me <ArrowDownCircle size={45} /> Scroll down </button>
              </div>}
              {/* The banner includes a greeting in multiple languages, an introduction that changes 
              between "I'm Yichi, a Developer" and "I'm Yichi, a Student", a brief bio, 
              and a button that logs 'connect' to the console when clicked. 
              The text state variable is used to display the animated text within the h1 tag. 
              The TrackVisibility component is also used to animate an image based on its visibility in the viewport. */}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility offset={50}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__swing" : "animate__animated animate__flipOutX"}>
                  <img onClick={toggleMode} src={isDarkMode ? headerImgDark : headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
