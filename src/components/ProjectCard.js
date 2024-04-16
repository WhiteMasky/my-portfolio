import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={linkUrl} className="proj-link">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
// The component is defined using ES6 arrow function syntax and it takes a single argument, an object. 
// This object is destructured into three properties: title, description, and imgUrl. 
// These properties are expected to be passed as props when the ProjectCard component is used.