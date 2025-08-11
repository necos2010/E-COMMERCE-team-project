import React from "react";
import styles from "../../Home.module.css";
import Mockdata from "../../../../mockdata/theMonthCards.json";
import { AddAndFavorite } from "../../../../layouts/RootLayout";
import { useContext } from "react";

interface MonthCardProps {
  showCardBtn: boolean;
}

interface IMonthCard {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: string;
  oldprice?: number;
}

function MonthCards({ showCardBtn }: MonthCardProps) {
  const { fovorite, setFovorite, addCard, setAddCard } =
    useContext(AddAndFavorite);

  const toggleFovorite = (product: IMonthCard) => {
    setFovorite((prev: IMonthCard[]) =>
      prev.some((p) => p.id === product.id && p.name === product.name)
        ? prev.filter((p) => !(p.id === product.id && p.name === product.name))
        : [...prev, product]
    );
  };

  const addToCard = (product: IMonthCard) => {
    setAddCard((prev: IMonthCard[]) =>
      prev.some((p) => p.id === product.id && p.name === product.name)
        ? prev.filter((p) => !(p.id === product.id && p.name === product.name))
        : [...prev, product]
    );
  };

  const showAllCard = showCardBtn ? Mockdata : Mockdata.slice(0, 4);
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
              <i
                className={`fa-regular fa-heart ${styles.fa_heart} ${
                  fovorite.some((p: IMonthCard) => p.id === item.id && p.name === item.name)
                    ? styles.active_class_heart
                    : ""
                }`}
                onClick={() => toggleFovorite(item)}
              ></i>
              <img src="../src/assets/eye.svg" alt="" />
            </div>
            {!addCard.some((p: IMonthCard) => p.id === item.id && p.name === item.name) && (
              <button
                onClick={() => addToCard(item)}
                className={styles.card_item_button}
              >
                Add to Cart
              </button>
            )}
            <h4 className={styles.month_card_title}>{item.name}</h4>
            <div className={styles.price_wrapper}>
              <p className={styles.now_cost}>${item.price}</p>
              <p className={styles.oldprice}>{item.oldprice && `$${item.oldprice}`}</p>
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

export default MonthCards;
