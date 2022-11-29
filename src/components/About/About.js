import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className={'contenedor-contacto'}>
          <h1 className="project-heading">
             Horoscopos
          </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
