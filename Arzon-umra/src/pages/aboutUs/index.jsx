import { NavLink } from "react-router-dom"
import AdvantageTexts from "./layout/AdvantageTexts"

import Countup from './layout/Countup'
import Partner from "../Home/layout/partners/Partner"
import ScrollRevealWrapper from "../../components/AnimationScroll"

function index() {
  return (
    <div className='container'>
        <div className="about-us-container">
    <ScrollRevealWrapper>
        <img className="about-us-banner01" src="/biz_haqimizda_banner.svg" alt="banner" />
    </ScrollRevealWrapper>
    <ScrollRevealWrapper>
        <div className="about-us-texts-wrapper">
            <div className="about-us-texts-part1">
                    <h2>BIZ HAQIMIZDA</h2>
                    <div className="about-us-text-wrapper">
                        <p>Ravshan Odil — O’zbekistondagi birinchi raqamli "Arzon umra biletlar" nomli loyiha asoschisi.</p>
                        <p>Biz bu faoliyatimizni ijtimoiy tarmoqlar orqali boshladik. Barcha sifatli turfirmalarning paketlarini taqdim qilib bordik. Ko’pchilik bizdan turpaketlar va biletlar xarid qilib, bizning xizmatimizdan foydalangan holda ibodatlarini emin-erkin, mamnun holda ado etishdi</p>
                    </div>
            </div>
            <div className="about-us-texts-part2">
                <AdvantageTexts/>
            </div>
        </div>
    </ScrollRevealWrapper>

    <ScrollRevealWrapper>
        <Countup/>
    </ScrollRevealWrapper>
    
    <ScrollRevealWrapper>
        <NavLink style={{textAlign:"center",textDecoration:"none",color:"rgba(0, 0, 0, 1)"}} to="/bizning-hamkorlar">
          <h1 className="about-us-to-partners">BIZNING HAMKORLARIMIZ <i class="fa-solid fa-angle-right"></i></h1>
        </NavLink>
    </ScrollRevealWrapper>
    <ScrollRevealWrapper>
        <Partner/>
    </ScrollRevealWrapper>
        </div>
    </div>
  )
}

export default index
