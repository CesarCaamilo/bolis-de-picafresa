import {Container} from "react-bootstrap";
import Particle from "../Particle";
import React from "react";

function Foro() {
    return(
        <Container fluid className="about-section">
            <Particle />
            <Container className={'contenedor-contacto ajustes'}>
                <blockquote>
                    A piece of knowledge, unlike a piece of physical property, can be shared by large groups of people without making anybody poorer.
                    <span>Cesar Camilo</span>
                </blockquote>
            </Container>

        </Container>
    )
}

export default Foro;

