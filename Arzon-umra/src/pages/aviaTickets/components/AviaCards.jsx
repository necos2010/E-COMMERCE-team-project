import React from "react";
import { NavLink } from "react-router-dom";

function AviaCards() {
  const AirData = [
    {
      id: 1,
      title: "Lorem Ipsum",
      img: "avia-tickets-card-img1.svg",
      comment: "lorem ipsum is dolor set amet",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      img: "avia-tickets-card-img2.svg",
      comment: "lorem ipsum is dolor set amet",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      img: "avia-tickets-card-img3.svg",
      comment: "lorem ipsum is dolor set amet",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      img: "avia-tickets-card-img4.svg",
      comment: "lorem ipsum is dolor set amet",
    },
  ];
  return (
    <div className="avia-cards-container">
      <div className="avia-cards-wrapper">
        {AirData.map((item) => {
          return (
            <div
              key={item.id}
              style={{ backgroundImage: `url(./${item.img})` }}
              className="avia-cards-content"
            >
              <h3>{item.title}</h3>
              <p>{item.comment}</p>
              <NavLink style={{textDecoration:"underline",color:"#D65200",fontSize:"16px",fontWeight:"400"}} to='avia-chiptalar/ko'proq>
                ko'proq
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AviaCards;
