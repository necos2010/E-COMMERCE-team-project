import mockData from "../../../../data/cardsData";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Cards() {
  const maxSeats = 30;

  return (
    <div className="tariffs-cards-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {mockData.map((item) => {
          const seatPercentage = ((maxSeats - item.seats) / maxSeats) * 100;
            
          return (
            <SwiperSlide style={{display:"flex",justifyContent:"center"}} key={item.id}>
              <div className="tariffs-card">
                <div className="card-img-wrapper">
                  <img src={`/${item.company}.svg`} alt="company" />
                  <img src={`/${item.company2}.svg`} alt="company" />
                </div>
                <img
                  style={{ width: "92.70%" }}
                  src={`/card_image${item.imgNumber}.svg`}
                  alt="visit"
                />
                <h2 className="card-type">{item.type}</h2>
                <div className="plane">
                  <div className="city-name">
                    <p>{item.from}</p>
                    <p>{item.transit}</p>
                    <p>{item.to}</p>
                  </div>
                  <div className="plane-images-wrapper-deg">
                  <img
                    className="card-plane-img1"
                    src={`/plane1.svg`}
                    alt="plane"
                  />
                  <img
                    className="card-plane-img2"
                    style={{ transform: "rotate(45deg)" }}
                    src={`/plane1.svg`}
                    alt="plane"
                  />  
                  <img
                    className="card-plane-img3"
                    style={{ transform: "rotate(281deg)" }}
                    src={`/plane1.svg`}
                    alt="plane"
                    />
                    </div>
                  <hr className="card-hr" />
                  <div className="travel-time">
                    <p>{item.start}</p>
                    <p>{item.end}</p>
                  </div>
                </div>

                <div className="seats-left">
                  <p>{`${item.seats} Seats Left 🔥`}</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${seatPercentage}%` }}
                    ></div>
                  </div>
                </div>

                <p className="card-price">
                  Form <span>{item.price}</span>
                </p>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/ko'proq/${item.id}`}
                >
                  <button className="more-btn">More</button>
                </NavLink>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Cards;
