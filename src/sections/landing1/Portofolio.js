import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const datas = [
  {
    title: "Aura Branding Design",
    category: "Graphic Design",
    image: "https://hydeliving.co.id/images/dummy/portfolio/2_lebak_bulus/kids_bedroom.jpg",
    link: "/",
  },
  {
    title: "Bintaro Jaya House",
    category: "Design Interior",
    image: "https://hydeliving.co.id/images/dummy/portfolio/3_bintaro_jaya/kitchen.jpg",
    link: "/",
  },
  {
    title: "Rawa Mangun House",
    category: "Design Interior",
    image: "https://hydeliving.co.id/images/dummy/portfolio/4_rawamangun_house/kitchen.jpg",
    link: "/",
  },

]
const Portofolio = () => (
  <>
    {/* <!-- Portofolio section --> */}
    <div className="case-section pt-15 pb-14 py-lg-25">
      <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8">
            <div className="section-title text-center mb-11 mb-lg-21">
              <h3 className="sub-badge gr-text-12 text-uppercase text-green mb-7">
                Proyek Kami
              </h3>
              <h2 className="title gr-text-4 mb-0">
                Our works describe why we are the best in the interior and stuffs.
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12">
            <div className="card-columns mb-lg-12">
              {
                datas.map((data) =>
                  <div className="single-case d-inline-block px-md-6 mb-3 mb-lg-9 gr-hover-rotate-img" key={data.title}>
                    <a href="/product-details">
                      <div className="case-img overflow-hidden">
                        <img src={data.image} alt="" className="w-100 rounded-10" />
                      </div>
                      <div className="case-content px-5 px-md-9 py-9">
                        <span className="case-category gr-text-11 mb-2 d-inline-block gr-text-color-opacity">
                          {data.category}
                        </span>
                        <h3 className="case-title gr-text-6 mb-0">
                          {data.title}
                        </h3>
                      </div>
                    </a>
                  </div>
                )
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Portofolio;
