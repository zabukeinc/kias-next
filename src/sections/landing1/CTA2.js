import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <div className="cta-section-2 dark-mode-texts bg-blackish-blue ">
      <Container>
        <div className="cta-wrapper pt-14 pb-14 py-lg-19 border-bottom">
          <Row className="align-items-center justify-content-center">
            <Col lg="6" md="10">
              <div className="cta-text section-title">
                <h2 className="title gr-text-5 mb-7 text-white">
                  Siap menjadi client kami berikutnya?
                </h2>
                <p className="gr-text-8 gr-color-white-opacity-7 mb-8 mb-lg-0">
                  Kami mengutamakan kepuasan pelanggan dan after sales yang baik untuk interior rumah Anda. Kami hadirkan keajaiban untuk rumah idaman Anda. Dengan melihat testimoni dari homewoner, Anda bisa memulai proyek bersama kami.
                </p>
              </div>
            </Col>
            <Col lg="4" md="10" className="offset-lg-2">
              <div className="cta-btn text-lg-right">
                <Button className="gr-hover-y" variant="green">Mulai Proyek</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default CTA;
