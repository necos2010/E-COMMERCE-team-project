import React from "react";
import styles from "../../Home.module.css";
import Mockdata from "../../../../mockdata/theMonthCards.json";

interface MonthCardProps {
  showCardBtn: boolean
}

function monthCards({ showCardBtn}:MonthCardProps) {
  const showAllCard = showCardBtn? Mockdata : Mockdata.slice(0, 4)
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <img
            key={i}
            src="../src/assets/yellowStar.svg"
            alt="full star"
            className={styles.star_icon}
          />
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <img
            key={i}
            src="../src/assets/half_star.svg"
            alt="half star"
            className={styles.star_icon}
          />
        );
      } else {
        stars.push(
          <img
            key={i}
            src="../src/assets/dark_star.svg"
            alt="empty star"
            className={styles.star_icon}
          />
        );
      }
    }
    return stars;
  };
  return (
    <div className={styles.month_card_container}>
        {Mockdata &&
          showAllCard.map((item) => (
            <div className={styles.month_card_content} key={item.id}>
              <div className={styles.month_card_img_container}>
                <img src={`../src/assets/${item.image}`} alt={item.name} />
              </div>
              <div className={styles.month_card_icons_content}>
                <i className="fa-regular fa-heart"></i>
                <img src="../src/assets/eye.svg" alt="" />
              </div>
              <h4 className={styles.month_card_title}>{item.name}</h4>
              <div className={styles.price_wrapper}>
                <p className={styles.now_cost}>{item.price}</p>
                <p className={styles.oldprice}>{item.oldprice}</p>
              </div>
              <div className={styles.raiting_wrapper}>
                  {renderStars(item.rating)}
                  <p className={styles.reviews}>({item.reviews})</p>
                </div>
            </div>
          ))}
    </div>
  );
}

export default monthCards;
