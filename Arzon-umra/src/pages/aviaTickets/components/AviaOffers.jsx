import { img, title } from "framer-motion/client";
import React from "react";
import { NavLink } from "react-router-dom";

function AviaOffers() {
  const offers = [
    {
      id: 1,
      country: "Dubai",
      Pirce: "500$",
      title: "Lorem Ipsum",
      comment: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "SpecialOffers1",
    },
    {
      id: 2,
      country: "Misr",
      Pirce: "300$",
      title: "Lorem Ipsum",
      comment: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "SpecialOffers2",
    },
    {
      id: 3,
      country: "Turkya",
      Pirce: "550$",
      title: "Lorem Ipsum",
      comment: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "SpecialOffers3",
    },
  ];

  return (
    <>
      <div className="Offer-card-container">
        <h2 style={{ paddingBottom: "30px", margin: "0" }}>MAXSUS TAKLIFLAR</h2>
        <div className="offer-card-wrapper">
          {offers.map((item) => {
            return (
              <>
                <div
                  style={{
                    backgroundImage: `url(./${item.img}.svg)`,
                  }}
                  className="offer-card-content"
                  key={item.id}
                >
                  <h3 className="offer-card-title">
                    {item.country} {item.Pirce}
                  </h3>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.comment}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AviaOffers;
