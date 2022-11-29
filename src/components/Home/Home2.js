import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {ImPinterest2} from "react-icons/im";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <div className="container-fluid mb-5 Home-letters">
            <div className="text-center mt-5">
              <h1 className={'pb-3'}>Servicios</h1>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services settings">
                    <div className="icon"><img src="https://kamleshyadav.com/wp/astrologer/demo1/wp-content/uploads/sites/2/2021/03/service1.svg" alt={'zs'}/></div>
                    <h4 className={'pt-4'}>Lectura de mano</h4>
                    <p className={'pb-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services speedup">
                    <div className="icon"><img src="https://kamleshyadav.com/wp/astrologer/demo1/wp-content/uploads/sites/2/2021/12/birthday.svg" alt={'asss'}/></div>
                    <h4 className={'pt-4'}>Cumpleaños</h4>
                    <p className={'pb-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services privacy">
                    <div className="icon"><img src="https://kamleshyadav.com/wp/astrologer/demo1/wp-content/uploads/sites/2/2021/03/service3.svg" alt={'asas'}/></div>
                    <h4 className={'pt-4'}>Manglik Dosha</h4>
                    <p className={'pb-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services backups">
                    <div className="icon"><img src="https://kamleshyadav.com/wp/astrologer/demo1/wp-content/uploads/sites/2/2021/12/lal-kitab.svg" alt={'asa'}/></div>
                    <h4 className={'pt-4'}>Lal Kitab</h4>
                    <p className={'pb-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services ssl">
                    <div className="icon"><img src="https://kamleshyadav.com/wp/astrologer/demo1/wp-content/uploads/sites/2/2021/03/service5.svg" alt={'ssa'}/></div>
                    <h4 className={'pt-4'}>Bola de cristal</h4>
                    <p className={'pb-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services database">
                    <div className="icon"><img src="https://kamleshyadav.com/wp/astrologer/demo1/wp-content/uploads/sites/2/2021/03/service7.svg" alt={'s'}/></div>
                    <h4 className={'pt-4'}>Tarot</h4>
                    <p className={'pb-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contactanos</h1>
            <p>
              Puedes encontrarnos en nuestras <span className="purple">redes sociales</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <BsInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <BsFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <ImPinterest2 />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
