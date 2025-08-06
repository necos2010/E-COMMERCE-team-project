import styles from "../../Home.module.css";
import Mockdata from "../../../../mockdata/CategoryCards.json";
export interface CategoryCard {
  id: number;
  title: string;
  img: string
}

function CategoriesCards({ arrowBtn }: { arrowBtn: number}) {
  return (
    <div className={`${styles.flash_sales_cards_container} ${styles.category_cards_container}`}>
      <div className={styles.flash_cards_overflow}>
        <div className={styles.overflow_cards_trans} style={{ transform: `translateX(${arrowBtn}px)` }}>
          {Mockdata.map((item: CategoryCard) => (
            <div className={styles.category_card_content} key={item.id}>
                <img src={`../src/assets/${item.img}`} alt={item.title} />
                <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesCards;
