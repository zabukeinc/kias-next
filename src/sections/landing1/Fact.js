import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const datas = [
  {
    title: 'Proyek Interior',
    length: 120,
  },
  {
    title: 'Homeowner',
    length: 902,
  },
  {
    title: 'Provinsi',
    length: 13,
  },
]

const Fact = () => (
  <>
    {/* <!-- Fact section --> */}
    <div className="fact-section bg-default-4 pt-lg-15 pb-7 pb-lg-24">
      <Container>
        <Row className="justify-content-center">
          {
            datas.map((data) => <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0" key={data.title}>
              <div className="single-fact text-center px-xl-6">
                <h3 className="title mb-7 gr-text-3">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp duration={3} end={data.length} />
                    </span>
                    +
                  </LazyLoad>
                </h3>
                <p className="gr-text-8 mb-0">
                  {data.title}
                </p>
              </div>
            </Col>)
          }
        </Row>
      </Container>
    </div>
  </>
);

export default Fact;
