import Particle from "../Particle";
import { Container} from "react-bootstrap";

import React from "react";

function contact() {
    return(
        <Container fluid className="about-section">
            <Container className={'contenedor-contacto'}>
                <h1 className={'contacto-h1'}>Contacto</h1>
                <form>
                    <input name="name" type="text" className="feedback-input" placeholder="Nombre"/>
                    <input name="email" type="text" className="feedback-input" placeholder="Correo electronico"/>
                    <textarea name="text" className="feedback-input" placeholder="Comentario"></textarea>
                    <input type="submit" value="Enviar"/>
                </form>
            </Container>
            <Particle />
        </Container>
    )
}

export default contact;
