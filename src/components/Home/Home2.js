import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            DOPUSTITE MI DA SE <span className="purple"> PREDSTAVIM </span>
            </h1>
            <p className="home-about-body">
              Zavolio sam programiranje nakon što sam upisao PMF u Sarajevu, što me je dovelo do toga da upišem master iz Teorijske kompjuterske nauke
              iako sam u planu imao raditi kao nastavnik matematike i informatike… 🤷‍♂️
              <br />
              <br />Većinom koristim najpoznatije jezike
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              Specijalizovao sam se za &nbsp;
              <i>
                <b className="purple">izradu web stranica </b> sa jednostavnim pristupima za uređivanje poslodavcu.{" "}
              </i>
              <br />
              <br />
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
