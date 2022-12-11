import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Dobro došli! Ja sam <span className="purple">NIHAD MEHMEDOVIĆ </span>
            iz <span className="purple"> Sarajeva, Bosne i Hercegovine.</span>
            <br />Ja sam mladi nastavnik matematike i informatike koji u slobodno vrijeme radi na projektima.
            <br />
            <br />
            Osim programiranja i svog posla vrijeme provodim sa:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Treniranjem
            </li>
            <li className="about-activity">
              <ImPointRight /> Igranjem igrica
            </li>
            <li className="about-activity">
              <ImPointRight /> Putovanjima
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
