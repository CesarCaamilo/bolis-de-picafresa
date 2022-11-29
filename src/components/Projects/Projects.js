import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/28456880-233b-47ff-b903-b6b51cf3a8bf.jfif";
import emotion from "../../Assets/Projects/169b13b5-ba31-4720-a20b-5b70cd1e8b5a.jfif";
import editor from "../../Assets/Projects/290f710d-4caa-4edf-82bc-ff333d81198b.jfif";
import chatify from "../../Assets/Projects/047220fc-26af-4d5a-8d00-75d3fb55ef7b.jfif";
import suicide from "../../Assets/Projects/72634c5a-11f3-4e98-9b4a-40d75e8e8f87.jfif";
import bitsOfCode from "../../Assets/Projects/28456880-233b-47ff-b903-b6b51cf3a8bf.jfif";


function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Las<strong className="purple"> Recetas </strong> mas recientes
          </h1>
          <p style={{ color: "white" }}>
            Las recetas mas populares al alcance de tus manos
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={chatify}
                  isBlog={false}
                  title="Pochita ❤️"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                  ghLink="https://www.instagram.com"
                  demoLink="https://cesarcamilo.com"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title="Pochita ❤️"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                  ghLink="https://www.instagram.com"
                  demoLink="https://www.microsoft.com/en-ww/microsoft-365/word"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={editor}
                  isBlog={false}
                  title="Pochita ❤️"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                  ghLink="https://www.instagram.com"
                  demoLink="https://www.microsoft.com/en-ww/microsoft-365/word"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={leaf}
                  isBlog={false}
                  title="Pochita ❤️"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                  ghLink="https://www.instagram.com"
                  demoLink="https://www.microsoft.com/en-ww/microsoft-365/word"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={suicide}
                  isBlog={false}
                  title="Pochita ❤️"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                  ghLink="https://www.instagram.com"
                  demoLink="https://www.microsoft.com/en-ww/microsoft-365/word"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={emotion}
                  isBlog={false}
                  title="Pochita ❤️"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                  ghLink="https://www.instagram.com"
                  demoLink="https://www.microsoft.com/en-ww/microsoft-365/word"
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
