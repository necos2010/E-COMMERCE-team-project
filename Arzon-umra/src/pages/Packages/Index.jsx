import Banner from "../Home/layout/banner/Banner";

import ScrollRevealWrapper from "../../components/AnimationScroll";

import { useEffect, useState } from "react";
import SelectTypes from "./layout/selectTypes/SelectTypes";
import Cards from "./layout/cards/Cards";

function Index() {
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isMobileTest = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    isMobileTest()
    window.addEventListener('resize', isMobileTest)

    return () => {
      window.removeEventListener("resize", isMobileTest)
    }

  },[])

  return (
    <>
    <ScrollRevealWrapper>
      <div className="container">
        <h2 className="umra-toplamlari-title">UMRA-TO'PLAMALRI</h2>
      </div>
    </ScrollRevealWrapper>

    <ScrollRevealWrapper>
      <div className="background-white-grey">
        <div className="container">
          {!isMobile && <Banner />}
        </div>
      </div>
    </ScrollRevealWrapper>

      <div className="container">
    <ScrollRevealWrapper>
        <SelectTypes />
    </ScrollRevealWrapper>
        <Cards />
      </div>   
    </>
  );
}

export default Index;
