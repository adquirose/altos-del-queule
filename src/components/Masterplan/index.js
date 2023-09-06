import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function SectionMasterplan(){
    return(
        <div className="section" id="masterplan">
            <Container>
                <Row>
                <Col className="ml-auto mr-auto" md="8">
                    <h2 className="title text-center">Masterplan 360</h2>
                    <br />
                </Col>
                </Row>
                <Row>
                    <iframe className="masterplan" src="https://www.lanube360.com/temporales/pucon-3/" title="Masterplan360"/>
                </Row>
            </Container>
        </div>
    )
}
export default SectionMasterplan