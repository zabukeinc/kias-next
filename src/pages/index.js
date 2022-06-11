import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Content1 from "../sections/landing1/Content1";
import Fact from "../sections/landing1/Fact";
import CTA1 from "../sections/landing1/CTA1";
import CTA2 from "../sections/landing1/CTA2";
import CTA3 from "../sections/landing1/CTA3";
import CaseStudies from "../sections/landing1/CaseStudies";
import Testimonial from "../sections/landing1/Testimonial";
import Wujudkan from "../sections/landing1/Wujudkan";
import AboutIndex from "../sections/landing1/AboutIndex";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Fact />
        <Wujudkan />
        <AboutIndex />
        <Content1 />
        <CTA1 />
        <CaseStudies />
        <CTA3 />
        <Testimonial />
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
