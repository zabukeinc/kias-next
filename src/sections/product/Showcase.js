import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";


import { breakpoints } from "../../utils";

const Products = () => {
  const settings = {
    speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          swipeToSlide: true,
        },
      },
      {
        breakpoint: breakpoints.sm,
        settings: {
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <img src={'https://hydeliving.co.id/images/dummy/portfolio/1_curug_house/kitchen.jpg'} alt="" className="responsive-scaling object-fill h-48 w-96" />
      <img src={'https://hydeliving.co.id/images/dummy/portfolio/1_curug_house/living.jpg'} alt="" className="responsive-scaling object-fill h-48 w-96" />

    </Slider>
  );
};

const Showcase = () => {
  const [qty, setQty] = useState(2);
  const [activeImg, setActiveImg] = useState('https://hydeliving.co.id/images/dummy/portfolio/1_curug_house/living.jpg');

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <>
      <section className="pt-29 bg-default">
        <Container>
          <Row>
            <Col
              className="order-md-1 order-2 mt-7 mt-md-0 mt-7"
            >
              <Products handleActiveShow={setActiveImg} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Showcase;
