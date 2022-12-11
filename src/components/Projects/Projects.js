import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cilim from "../../Assets/Projects/Cilim.png";
import ses from "../../Assets/Projects/ses.png";
import drawing from "../../Assets/Projects/drawing.jpg";
import evidencijaApp from "../../Assets/Projects/evidencijaApp.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Moji <strong className="purple">projekti </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ses}
              isBlog={false}
              title="Web stranica Srednje ekonomske škole"
              description="Dinamička web stranica izrađena preko React.JS, uređivanje stranice se vrši preko Firebase baze podataka."
              ghLink="https://github.com/nihadm97/ses"
              demoLink="https://ses.edu.ba"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={drawing}
              isBlog={false}
              title="Drawing app"
              description="Aplikacija slična Paint-u kod koje se slike mogu spremati u Firebase bazu podataka."
              ghLink="https://github.com/nihadm97/DrawingAPP-ReactJS"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={evidencijaApp}
              isBlog={false}
              title="Evidencija app"
              description="Aplikacija za evidenciju nastave za profesore sa login stranicom i Django bazom podataka."
              ghLink="https://github.com/nihadm97/evidencijaapp-react"            
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cilim}
              isBlog={false}
              title="Ćilim"
              description="Igra ćilim urađena u običnom Javascript-u."
              ghLink="https://github.com/nihadm97/--cilim-game-javascript"
              demoLink="https://nihadm97.github.io/--cilim-game-javascript/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
