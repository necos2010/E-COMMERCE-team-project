import React from "react";

const partners = [
  "hamkorlar_1.svg",
  "hamkorlar_2.svg",
  "hamkorlar_3.svg",
  "hamkorlar_4.svg",
  "risola.svg",
  "hamkorlar_6.svg",
  "hamkorlar_7.svg",
  "hamkorlar_8.svg",
];

function Partner() {
  return (
    <div className="partner-wrapper">
      <div className="partner-slider">
        {[...partners, ...partners].map((partner, index) => (
          <div className="partner-item" key={index}>
            <img src={`/${partner}`} alt="partners" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;
