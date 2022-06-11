import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Row, Col, Container } from "react-bootstrap";

const articles = [
  {
    title: "How to win any job you want. Get started with 5 steps.",
    category: "Lifestyle",
    date: '2021-01-01',
    image: 'https://hydeliving.s3.ap-southeast-3.amazonaws.com/uploads/1654851706132.png',
    link: "/"
  },
  {
    title: "How to articles",
    category: "Lifestyle",
    date: '2021-01-01',
    image: 'https://hydeliving.s3.ap-southeast-3.amazonaws.com/uploads/1654835195260.png',
    link: "/"
  },
  {
    title: "10 Desain Dapur Ini Bikin Masak Kayak Lagi Di Restoran 5 Michelin",
    category: "Lifestyle",
    date: '2021-01-01',
    image: 'https://rebel-env.s3.us-west-2.amazonaws.com/hydeliving/dev/hydeliving-api/uploads/1650520234075.png',
    link: "/"
  },
  {
    title: "Desain Stylish Buat Dapur Dijamin Bikin Kamu Makin Suka Masak di Rumah",
    category: "Lifestyle",
    date: '2021-01-01',
    image: 'https://hydeliving.s3.ap-southeast-3.amazonaws.com/uploads/1654576526775.png',
    link: "/"
  },

]
const IndexPage = () => {
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
              <Col lg="12" xl="12">
                <div className="px-md-12 text-left mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">Artikel Populer</h2>
                  <p className="gr-text-8 mb-0">
                    Temukan artikel populer menarik sebagai referensi bacaan Anda.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pt-13 pt-lg-24 pb-lg-24 ">
          <Container>
            <Row className="justify-content-left mb-lg-n15 mb-0">
              {
                articles.map((article) => <Col lg="3" md="4" xs="6" className="mb-lg-15 mb-13" key={article.title}>
                  <a href="/">
                    <div className="team-card">
                      <div className="card-image">
                        <img src={article.image} alt="" className="w-100" />
                      </div>
                      <div className="card-text pt-9">
                        <p className="gr-text-9 mb-0 line-height-1">{article.category}</p>
                        <p className="gr-text-9 mb-0 line-height-1">{article.date}</p>
                        <h3 className="gr-text-7 mb-2">{article.title}</h3>
                      </div>
                    </div>
                  </a>
                </Col>)
              }
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default IndexPage;
