import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-bob.png";
import projImg2 from "../assets/img/project-bob.png";
import projImg3 from "../assets/img/project-bob.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Marrakech",
      description: "My first attempt at a game using Java",
      imgUrl: projImg1,
      linkUrl: "https://github.com/WhiteMasky/Marrakech",
    },
    {
      title: "Bob's Adventure",
      description: "A simple web-based galgame",
      imgUrl: projImg2,
      linkUrl: "https://github.com/WhiteMasky/Bob-s-Adventure",
    },
    {
      title: "My Portfolio",
      description: "My portfolio built with React.js and Bootstrap",
      imgUrl: projImg3,
      linkUrl: "https://github.com/WhiteMasky/my-portfolio",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility offset={50}>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": "animate__animated animate__zoomOut"}>
                <h2>Projects</h2>
                <p>Over the years, I have been involved in several projects and gained valuable experience through work, earning honors for my efforts along the way. <br />Here's a glimpse into my journey.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/* Inside this div, there's a Tab.Container component from react-bootstrap that holds a set of tabs. Each tab is represented by a Nav.Link inside a Nav.Item. 
                The Nav.Link components have eventKey props that correspond to the eventKey props of the Tab.Pane components. 
                This means that when a Nav.Link is clicked, the Tab.Pane with the matching eventKey is displayed. */}
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Honors</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "animate__animated animate__zoomOut"}>
                {/* The first Tab.Pane contains a Row component that maps over the projects array and returns a ProjectCard component for each project. 
                The ProjectCard component receives a key prop, which helps React identify which items have changed, are added, or are removed, 
                and a spread project object, which passes the properties of the current project as props to the ProjectCard component. */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Wait to be filled.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Wait to be filled.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
