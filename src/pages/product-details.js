import React, { useState } from "react";
import { Container, Fade } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Showcase from "../sections/product/Showcase";

const ProductDetails = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Showcase />
        <div className="pb-md-19 pt-md-19 pt-13 pb-13">
          <Container>
            <nav className="pb-12">
              <div className="nav gr-nav-tabs " id="nav-tab" role="tablist">
                <a
                  href="/"
                  className={`nav-item nav-link gr-text-7  font-weight-bold ${active === 1 ? "active text-black" : ""
                    }`}
                  role="tab"
                  aria-selected={active === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(1);
                  }}
                >
                  Description
                </a>
                <a
                  className={`nav-item nav-link gr-text-7 font-weight-bold ${active === 2 ? "active text-black" : ""
                    }`}
                  role="tab"
                  aria-selected={active === 2}
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(2);
                  }}
                >
                  Profile
                </a>
                <a
                  className={`nav-item nav-link gr-text-7 font-weight-bold ${active === 3 ? "active text-black" : ""
                    }`}
                  role="tab"
                  aria-selected={active === 3}
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(3);
                  }}
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <Fade
                in={active === 1}
                role="tabpanel"
                className={`tab-pane ${active === 1 ? "active" : ""}`}
              >
                <div>
                  <div>
                    <p className="gr-text-9">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.Leverage agile frameworks to
                      provide a robust synopsis for high level overviews.
                    </p>
                    <p className="gr-text-9">
                      terative approaches to corporate strategy foster
                      collaborative thinking to further the overall value
                      proposition. Organically grow the holistic world view of
                      disruptive innovation via workplace diversity and
                      empowerment.
                    </p>
                    <p className="gr-text-9">
                      Capitalize on low hanging fruit to identify a ballpark
                      value added activity to beta test. Override the digital
                      divide with additional clickthroughs from DevOps.
                      Nanotechnology immersion along the information highway
                      will close the loop on focusing solely on the bottom
                      line.Capitalize on low hanging fruit to identify a
                      ballpark value added activity to beta test. Override the
                      digital divide with additional clickthroughs from DevOps.
                      Nanotechnology immersion along the information highway
                      will close the loop on focusing solely on the bottom line.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 2}
                role="tabpanel"
                className={`tab-pane ${active === 2 ? "active" : ""}`}
              >
                <div>
                  <div>
                    terative approaches to corporate strategy foster
                    collaborative thinking to further the overall value
                    proposition. Organically grow the holistic world view of
                    disruptive innovation via workplace diversity and
                    empowerment. Capitalize on low hanging fruit to identify a
                    ballpark value added activity to beta test. Override the
                    digital divide with additional clickthroughs from DevOps.
                    Nanotechnology immersion along the information highway will
                    close the loop on focusing solely on the bottom
                    line.Capitalize on low hanging fruit to identify a ballpark
                    value added activity to beta test. Override the digital
                    divide with additional clickthroughs from DevOps.
                    Nanotechnology immersion along the information highway will
                    close the loop on focusing solely on the bottom line.
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 3}
                role="tabpanel"
                className={`tab-pane ${active === 3 ? "active" : ""}`}
              >
                <div>
                  <div>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing solely on the bottom line.Capitalize on low
                    hanging fruit to identify a ballpark value added activity to
                    beta test. Override the digital divide with additional
                    clickthroughs from DevOps. Nanotechnology immersion along
                    the information highway will close the loop on focusing
                    solely on the bottom line.
                  </div>
                </div>
              </Fade>
            </div>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default ProductDetails;
