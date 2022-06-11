import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import FaqContent from "../sections/landing1/FaqContent";

const Faq = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        {/* <Hero /> */}
        <FaqContent />
      </PageWrapper>
    </>
  );
};
export default Faq;
