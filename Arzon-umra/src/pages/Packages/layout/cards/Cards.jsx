import { useState } from "react";
import CardData from "../../../../data/cardsData";
import { NavLink } from "react-router-dom";
import ScrollRevealWrapper from "../../../../components/AnimationScroll";

function Cards() {
  const maxSeats = 30;
  const [showedCards, setShowedCards] = useState(false);

  const displayedCards = showedCards ? CardData : CardData.slice(0, 9);

  return (
    <div className="tariffs-cards-container packages-container">
      {displayedCards.map((item) => {
        const seatPercentage = ((maxSeats - item.seats) / maxSeats) * 100;
        return (
          <>
        <ScrollRevealWrapper>
          <div className="tariffs-card" key={item.id}>
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
                <img className="card-plane-img1" src={`/plane1.svg`} alt="" />
                <img className="card-plane-img2" style={{ transform: "rotate(45deg)" }} src={`/plane1.svg`} alt="" />
                <img className="card-plane-img3" style={{ transform: "rotate(281deg)" }} src={`/plane1.svg`} alt="" />
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
              From <span>{item.price}$</span>
            </p>

            <NavLink
              style={{ textDecoration: "none" }}
              to={`/umra-to'plamlari/ko'proq/${item.id}`}
              >
              <button className="more-btn">More</button>
            </NavLink>
          </div>
              </ScrollRevealWrapper>
          </>
        );
      })}
      {CardData.length > 9 && (
        <button
          className="cards-show-more"
          onClick={() => setShowedCards(!showedCards)}
        >
          {showedCards ? "Kamroq Ko'rsatish" : "Ko'proq Ko'rsatish"}
        </button>
      )}
    </div>
  );
}

export default Cards;
