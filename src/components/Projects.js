import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-marrakech.png";
import projImg2 from "../assets/img/project-bob.png";
import projImg3 from "../assets/img/project-portfolio.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Marrakech",
      description: "My first attempt at a game using Java",
      imgUrl: projImg1,
      linkUrl: "https://github.com/WhiteMasky/Marrakech",
      alt: "Marrakech game screenshot"
    },
    {
      title: "Bob's Adventure",
      description: "A simple web-based galgame",
      imgUrl: projImg2,
      linkUrl: "https://github.com/WhiteMasky/Bob-s-Adventure",
      alt: "Bob's Adventure game screenshot"
    },
    {
      title: "My Portfolio",
      description: "My portfolio built with React.js and Bootstrap",
      imgUrl: projImg3,
      linkUrl: "https://github.com/WhiteMasky/my-portfolio",
      alt: "Portfolio screenshot"
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
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" role="tablist">
                    <Nav.Item>
                      <Nav.Link eventKey="first" aria-label="Projects on the Github" role="tab">Projects (Source code on Github)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" aria-label="Work Experience" role="tab">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" aria-label="Honors and Awards" role="tab">Honors and Awards</Nav.Link>
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
                    <ul>
                        <li>
                          <h3>Software Developer Intern</h3>
                          <p>XYZ Company | June 2024 - August 2023</p>
                          <ul>
                            <li>Developed and maintained web applications using React.js and Node.js</li>
                            <li>Collaborated with cross-functional teams to identify and resolve bugs</li>
                            <li>Implemented responsive design and ensured cross-browser compatibility</li>
                          </ul>
                        </li>
                        <li>
                          <h3>Research Assistant</h3>
                          <p>Australian National University | September 2023 - May 2023</p>
                          <ul>
                            <li>Conducted research on machine learning algorithms and their applications</li>
                            <li>Assisted in data collection, preprocessing, and analysis</li>
                            <li>Contributed to research papers and presentations</li>
                          </ul>
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <ul>
                        <li>
                          <h3>First rank prize winner</h3>
                          <p>Jane Street <abbr title="Quantitative Trading Camp">QTC</abbr> Hackathon | March 2024</p>
                          <ul>
                            <li>Developed a web application that won first place in the hackathon</li>
                            <li>Collaborated with a team of developers to create an innovative solution</li>
                          </ul>
                        </li>
                        <li>
                          <h3>Academic Excellence Award</h3>
                          <p>Zhejiang University | May 2021</p>
                          <ul>
                            <li>Received an award for outstanding academic performance</li>
                            <li>Maintained a GPA of 3.8/4.0 throughout the academic year</li>
                          </ul>
                        </li>
                      </ul>
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
