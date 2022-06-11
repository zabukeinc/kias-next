import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgO from "../../assets/image/job-site/jpg/content-img-opacity.jpg";

const datas = [
  {
    title: "Tahap Konsultasi",
    description: "Kami menyediakan layanan konsultasi gratis mengenai kebutuhan interior idaman Anda, serta Anda bisa mendapatkan desain 3D tanpa biaya desain.",
    img: "https://hydeliving.co.id/images/landing-page/bg_1.webp"
  },
  {
    title: "Tahap Survei & Design",
    description: "Dengan RnD yang mumpuni, Anda akan mendapatkan desain yang sesuai budget dan keinginan Anda.",
    img: "https://hydeliving.co.id/images/landing-page/bg_2.webp"
  },
  {
    title: "Tahap Pengerjaan",
    description: "Kami akan mengerjakan desain Anda sesuai dengan keinginan Anda dan budget Anda.",
    img: "https://hydeliving.co.id/images/landing-page/bg_3.webp"
  }
]

const Wujudkan = () => (
  <>
    {/* <!-- Content section --> */}
    <div className="content-section border-bottom pt-11 pb-7 pt-lg-24 pb-lg-28 bg-default-6">
      <Container>
        <Row className=" justify-content-center">
          <div className="col-xl-6 col-lg-8 col-sm-10">
            <div className="section-title text-center mb-12 mb-lg-23">
              <h2 className="title gr-text-4 mb-6">
                Langkah Kias Mewujudkan Impian Anda
              </h2>
              <p className="gr-text-8 px-lg-7 px-xl-0">
                Kias Design tidak hanya mewujudkan interior hunian idaman yang indah, tetapi tetap aman, mudah, dan cepat. Kami berusaha mewujudkan kebutuhan interior yang Anda inginkan.
              </p>
            </div>
          </div>
        </Row>
        <Row className="align-items-center">
          <Col lg="6">
            <div className="content-img-group text-center mb-8 mb-lg-0">
              <div className="main-image  w-xs-75 w-lg-85 w-xl-75 mx-auto position-relative gr-z-index-1">
                <img className="rounded-10 w-100" src={'https://hydeliving.co.id/images/landing-page/bg_1.webp'} alt="" />
                <div
                  className="underlay-shadow-img gr-abs-tl-custom-2 h-100"
                  data-aos="fade-down-right"
                  data-aos-duration="900"
                  data-aos-delay="400"
                >
                  <img className="rounded-10 h-100" src={imgO} alt="" />
                </div>
                <div
                  className="notif-badge gr-abs-bl-custom-3"
                  data-aos="fade-right"
                  data-aos-duration="900"
                >
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="content-widget mt-7 mt-lg-0 pr-lg-13 pl-xl-19">
              <Row className="align-items-center">
                {
                  datas.map((data, index) => <Col
                    md="6"
                    lg="12"
                    className=""
                    data-aos="fade-left"
                    data-aos-duration="900"
                    key={data.title}
                  >
                    <div className="single-widget my-9 media">
                      <div className="media-icon circle-sm bg-green mr-8">
                        <span className="count text-white gr-text-9">{index + 1}</span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          {data.title}
                        </h3>
                        <p className="gr-text-9 mb-0">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </Col>)
                }
              </Row>
              <Button href="#" className="gr-hover-y" variant="green" data-aos="fade-left"
                data-aos-duration="900">
                Mulai Proyek
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Wujudkan;
