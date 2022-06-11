import React from "react";
import PageWrapper from "../components/PageWrapper";
import Portofolio from "../sections/landing1/Portofolio";
import HeroPortofolio from "../sections/landing1/HeroPortofolio";
import CategoryPortofolio from "../sections/landing1/CategoryPortofolio";

const Portofolios = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <HeroPortofolio />
        {/* <CategoryPortofolio /> */}
        <Portofolio />
      </PageWrapper>
    </>
  );
};
export default Portofolios;
