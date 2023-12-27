import React from "react";
import { Container, Row, Col } from "reactstrap";
import { data } from '../../constants'

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
                  Altos del Quelhue cuenta con portón con accesos controlados al condominio, 
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
                  Condominio Altos del Quelhue cuenta con variados espacios comunes a disposición de los residentes, 
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

// function Nosotros(){
//   return(
//     <div id="nosotros" className="section">
//       <Container>
//         <Row className="justify-content-center">
//           <Col md="8">
//             <h2 className="title">Nosotros</h2>
//             <p className="description">
//               Inmobiliaria Mar Bravo Ltda. ya ha desarrollado y vendido en los últimos años, 
//               cuatro Condominios Privados Urbanizados en el mismo sector de Hacienda Puerto Pucón, 
//               estos son: Vista Quelhue, Brisas del Quelhue, Mirador del Quelhue y Jardines del Quelhue.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     )
// }
// export { Nosotros } 
