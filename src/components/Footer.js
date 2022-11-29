import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Axel Rodriguez</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Pochita ❤️</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                  href="https://www.instagram.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://facebook.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
