import React from "react";
import Card from "react-bootstrap/Card";
import { ImCross, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thanushan Vijayaratnam</span>
             from <span className="purple">Colombo, Sri Lanaka</span>
            <br />
            I am currently employed as FullStack Developer Freelancer .
            <br />
            <br />
            <li className="about-activity">
              <ImCross/> Work Experiance 
            </li>
            <span className="purple">Intern Software Developer </span> at Digital Services Global Pvt Ltd
            <br />
            [2023 Jan - July]
            <br />
            <br />
            <span className="purple">Full Stack Web Developer </span> at Freelancer
            <br />
            [2023 July - Current]
            <br />
            <br />
            SOFTWARE SKILLS
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Programming Languages - JavaScript (ES6), Typescript, Java, PHP
            </li>
            <li className="about-activity">
              <ImPointRight /> Frontend - React JS, Vue js, Angular
            </li>
            <li className="about-activity">
              <ImPointRight /> Backend - Node JS, Spring boot, Laravel
            </li>
            <li className="about-activity">
              <ImPointRight /> Database - My SQL, MongoDB, Firebase DB
            </li>
            <li className="about-activity">
              <ImPointRight /> CloudServices - AWS, Azure
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Good Thinks Take a Time"{" "}
          </p>
          <footer className="blockquote-footer">Thanushan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
