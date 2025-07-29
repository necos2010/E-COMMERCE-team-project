import React from "react";

function Banner() {
  const slides = [
    {
      img: "sat.svg",
      alt: "sat",
      bgImg: "banner",
      title: "Arzon Umra to’plamlari",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "sat.svg",
      alt: "sat",
      bgImg: "banner",
      title: "Arzon Umra to’plamlari",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "sat.svg",
      alt: "sat",
      bgImg: "banner",
      title: "Arzon Umra to’plamlari",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "sat.svg",
      alt: "sat",
      bgImg: "banner",
      title: "Arzon Umra to’plamlari",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      img: "sat.svg",
      alt: "sat",
      bgImg: "banner",
      title: "Arzon Umra to’plamlari",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="3500"
          >
            <div className="banner">
              <div className="part1">
                <div className="part1_wrapper">
                  <img src={item.img} alt={item.alt} />
                  <h1 className="banner-title">{item.title}</h1>
                  <p className="banner-text">{item.text}</p>
                </div>
                <button className="part1_btn">Batafsil</button>
              </div>
              <div className="part2">
                <img src={`${item.bgImg}.svg`} alt="Maka" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
