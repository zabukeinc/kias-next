import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { Select } from "../../components/Core";

const defaultOptions = [
  { value: "dm", label: "Design Interior" },
  { value: "cr", label: "Design Product" },
  { value: "cr", label: "Design Architecture" },
];

const CTA3 = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section overflow-hidden py-13 py-lg-25 bg-mirage bg-pattern pattern-1 ">
        <Container>
          <Row className="align-items-center">
            <Col xl="5" md="6" data-aos="fade-right" data-aos-duration="800">
              <div className="section-title pr-lg-7 mb-0 dark-mode-texts">
                <h2 className="title gr-text-4 mb-6">
                  Konsultasikan kebutuhan anda sekarang!
                </h2>
                <p className="gr-text-8 pr-lg-7 mb-0">
                  Some text here Some text here Some text here Some text here
                </p>
              </div>
            </Col>
            <Col
              xl="4"
              lg="5"
              md="6"
              className="offset-xl-3 offset-lg-1 mt-9 mt-md-0"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <form className="cta-form bg-white light-mode rounded-10 px-8 py-8">
                <div className="form-group gr-text-11 font-weight-bold text-blackish-blue">
                  <label htmlFor="ctaName">Nama Lengkap </label>
                  <input
                    type="text"
                    className="form-control gr-text-11"
                    id="ctaName"
                    placeholder="i.e. John Doe"
                    required=""
                  />
                </div>
                <div className="form-group gr-text-11 font-weight-bold text-blackish-blue">
                  <label htmlFor="ctaEmail">Email </label>
                  <input
                    type="email"
                    className="form-control gr-text-11"
                    id="ctaEmail"
                    placeholder="i.e. john@mail.com"
                    required=""
                  />
                </div>
                <div className="form-group gr-text-11 font-weight-bold text-blackish-blue">
                  <label htmlFor="ctaPhone">Phone </label>
                  <input
                    type="email"
                    className="form-control gr-text-11"
                    id="ctaPhone"
                    placeholder="i.e. 123-456-7890"
                  />
                </div>
                <div className="form-group gr-text-11 font-weight-bold text-blackish-blue">
                  <label htmlFor="agentCount" className="pr-lg-4">
                    Service yang dibutuhkan?{" "}
                  </label>

                  <Select
                    options={defaultOptions}
                    className=" gr-text-11 mb-7"
                    accentColor="green"
                    // border={false}
                    bg="transparent"
                  // indicator={false}
                  />
                </div>
                <Button type="submit" className="gr-hover-y rounded-8 w-100" variant="green">
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CTA3;
