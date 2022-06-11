import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactCompareImage from 'react-compare-image';

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <div className="content-section bg-default-4 pt-lg-25 pt-15 pb-10 pb-lg-15">
      <Container>
        <Row>
          <Col xl="12" lg="12" md="12">
            <div className="section-title mb-13 text-center">
              <h2 className="title gr-text-2 mb-9 mb-lg-12">
                Magic does exist in Kias!
              </h2>
              <p className="gr-text-8 mb-0">
                Kami mengutamakan kepuasaan pelanggan dan after sales yg baik. Testimoni dibawah ini bisa menjadi salah satu penguat mu untuk memulai proyek bersama kami.
              </p>
            </div>
            <ReactCompareImage
              leftImage="https://hydeliving.co.id/images/landing-page/magic_before.png"
              rightImage="https://hydeliving.co.id/images/landing-page/magic_after.png"
              leftImageLabel="Render"
              leftImageCss={{
                width: '100%',
                fontSize: '1.5rem',
                color: '#FFF',
                backgroundColor: 'transparent'
              }}
              rightImageLabel="Reality"
            />
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Content1;
