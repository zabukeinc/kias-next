import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgBanner from "../assets/image/inner/about-banner.png";
import imgT1 from "../assets/image/inner/team-image-1.png";
import imgT2 from "../assets/image/inner/team-image-2.png";
import imgT3 from "../assets/image/inner/team-image-3.png";
import imgT4 from "../assets/image/inner/team-image-4.png";
import imgT5 from "../assets/image/inner/team-image-5.png";
import imgT6 from "../assets/image/inner/team-image-6.png";
import imgT7 from "../assets/image/inner/team-image-7.png";

const AboutPage = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">Our story</h2>
                  <p className="gr-text-8 mb-0">
                    Terdiri dari individu-individu pprofesional dan berpengalaman dengan latar belakang arsitektur, konsultasi desain dan konstruksi interior yang kuat dan mumpuni.
                  </p>
                  <p className="gr-text-8 mb-0">
                    Tidak hanya dalam lingkup lokal, proyek-proyek dari Asia, Eropa, dan Amerika Serikat juga telah menjadi portofolio Hyde Living. Hal tersebut menjadi aset berharga sebagai upaya memenuhi tuntutan referensi yang tak terbatas dari keinginan klien dalam mewujudkan rencana dan impian mereka.
                  </p>
                </div>
              </Col>
              <Col xs="12">
                <div className="banner-fluid-image pt-lg-9">
                  <img src={imgBanner} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                  Desain terbaik untuk momen terbaik.
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">
                  Kepuasan Anda menjadi tanggung jawab kami. Hyde Living berpengalaman lebih dari sepuluh tahun. Sudah ratusan rumah impian kami ciptakan.
                  </p>
                  <p className="gr-text-8 mb-0">
                  Kami akan selalu memberikan pelayanan terbaik untuk wujudkan hunian idaman Anda. Kami menciptakan interior hunian Anda menjadi tempat tinggal yang nyaman sesuai dengan keinginan anda.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pt-13 pt-lg-24 pb-lg-24 ">
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <div className="section-title text-center px-md-12 mb-lg-17 mb-10">
                  <h2 className="gr-text-3 mb-7 mb-lg-8">Meet our team</h2>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-left mb-lg-n15 mb-0">
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT1} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Joe Bridges</h3>
                    <p className="gr-text-9 mb-0 line-height-1">Founder</p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT2} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Jeffrey Walters</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Cheif Executive Officer
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT3} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Jason Reed</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Chief Technology Officer
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT4} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Nellie Padilla</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Creative Director
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT5} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Dean Bell</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Lead Programmer
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT6} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Pearl Brooks</h3>
                    <p className="gr-text-9 mb-0 line-height-1">
                      Digital Marketer
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13">
                <div className="team-card">
                  <div className="card-image">
                    <img src={imgT7} alt="" className="w-100" />
                  </div>
                  <div className="card-text pt-9">
                    <h3 className="gr-text-7 mb-2">Isaiah Griffin</h3>
                    <p className="gr-text-9 mb-0 line-height-1">UX Designer</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default AboutPage;
