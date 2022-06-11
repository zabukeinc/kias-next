import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner pt-29 pb-md-11 bg-default-2">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-9">Hubungi Kami</h2>
                  <p className="gr-text-8 mb-13">
                    Hubungi kami sekarang
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-5 pb-md-33 bg-default-2 ">
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="mb-9">
                <Row>
                  <Col md="5" lg="4" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-green mr-7">
                        <i className="icon icon-phone-2"></i>
                      </div>
                      <div className="widget-text">
                        <p className="gr-text-7 mb-0">
                          +62 888 123 456
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="5" lg="4" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-green mr-7">
                        <i className="icon icon-email-83"></i>
                      </div>
                      <div className="widget-text">
                        <p className="gr-text-7 mb-0">
                          support@kiasdesign.com
                          <br />
                          contact@kiasdesign.com
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="5" lg="4" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-green mr-7">
                        <i className="icon icon-pin-3-2"></i>
                      </div>
                      <div className="widget-text">
                        <p className="gr-text-7 mb-0">
                          Jl. Somawinata No.11, Tanimulya, Kec. Ngamprah, Kabupaten Bandung Barat
                          <br />
                          Jawa Barat 40552
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <div className="login-form bg-white border-gray-3 px-8 pt-8 pb-9 px-sm-11 py-sm-11 shadow-1 rounded-10">
                  <form
                    name="contact2"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact2" />
                    <Row>
                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="name"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            First &amp; Last Name
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="i.e. John Doe"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="email"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Email
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="i.e. john@mail.com"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="phone"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Phone Number
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="i.e. +1-234-567-7890"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="subject"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Subject
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="i.e. I need a help"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="message"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="form-control gr-text-11 border-gray-3 gr-textarea-height"
                            required
                          ></textarea>
                        </div>
                      </Col>
                      <Col xs="3">
                        <div className="form-group button-block mt-3 ">
                          <Button
                            className="form-btn btn btn-primary w-100"
                            variant="green"
                            type="submit"
                          >
                            Kirim
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
