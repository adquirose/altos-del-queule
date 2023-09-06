import React from "react";
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap'
import Formulario from './Formulario'

function Contacto() {
  return (
    <div id="contacto" className="section">
      <div
        className="contactus-1 section-image"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/contacto.jpg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card className="card-contact no-transition">
                <CardTitle className="text-center" tag="h3">
                  Contáctanos
                </CardTitle>
                <Row>
                  <Col className="ml-auto" md="5">
                    <CardBody>
                      <div className="info info-horizontal">
                        <div className="icon icon-info">
                          <i className="nc-icon icon-property-location" />
                        </div>
                        <div className="description">
                          <h4 className="info-title">Sala de ventas</h4>
                          <p>
                            Visita sala de ventas <br />
                            desde 11:00 a 20:00 hrs <br />
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-danger">
                          <i className="nc-icon icon-phone" />
                        </div>
                        <div className="description">
                          <h4 className="info-title">Teléfono</h4>
                          <a href="tel:+56989295165">
                            +56 9 89295165
                          </a>
                          <br />
                          
                        </div>
                      </div>
                    </CardBody>
                  </Col>
                  <Col className="mr-auto" md="5">
                    <Formulario />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Contacto
