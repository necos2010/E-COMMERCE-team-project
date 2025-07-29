import Advantage from "./layout/advantage/Advantage";
import Hotel from "./layout/hotel/Hotel";
import Info from "./layout/info/Info";
import Links from "./layout/location/Links";
import RequestInput from "./layout/input/requestInputs";
import MoreImg from "./layout/MoreImg";
import { useState, useEffect } from "react";
import ScrollRevealWrapper from "../../components/AnimationScroll";

function index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileTest = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    isMobileTest();
    window.addEventListener("resize", isMobileTest);

    return () => {
      window.removeEventListener("resize", isMobileTest);
    };
  }, []);
  return (
    <div className="packages-about-container">
      <div className="container">
        <ScrollRevealWrapper>
        {!isMobile && <Links/>}
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
        <MoreImg isMobile={isMobile} />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
        <h2 className="Madina-Makka">Umra ziyorati - Madina - Makka</h2>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
        <Info />  
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
        <div className="ziyorat-wrapper">
          <h2 className="ziyorat-haqida-title">Ziyorat haqida</h2>
          <p className="ziyorat-haqida-text">
            Safar oldi Axli ilmilar boshchiligida ilmiy majlis o’tkaziladi va
            tur firma tomonidan sovg’alar taqdim etiladi. Ziyoratchilar muqaddas
            Madina va Makka haqida to’liq Malumotga ega bo’ladilar. Safar oldi
            maxsus telegram guruh ochilib ziyoratchilarning oila a’zolari onlayn
            tarzda kunlik ziyorat kun tartibidan habardor qilib turiladi,
            shuningdek guruhda harkunlik ziyorat rejalar va majlislar vaqti
            haqida malumotlar berib boriladi. Madinada ziyoratchilar Ravzaga
            olib kiriladi Masjid-ul Nabaviy va Nabaviy atrofidagi G’ammoma
            Masjidi, Baqiy qabristoni, Madinada joylashgan Uhut tog’i, Qubo
            masjidi, Qiblatayin masjidi, xurmo bog’lari islom tarixiga oid
            muqaddas joylarda axli ilmilarimiz ziyoratchilarga ma’ruzalar qilib
            berishadi. Madinada farz namozlarni ado qilib bo’lib Umra amallariga
            oida maruza qilinadi ziyoratchilar ehromga kirishadi va Madinadagi
            Zulxulayfa masjidiga to’xtab umrani niyyat qilib, Talbiya aytib
            Makkaga qarab yo’lga chiqishadi. Yetib kelishlari bilan mahmonxonaga
            joylashishadi. Taomlanib biroz dam olib taxoratlarini yangilab Kaaba
            tamon yo’l olishadi. Ellik boshi va ishchi guruhlari bilan umra
            amallarini to’liq va mukkamal bajarishadi. Mehmonxonada bo’lib
            o’tadigan maruzadan so’ng ziyoratchilar Arofat tomon yo’l oladilar.
            Arofatga yetib borgach{" "}
          </p>
        </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
        <h2 className="more-page-hotel-title">Mehmonxona</h2>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
        <Hotel/>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
        <Advantage/>
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper>
        <RequestInput isMobile={isMobile}/>
        </ScrollRevealWrapper>
      </div>
    </div>
  );
}

export default index;
