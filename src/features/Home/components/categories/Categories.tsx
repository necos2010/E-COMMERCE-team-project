import { useState } from "react";
import styles from "../../Home.module.css";
import CategoriCard from "./CategoriesCards";
import Mockdata from "../../../../mockdata/CategoryCards.json";

function Categories() {
  const [arrowBtn, setArrowBtn] = useState<number>(0);

  const cardWidth = 170;
  const visibleCards = 6;
  const maxShift = -(Mockdata.length - visibleCards) * cardWidth;

  const leftArrow = () => {
    setArrowBtn((prev) => Math.min(prev + cardWidth, 0));
  };

  const rightArrow = () => {
    setArrowBtn((prev) => Math.max(prev - cardWidth, maxShift));
  };

  return (
    <div className={styles.flash_sales_container}>
      <h2 className={styles.home_red_title}>Categories</h2>
      <div className={styles.category_title_content}>
        <div className={styles.flash_title_count_down_container}>
          <h2 className={`${styles.flash_sales_title} ${styles.category_title}`}>Browse By Category</h2>
        </div>
        <div className={styles.flash_arrows}>
          <i onClick={leftArrow} className="fa-solid fa-arrow-left"></i>
          <i onClick={rightArrow} className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <CategoriCard arrowBtn={arrowBtn}/>
      <div className={styles.view_all_products_and_hr}>
        <hr className={styles.flash_sales_hr} />
      </div>
    </div>
  );
}

export default Categories;
