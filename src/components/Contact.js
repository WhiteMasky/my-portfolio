import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/email.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  // At the start of the component, several state variables are initialized using React's useState hook. 
  // formDetails holds the current state of the form, buttonText holds the current text of the submit button, 
  // and status holds the status of the form submission.
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  // The onFormUpdate function is used to update the formDetails state when a user types into the form fields. 
  // It takes a category (which corresponds to a key in the formDetails object) and a value, and updates formDetails accordingly.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };
  // The handleSubmit function is an asynchronous function that is triggered when the form is submitted. 
  // It prevents the default form submission, changes the buttonText to "Sending...", 
  // and sends a POST request to "http://localhost:5000/contact" with the formDetails as the body. 
  // After the request is sent, it resets the buttonText to "Send", and the formDetails to its initial state. 
  // If the response code is 200, it sets the status to indicate a successful message sent, 
  // otherwise, it sets the status to indicate an error.
  // However, the code has some bugs so it still cannot be applied.
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility offset={50}>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__fadeInLeft" : "animate__animated animate__zoomOut"} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility offset={100}>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : "animate__animated animate__zoomOut"}>
                <h2>Message Me Now</h2>
                <form onSubmit={handleSubmit}>
                {/* The form itself consists of several input fields and a textarea, 
                each bound to a corresponding property in formDetails and updating that property on change. 
                The form also displays a status message if one is set. */}
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
