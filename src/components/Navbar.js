import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiFillStar,
} from "react-icons/ai";

import {BiHomeHeart} from "react-icons/bi";
import {SiReactivex, SiWebrtc} from "react-icons/si";
import {GiLoveLetter} from "react-icons/gi";
import {BsMusicNoteList} from "react-icons/bs";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h3 className="img-fluid logo-letras">Opal Coven</h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto logo-nav " defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <BiHomeHeart style={{ marginBottom: "2px" }} /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <SiReactivex style={{ marginBottom: "2px" }} /> Horóscopos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/recetas"
                onClick={() => updateExpanded(false)}
              >
                <SiWebrtc
                  style={{ marginBottom: "2px" }}
                />{" "}
                Recetarios
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                  as={Link}
                  to="/musica"
                  onClick={() => updateExpanded(false)}
              >
                <BsMusicNoteList style={{ marginBottom: "2px" }} /> Música
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                  as={Link}
                  to="/contacto"
                  onClick={() => updateExpanded(false)}
              >
                <GiLoveLetter style={{ marginBottom: "2px" }} /> Contacto
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                  as={Link}
                  to="/foro"
                  onClick={() => updateExpanded(false)}
              >
                <AiFillStar style={{ fontSize: "1.1em" }} />
                Foro
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
