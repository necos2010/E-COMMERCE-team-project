import { useState } from "react";
import styles from "../../Home.module.css";
import OurProductsCard from "./OurProductCards";
import Mockdata from "../../../../mockdata/CategoryCards.json";

function OurProducts() {
  const [showCardBtn, setShowCardBtn] = useState(false);

  return (
    <div
      className={`${styles.flash_sales_container} ${styles.our_product_section}`}
    >
      <h2 className={styles.home_red_title}>Our Products</h2>
      <div className={styles.category_title_content}>
        <div className={styles.flash_title_count_down_container}>
          <h2
            className={`${styles.flash_sales_title} ${styles.category_title}`}
          >
            Explore Our Products
          </h2>
        </div>
      </div>
      <OurProductsCard showCardBtn={showCardBtn} />
      <div className={styles.our_product_section_btn_wrapper}>
        <button
          className={styles.our_products_show_btn}
          onClick={() =>
            showCardBtn ? setShowCardBtn(false) : setShowCardBtn(true)
          }
        >
          {!showCardBtn ? "View All Products" : "Hide All Products"}
        </button>
      </div>
    </div>
  );
}

export default OurProducts;
