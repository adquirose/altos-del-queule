import React, { useState } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
const items = [
  { 
    src: "url(https://firebasestorage.googleapis.com/v0/b/storage-lanube360.appspot.com/o/dev-lanube360%2Fheader1.jpg?alt=media&token=7144a634-ddb1-4d43-8c78-dd81a85297cf)" ,
    content: (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">Condominio Urbano en Pucón</h1>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    
    src:"url(https://firebasestorage.googleapis.com/v0/b/storage-lanube360.appspot.com/o/dev-lanube360%2Fheader2.jpg?alt=media&token=215f9811-073a-46ea-b3f0-01a2645fc6a6)",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">Navega por nuestro Master Plan Aéreo</h1>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  { 
    src: "url(https://firebasestorage.googleapis.com/v0/b/storage-lanube360.appspot.com/o/dev-lanube360%2Fheader3.jpg?alt=media&token=26772e0f-c1ff-4616-b578-adb0d46a665b)",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">Elige una de nuestras casas y financiamos tu construcción.</h1>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
];

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div id="headers">
        <div className="header-3">
          <div className="page-carousel">
            <div className="filter" />
            <Carousel
              interval="7000"
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                  >
                    <div
                      className="page-header"
                      style={{ backgroundImage: item.src }}
                    >
                      <div className="filter" />
                      <div className="content-center">{item.content}</div>
                    </div>
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
