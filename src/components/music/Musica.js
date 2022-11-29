import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../Particle";


function Musica() {
    return(
        <Container fluid className="about-section">
            <Container className={'contenedor-contacto ajustes'}>
                <div className="player">

                    <div className="details">
                        <div className="track-art"></div>
                        <div className="track-name">Daft Punk</div>
                        <div className="track-artist">Something about us </div>
                    </div>


                    <div className="buttons">
                        <div className="prev-track" onClick="prevTrack()">
                            <i className="fa fa-step-backward fa-2x"></i>
                        </div>
                        <div className="playpause-track" onClick="playpauseTrack()">
                            <i className="fa fa-play-circle fa-5x"></i>
                        </div>
                        <div className="next-track" onClick="nextTrack()">
                            <i className="fa fa-step-forward fa-2x"></i>
                        </div>
                    </div>


                    <div className="slider_container">
                        <div className="current-time">00:00</div>
                        <input type="range" min="1" max="100"
                               value="50" className="seek_slider" onChange="seekTo()"/>
                            <div className="total-duration">03:49</div>
                    </div>


                    <div className="slider_container">
                        <i className="fa fa-volume-down"></i>
                        <input type="range" min="1" max="100"
                               value="99" className="volume_slider" onChange="setVolume()"/>
                            <i className="fa fa-volume-up"></i>
                    </div>
                </div>
            </Container>
            <Particle />
        </Container>
    )

}
export default Musica;
