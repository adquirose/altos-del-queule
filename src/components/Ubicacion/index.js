import React from "react";
import Map from "./Map";
import { Container, Row, Col } from 'reactstrap'
function Ubicacion(){
  return(
    <div className="section" id="ubicacion">
      <Container>
        <Row>
          <Col>
            <h2 className="title text-center">Ubicación</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Map/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Ubicacion;
