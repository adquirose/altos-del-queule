import React from 'react'
import  { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap'
function Atractivos(){
    return(
        <div id="atractivos" className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title text-center">Atractivos</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/asenso-volcan.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-warning">Travel</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        ASCENSO AL VOLCÁN
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      ¿En qué otro lugar es posible escalar un volcán activo y humeante? La actividad más destacada de Pucón no requiere 
                      experiencia de montaña ni de contar con equipamiento especial, basta con acercarse a una agencia local.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/escalada.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-info">Travel</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        ESCALADA
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Con el paso de los años, El Cerdúo y el Cañi se han consolidado como los escenarios ideales 
                      para practicar la escalada, un deporte que ayuda al desarrollo de la concentración, 
                      la motricidad gruesa y el disfrute de la naturaleza.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/esqui-randone.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-danger">Lifestyle</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        ESQUÍ EN NIEVE Y RANDONE
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      La mejor forma de ir más allá de los centros invernales y recorrer los maravillosos paisajes nevados de la zona. 
                      El randoné, subir con los esquíes puestos para luego descender la montaña, es una disciplina 
                      muy popular en Europa y que cada día se practica más en nuestro país.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/flora-y-fauna.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-success">Best Seller</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        OBSERVACIÓN FLORA Y FAUNA
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Dueño de ecosistemas únicos y fascinantes, l
                      a zona ofrece inmejorables oportunidades para la realización de caminatas de 
                      observación de especies vegetales nativas y animales endémicas.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/mountain-bike.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-danger">Lifestyle</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        MONTAIN BIKE
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      En la zona abundan rutas en bicicletas de montaña que permiten descubrir espacios naturales a los 
                      que no se podría acceder por otro medio. Increíbles senderos y paisajes extremadamente entretenidos, 
                      eternos y con una gran variedad de terrenos.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/rafting.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-success">Best Seller</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        RAFTING
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      La perfecta combinación entre adrenalina y naturaleza. Disfruta de la excitante aventura de bajar por el rio Trancura en balsa. 
                      Por sus distintos grados de complejidad es apta para niños, jóvenes y adultos mayores.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/lagos.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-danger">Lifestyle</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        LAGO Y DEPORTES ACUÁTICOS
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Tales como ski, velerismo, remo, windsurf, kitesurfing etc.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/pesca.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-success">Best Seller</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        PESCA
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Muchas alternativas de ríos y lagos para practicar pesca con mosca o de arrastre
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/atractivos/casino.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-danger">Lifestyle</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        GASTRONOMÍA Y ENTRETENIMIENTO
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Múltiples Restaurantes, Cafés y Bares, además de su Casino y eventos deportivos como el Ironman de Pucón para compartir y entretenerse.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
export default Atractivos