import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const datas = [
  {
    img: 'https://hydeliving.co.id/images/icons/buildings_blink.svg',
    title: 'Tim Design Interior',
    desc: 'Tim Design Interior kami adalah tim yang telah memenangkan beragai macam penghargaan.',
  },
  {
    img: 'https://hydeliving.co.id/images/icons/hands_love.svg',
    title: '40+ Standard QC Check',
    desc: 'oleh Tim Project Management kami.',
  },
  {
    img: 'https://hydeliving.co.id/images/icons/umbrella.svg',
    title: 'Transaksi yang Aman',
    desc: 'Kontraktor dibayar hanya saat pekerjaan sudah selesai.',
  },
]
const AboutIndex = () => (
  <>
    {/* <!-- Feature section --> */}
    <div className="feature-section bg-default-4 pt-8 pt-lg-15 pb-2 pb-lg-17 border-bottom">
      <Container>
        <h2 className="title gr-text-3 mb-7 text-center mb-24">
          Tentang Kias Design Interior
        </h2>
        <Row className="justify-content-center">
          {
            datas.map((data) => <Col md="4" lg="4" className="mb-12" key={data.title}>
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-blue mr-8 mb-7 mb-md-0">
                  <img className="" src={data.img} alt="feature" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-6">{data.title}</h3>
                  <p className="gr-text-9 gr-text-color-opacity mb-0">
                    {data.desc}
                  </p>
                </div>
              </div>
            </Col>)
          }
        </Row>
      </Container>
    </div>
  </>
);

export default AboutIndex;
