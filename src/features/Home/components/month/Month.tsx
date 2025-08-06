import { useState } from "react";
import styles from "../../Home.module.css";
import MonthCard from "./TheMonthCards";
import Mockdata from "../../../../mockdata/CategoryCards.json";

function Month() {
  const [showCardBtn, setShowCardBtn] = useState(false)

  return (
    <div className={`${styles.flash_sales_container} ${styles.month_bg_container}`}>
      <h2 className={styles.home_red_title}>This Month</h2>
      <div className={styles.category_title_content}>
        <div className={styles.flash_title_count_down_container}>
          <h2 className={`${styles.flash_sales_title} ${styles.category_title}`}>Best Selling Products</h2>
        </div>
        <div className={styles.flash_arrows}>
            <button className={styles.month_products_show_btn} onClick={() => showCardBtn? setShowCardBtn(false): setShowCardBtn(true)}>
                {!showCardBtn? "View All": "Hide All"}
            </button>
        </div>
      </div>
      <MonthCard showCardBtn={showCardBtn}/>
    </div>
  );
}

export default Month;
