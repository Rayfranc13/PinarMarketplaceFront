import { Container, Row, Col } from "react-bootstrap";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";
import { GrStripe } from "react-icons/gr";
import { SiTransferwise } from "react-icons/si";
import{AiOutlineMail,AiFillPhone}from 'react-icons/ai'
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="text-white justify-content-md-center">
        <Container className="p-4">
          <Row>
            <Col lg={5} xl={4} md={6} sm={8} className="columnas">
              <span className="m-0 ">
                Pueden seguirnos en nuestras redes sociales:
              </span>
            </Col>
            <Col xl={7} md={4} sm={1}></Col>
            <Col className="columnas">
              <a
                className="btn"
                style={{
                  color: "white",
                  borderRadius: "50px",
                  fontSize: "20px",
                  padding: "0px",
                }}
              >
                <TiSocialTwitter style={{ verticalAlign: "unset" }} />
              </a>
              <a
                className="btn"
                style={{
                  color: "white",
                  borderRadius: "50px",
                  fontSize: "20px",
                  padding: "0px",
                }}
              >
                <TiSocialFacebook style={{ verticalAlign: "unset" }} />
              </a>
              <a
                className="btn"
                style={{
                  color: "white",
                  borderRadius: "50px",
                  fontSize: "20px",
                  padding: "0px",
                }}
              >
                <TiSocialInstagram style={{ verticalAlign: "unset" }} />
              </a>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={12} className="columnas">
              <span>Tecnologias:</span>
            </Col>
            <Col className="columnas">
              <br />
              <span>
                <GrStripe style={{ height: "50px", width: "100px" }} />
              </span>
              <span>
                <SiTransferwise style={{ height: "50px", width: "100px" }} />
              </span>
            </Col>
          </Row>
          <hr />
          <Row className="info">
            <Col sm={12} lg={4} >
              <div className="info-item">
            <h5>Mercado-Pinar</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo rem similique magni veniam, quisquam eligendi laudantium perferendis. Cum ea similique consectetur! Laborum et dolor ut officiis, reiciendis eaque velit expedita.</p>
            </div>
            </Col>
            <Col sm={12} lg={4}>
            <h5>Enlaces Utiles</h5>
            <Container>
            <div className="info-item">
            <ul className="lista">
              <li>
                <a>Documentacion</a>
                </li>
                <li>
                <a>Informacion API</a>
                </li>
                <li>
                <a>Terminos de uso</a>
                </li>
                <li>
                <a>Politica de Privacidad</a>
                </li>
              
            </ul>
            </div>
            </Container>
            </Col>
            <Col sm={12} lg={4}>
              <h5>Contacto</h5>
              <span><AiOutlineMail/> Ejemplo@ejemplo.com</span>
              <br />
              <span><AiFillPhone/> +5358532632</span>
            </Col>
          </Row>
          </Container>
        <Row className="firma m-0" style={{ textAlign:"center"}}>
           <Col>
           <span>Mercado-Pinar®  Todos los derechos reservados.</span>
           </Col>
           </Row>
         

      </footer>
    </>
  );
}
