import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, ChatRightQuote, ChatLeftText } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// Several components are imported from react-bootstrap and react-bootstrap-icons. 
// The animate.css library is also imported for animations, 
// and TrackVisibility from react-on-screen is used to track whether an element is visible in the viewport.

export const About = () => {

  return (
    <section className="about" id="about">
      <Container>
        {/* The About component is a functional component that returns a JSX structure. 
        The outermost element is a section with the class "about" and the id "about". Inside this section, 
        a Container component from Bootstrap is used to provide a responsive fixed width container. */}
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            {/* Inside the Container, a Row component is used to create a row for layout. 
            This row contains two Col components, each taking up half of the row on medium (md) 
            and extra large (xl) screens, and the full width on extra small (xs) screens. */}
            <TrackVisibility offset={100}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : "animate__animated animate__zoomOut"}>
                  {/* Each Col contains a TrackVisibility component. 
                  This component tracks whether its children are visible in the viewport, 
                  and provides this information to its children through the isVisible prop. 
                  The offset prop is set to 100, meaning that the isVisible prop will change to true 
                  when the element is within 100 pixels of the viewport.
                  Inside TrackVisibility, a function is used as a child. 
                  This function takes the isVisible prop as an argument, 
                  and returns a div that uses this prop to apply different classes.  */}
                  <p> Hello, this is <strong>Yichi Zhang</strong>, and I am currently pursuing a master's degree in computer science at the <abbr title='Australian National University'>ANU</abbr>. I am originally from China, where I spent the first 23 years of my life and earned my undergraduate degree. <br />
                    An interesting fact is that my undergraduate degree is unrelated to the <abbr title="Science, technology, engineering, and mathematics">STEM</abbr> field; in fact, I majored in Russian literature. This is also why I can speak Chinese, English, and Russian.<br />
                    Switching my academic focus to computer science has been one of the boldest and most correct decisions I have made. I thoroughly enjoy coding, and problem-solving always excites me. <br />
                    Apart from my studies, I have other interests, such as calligraphy, a traditional Chinese handwriting art that I have been practicing for over fifteen years. Since coming to Australia, I have also developed a love for sports. I now go to the gym four to five times a week, and at the same time, I have learned sports like frisbee and tennis.
                  </p>
                  <button ><ChatRightQuote size={45} className="about-icon" /><p><strong> About Me </strong></p></button>
                  {/* Each div contains a paragraph of text and a button. 
                  The text in the first column is a personal introduction, 
                  and the text in the second column is a mission statement. 
                  The buttons contain an icon from react-bootstrap-icons and a piece of text. 
                  The buttons does not have an onClick handler, 
                  so it does not do anything when clicked.      */}
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility offset={100}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : "animate__animated animate__zoomOut"}>
                  <p> For any job seeker, especially those seeking development roles, a personal portfolio website is an excellent way to showcase one's technical skills and experiences. Creating a personal website is not a highly challenging task, but it holds significant practical value. <br />
                    <strong>Yichi's Portfolio</strong> developed by myself giving a brief introduction about me and my work to any recruiter who is looking for software developer to join his team. <br />
                    It's hard for me to name this site over other portfolio sites because everyone's portfolio is unique. However, at the very least, this website adopts bold design and clear structure, presenting myself in what I believe is the best way.<br />
                    <strong>List of goals:</strong><br />
                    - 1. Clearly present me and my related work<br />
                    - 2. Can be used as an electronic resume for job hunting<br />
                    - 3. Try to make it impressive</p>
                  <button ><ChatLeftText size={45} className="about-icon" /><p><strong> Mission Statement </strong></p></button>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
