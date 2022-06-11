import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l4/png/l4-content3-img1.png";
import imgC2 from "../../assets/image/l4/png/l4-content3-img2.png";
import imgC3 from "../../assets/image/l4/png/l4-content3-img3.png";
import imgC4 from "../../assets/image/l4/png/l4-content3-img4.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-2 pb-13 pb-lg-25">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="6" className="mb-9 mb-lg-0">
              <div className="content-grid-image-group d-flex  mx-sm-n3">
                <div className="single-image d-flex flex-column px-3 px-sm-6">
                  {/* <!-- single image --> */}
                  <img
                    src={imgC1}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    className="w-100 pb-6 pb-sm-9 rounded-8"
                  />
                  {/* <!-- single image --> */}
                  <img
                    src={imgC2}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="700"
                    className="w-100 pb-6 pb-sm-9 rounded-8"
                  />
                </div>
                <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                  {/* <!-- single image --> */}
                  <img
                    src={imgC3}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="400"
                    className="w-100 pb-6 pb-sm-9 rounded-8"
                  />
                  {/* <!-- single image --> */}
                  <img
                    src={imgC4}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="1000"
                    className="w-100 rounded-8"
                  />
                </div>
              </div>
            </Col>
            <Col sm="10" lg="5" className="col-sm-10 col-lg-5">
              <div className="content-text pl-xl-7">
                <h2 className="gr-text-4 mb-7">
                  Make your customers <br className="d-none d-lg-block" />
                  happy by giving services.
                </h2>
                <p className="gr-text-8 mb-0">
                  We share common trends and strategies for improving your
                  rental income and making sure you stay in high demand.
                </p>
                <Link href="/#">
                  <a className="btn-link with-icon gr-text-blue gr-text-7 font-weight-bold mt-9">
                    Start a free trial{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
