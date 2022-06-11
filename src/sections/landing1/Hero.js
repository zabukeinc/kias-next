import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgDot from "../../assets/image/l5/png/l5-dot-shape.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative bg-default-2 bg-pattern pattern-2 pt-27 pt-lg-32 pb-15 pb-lg-27">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              xs="9"
              md="7"
              lg="5"
              className="offset-xl-1 align-self-sm-end order-lg-2"
            >
              <div
                className="hero-img position-relative"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <img className="w-100" src={'https://hydeliving.co.id/images/landing-page/bg_1.webp'} alt="" />
                <div
                  className="gr-abs-tl gr-z-index-n1"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                >
                  <img src={imgDot} alt="" />
                </div>
              </div>
            </Col>
            <Col
              xs="11"
              md="9"
              lg="7"
              xl="6"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content mt-11 mt-lg-0">
                <h4 className="pre-title gr-text-12 text-green text-uppercase mb-7">
                  Kias Design Present
                </h4>
                <h1 className="title gr-text-2 mb-8">
                  Temukan Interior Hunian Idaman Anda
                </h1>
                <p className="gr-text-8 mb-11 pr-md-12">
                  Eksplor inspirasi hunian dengan desain interior sesuai kebutuhanmu dan wujudkan bersama Kias Design Interior.
                </p>
                {/* <CustomCollapse /> */}
                <div className="hero-btn">
                  <Button href="#" className="gr-hover-y" variant="green">
                    Mulai Proyek
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
