import ScrollRevealWrapper from "../../components/AnimationScroll"

function Partners() {
    const ImgData = [
        "uzbekistan",
        "letsfly",
        "centerum",
        "hamkorlar_4",
        "risola",
        "qanotsharq",
        "flykhiva",
        "hamkorlar_8",
        "sat",
        "real_dreams",
        "avia_tour",
        "risola", //o'zgartirish kerak
    ]


  return (
    <div className="container">
    <ScrollRevealWrapper>
      <div className='partners-page-container'>
        <h2 className="partners-page-title">Bizning hamkorlar</h2>
        <div className="partners-page-wrapper">
          {ImgData.map((item) => (
            <div className="partner-page-content" key={item}>
                <img src={`/${item}.svg`} alt="partners" />
            </div>
          ))}
        </div>
      </div>
    </ScrollRevealWrapper>
    </div>
  )
}

export default Partners
