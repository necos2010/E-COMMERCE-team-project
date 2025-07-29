import AirBanner from "./components/AviaBanner"
import AviaCards from "./components/AviaCards"
import AviaContents from "./components/AviaContents"
import AviaOffers from "./components/AviaOffers"
import ScrollRevealWrapper from "../../components/AnimationScroll"

function index() {
  
  return (
    <>
    <div className="avia-banner-bg-container">
        <div className='container'>
    <ScrollRevealWrapper>
      <AirBanner/>
    </ScrollRevealWrapper>
        </div>
    </div>
    <div className="container">
    <ScrollRevealWrapper>
      <AviaCards/>
    </ScrollRevealWrapper>
    <ScrollRevealWrapper>
      <AviaOffers/>
    </ScrollRevealWrapper>
    <ScrollRevealWrapper>
      <AviaContents/>
    </ScrollRevealWrapper>
     </div>
     

    </>
  )
}

export default index
