import Banner from "./layout/banner/Banner";
import Partner from "./layout/partners/Partner";
import Cards from "./layout/cards/Cards";
import Comment from "./layout/comment/Comment";
import ScrollRevealWrapper from "../../components/AnimationScroll";
function Index() {
  return (
    <>
      <div className="background-white-grey">
        <ScrollRevealWrapper>
        <div className="container">
          <Banner />
        </div>
        </ScrollRevealWrapper>
      </div>
      <div className="container">
        <ScrollRevealWrapper>
        <Partner />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
        <h2 className="umra-safari-title">Umra safari tariflari</h2>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
        <Cards />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
        <Comment />
        </ScrollRevealWrapper>
      </div>
    </>
  );
}

export default Index;
