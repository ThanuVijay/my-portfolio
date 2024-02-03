import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import microfinace from "../../Assets/Projects/micro-finance-cover.jpg";
import digiex from "../../Assets/Projects/digiex.png";
import Autoaum from "../../Assets/Projects/Autoaum.jpg";
import chatbot from "../../Assets/Projects/chatbot.png";
import socialmedia from "../../Assets/Projects/socialmedia.JPG";
import supermarket from"../../Assets/Projects/supermarket.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digiex}
              isBlog={false}
              title="DigiEx - Digitized Employee Expense Reimbursement and Supplier Payment Platform"
              description="DigiEx Is a Tech Platform that allows companies to manage all the documentation processes in
              respect of employee expenses, reimbursements, and supplier payments conveniently through one
              platform. DigiEx can also be integrated with any accounting packages or ERP solutions as needed"
              subtitle="Tech: React JS, Node JS, Express JS, Mongo DB, REST API, Git [MERN]"
              demoLink="https://play.google.com/store/apps/details?id=lk.digiex.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microfinace}
              isBlog={false}
              title="Micro Finance"
              description="Our Microfinance App is a robust and user-friendly platform designed to revolutionize the way microfinance institutions manage their operations and empower individuals with financial inclusion. With a focus on seamless role management and efficient loan management, this app is tailored to meet the diverse needs of microfinance organizations, ensuring a smoother and more accessible financial ecosystem. (On Going)"
              subtitle="Tech: MangoDb,Express.js,ReactJs,NodeJs (MERN Stack)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Mom X - Assist"
              description="My contribution to Mom X - Assist, a mobile app dedicated to fostering pregnant mothers' support and
              care, is the development of a pregnancy assistance chatbot utilizing Python TensorFlow. Acquire DNN
              knowledge"
             subtitle="Tech: Flutter , Firebase DB , Python , TensorFlow Learn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Autoaum}
              isBlog={false}
              title="Autoauum - Export Management ERP"
              description="Led the charge in developing the user-centric interface, which guarantees smooth Shipping updates.
              Proven proficiency in developing Web-based applications and implementing them strategically to
              improve accessibility and engagement." 
              subtitle="Tech: Laravel Framework , MySQL, Git , SonarQube, Selenium"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialmedia}
              isBlog={false}
              title="Social Media Review System"
              description="Developing an Online Review System with REST APIs prioritizes seamless user experience and
              efficient data exchange. The system facilitates effortless review submission, browsing, and
              interaction, fostering a dynamic online community" 
              subtitle="Tech: React JS , Spring boot , MongoDB
              "           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supermarket}
              isBlog={false}
              title="Super Market ERP System"
              description="Our we basesd System is a robust and user-friendly platform designed to revolutionize the way
              Supermarkets manage their operations and empower individuals with ERP inclusion." 
              subtitle="Java EE, MySQL, HTML, jQuery, Bootstrap"           
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
