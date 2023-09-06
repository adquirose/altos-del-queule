import React from "react";
import { Container, Row, Col } from "reactstrap";

const data = [
  {
    id: 1,
    titulo: "SITIOS EN PUCÓN DESDE 600 M2",
    contenido:
      "Cotiza con nosotros. Contamos con instalaciones únicas como un portal de acceso con vigilancia controlada, quincho, sala de juegos, multicancha y áreas de esparcimiento, caminos interiores asfaltados, luz, canalización subterránea, agua, alcantarillado e internet fibra óptica.",
    image: require("../../assets/img/proyecto/texto1.jpg"),
    altImage: "imagen1",
    reverse: false,
  },
  {
    id: 2,
    titulo: "ARMONÍA CON LA NATURALEZA",
    contenido:
      "El condominio urbano Jardines del Quelhue está ubicado dentro de la Hacienda Puerto Pucón, en un terreno que cuenta con vistas insuperables del Volcán Villarrica y el imponente Cerro de Quelhue.",
    image: require("../../assets/img/proyecto/texto2.jpg"),
    altImage: "imagen2",
    reverse: true,
  },
  {
    id: 3,
    titulo: "ESPECTACULAR ACCESO",
    contenido:
      "Ubicado a metros del Gimnasio Olímpico emplazado la Ciudad del Deporte Ecoparque de Pucón; el condominio cuenta con dos accesos: uno por la hacienda Puerto Pucón, en el Camino Internacional, y otro pavimentado por camino al Ecoparque, que conecta rápidamente -a sólo 5 minutos- con el centro urbano de Pucón.",
    image: require("../../assets/img/proyecto/texto3.jpg"),
    altImage: "imagen3",
    reverse: false,
  },
  {
    id: 4,
    titulo: "SALA MULTIUSO",
    contenido:
    "Ven a conversar con nuestros ejecutivos. Tenemos sitios en Pucón desde UF 1.590 y contamos con financiamiento del Banco de Chile, Banco Estado y Santander. Te esperamos. Lunes a domingo 11:00 a 20:00 hrs.",
    image: require("../../assets/img/proyecto/texto4.jpg"),
    altImage: "imagen4",
    reverse: true,
  },
];
function Proyecto() {
  return (
    <div className="section" id="proyecto">
      {data.map((item) => (
        <SectionProyecto
          key={item.id}
          titulo={item.titulo}
          contenido={item.contenido}
          img={item.image}
          altImage={item.altImage}
          reverse={item.reverse}
        />
      ))}
    </div>
  );
}
export default Proyecto;

function SectionProyecto({ titulo, contenido, img, altImage, reverse }) {
  return (
    <Container className="pt-5">
      <Row>
        <Col md="6" className={reverse ? "order-md-1" : "order-md-2"}>
          <h3 className="pb-3">{titulo}</h3>
          <div>{contenido}</div>
        </Col>
        <Col md="6" className={reverse ? "order-md-2" : "order-md-1"}>
          <img style={{ width: "100%" }} src={img} alt={altImage} />
        </Col>
      </Row>
    </Container>
  );
}
function Caracteristicas() {
  return (
    <div id="caracteristicas">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Características</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="3">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon icon-tree-02" />
              </div>
              <div className="description">
                <h4 className="info-title">GRAN ENTORNO NATURAL</h4>
                <p className="description">
                  Disfruta de una vista de ensueño al Volcán Villarrica y al
                  imponente Cerro de Quelhue. Nuestro condominio se inserta
                  dentro de un entorno de lomajes suaves rodeado por vegetación
                  nativa.
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon icon-square-marker" />
              </div>
              <div className="description">
                <h4 className="info-title">CERCA DEL CENTRO</h4>
                <p className="description">
                  Contamos con una excelente ubicación. Nuestro condominio está
                  ubicado a 2.8 Km de Pucón, a tan sólo 5 minutos del centro
                  urbano.
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon icon-plug-2" />
              </div>
              <div className="description">
                <h4 className="info-title">SERVICIOS ASOCIADOS</h4>
                <p className="description">
                  Jardines del Quelhue cuenta con portón con accesos controlados al condominio, 
                  caminos asfaltados, luz, canalización subterránea, agua, alcantarillado y internet fibra óptica.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="3">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon icon-park" />
              </div>
              <div className="description">
                <h4 className="info-title">ÁREAS DE ESPARCIMIENTO</h4>
                <p className="description">
                  Condominio Jardines del Quelhue cuenta con variados espacios comunes a disposición de los residentes, 
                  como zona de quincho y áreas verdes para esparcimiento, multicancha, sala de juegos, entre otros.
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon icon-currency-exchange-2" />
              </div>
              <div className="description">
                <h4 className="info-title">GRAN PLUSVALÍA</h4>
                <p className="description">
                  Ubicado en un sector de gran plusvalía y a metros del futuro Gimnasio Olímpico de Pucón, 
                  una instalación de 3.000 m2, que será el Gimnasio más grande y moderno de la Araucanía.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export { Caracteristicas }

function Nosotros(){
  return(
    <div id="nosotros" className="section">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 className="title">Nosotros</h2>
            <p className="description">
              Inmobiliaria Mar Bravo Ltda. ya ha desarrollado y vendido en los últimos años, 
              tres Condominios Privados Urbanizados en el mismo sector de Hacienda Puerto Pucón, 
              estos son: Vista Quelhue, Brisas del Quelhue y Mirador del Quelhue.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    )
}
export { Nosotros } 
