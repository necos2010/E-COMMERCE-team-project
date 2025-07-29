import { useParams } from "react-router-dom";
import mockData from "../../../data/cardsData";
import { useEffect, useState } from "react";

function MoreImg({ isMobile }) {
  const { id } = useParams();
  const item = mockData.find((data) => data.id === Number(id));

  return (
    <div className="more-img-container">
      {isMobile && <div className="more-page-more-img-style">
        <img src="/sat.svg" alt={item.company} />
        <h3 className="mobile-more-title-type">{item.type === "ECONOMY"? "Ekanom": item.type}</h3>
      </div>}
      <div className="more-img-wrapper">
        {!isMobile && (
          <>
            <img className="more-img-company" src="/white-sat.svg" alt={item.company} />
            <img className="more-img-company2" src="/white-uzbekistan.svg" alt={item.company2} />
            <div className="more-info">
              <h3 className="more-type">{item.type}</h3>
              <h3 className="more-price">{item.price} dollar</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MoreImg;
