import styles from "../../Home.module.css";
import Mockdata from "../../../../mockdata/FlashCards.json";
import { useContext } from "react";
import { AddAndFavorite } from "../../../../layouts/RootLayout";
export interface FlashCard {
  id: number;
  name: string;
  image: string;
  price: number;
  oldprice?: number;
  discount?: string;
  rating: number;
  reviews: string;
}

function FlashCards({ arrowBtn, showAllCards }: { arrowBtn: number, showAllCards: boolean }) {
  const { fovorite, setFovorite, addCard, setAddCard } =
    useContext(AddAndFavorite);

  const toggleFovorite = (product: FlashCard) => {
    setFovorite((prev: FlashCard[]) =>
      prev.some((p) => p.id === product.id && p.name === product.name)
        ? prev.filter((p) => !(p.id === product.id && p.name === product.name))
        : [...prev, product]
    );
  };

  const addToCard = (product: FlashCard) => {
    setAddCard((prev: FlashCard[]) => 
    prev.some((p) => p.id === product.id && p.name === product.name)
    ? prev.filter((p) => !(p.id === product.id && p.name === product.name))
    : [...prev, product]
    )
  }


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
    <div className={styles.flash_sales_cards_container}>
      <div className={styles.flash_cards_overflow}>
        <div className={styles.overflow_cards_trans} style={{ transform: `translateX(${arrowBtn}px)` }}>
          {Mockdata.map((item: FlashCard) => (
            <div className={styles.flash_sales_cards_content} key={item.id}>
              <p className={styles.discount}>{item.discount}</p>
              <div className={styles.icons_wrapper}>
                <i
                  className={`fa-regular fa-heart ${styles.fa_heart} ${
                    fovorite.some((p: FlashCard) => p.id === item.id && p.name === item.name) ? styles.active_class_heart : ""
                  }`}
                  onClick={() => toggleFovorite(item)}
                ></i>
                <img src="../src/assets/eye.svg" />
              </div>
              <div className={styles.card_item_img_wrapper}>
                <img
                  className={styles.card_item_img}
                  src={`../src/assets/${item.image}`}
                  alt={item.name}
                />
                {!addCard.some((p:FlashCard) => p.id === item.id && p.name === item.name) && (
                  <button
                    onClick={() => addToCard(item)}
                    className={styles.card_item_button}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
              <div className={styles.flash_card_about_content}>
                <h3 className={styles.flash_card_name}>{item.name}</h3>
                <div className={styles.flash_cards_cost}>
                  <p className={styles.now_cost}>${item.price}</p>
                  <p className={styles.oldprice}>${item.oldprice}</p>
                </div>
                <div className={styles.raiting_wrapper}>
                  {renderStars(item.rating)}
                  <p className={styles.reviews}>({item.reviews})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashCards;
