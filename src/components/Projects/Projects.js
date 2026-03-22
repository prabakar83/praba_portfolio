import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./project.css"; // create this for styling

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        {/* Heading */}
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="work-heading">
              My <span className="purple">Work</span> Experience
            </h1>
            {/* <p className="work-subtext">
              Here is a snapshot of my professional journey in software development,
              highlighting the roles and contributions that have shaped my growth.
            </p> */}
          </Col>
        </Row>


        {/* Quickplay Card */}
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="work-card">
              <h3 className="company">Quickplay</h3>
              <h4 style={{ color: "#fff" }}>Frontend Developer</h4>  
              <p className="location">Chennai • 2024 - Present</p>

           <ul>
            <li>
              Developed scalable and reusable React.js components for OTT content management systems.
            </li>
            <li>
              Integrated REST and GraphQL APIs to efficiently fetch and manage dynamic data.
            </li>
            <li>
              Collaborated with cross-functional teams including backend developers, QA, and designers to deliver features on time.
            </li>
            <li>
              Optimized frontend performance by reducing unnecessary re-renders and improving load times.
            </li>
            <li>
              Implemented responsive and user-friendly UI designs ensuring compatibility across devices.
            </li>
            <li>
              Managed application state using modern state management techniques for better scalability.
            </li>
            <li>
              Debugged and resolved production issues, ensuring high reliability and smooth user experience.
            </li>
          </ul>
            </div>
          </Col>
        </Row>

        
      </Container>
    </Container>
  );
}

export default Projects;