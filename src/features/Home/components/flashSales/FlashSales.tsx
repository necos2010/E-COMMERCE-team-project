import { useState, useEffect } from "react";
import styles from "../../Home.module.css";
import FlashCards from "./FlashCards";
import Mockdata from "../../../../mockdata/FlashCards.json";
import { NavLink } from "react-router-dom";

function FlashSales() {
  const countTime = 3 * 24 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState<number>(countTime);
  const [arrowBtn, setArrowBtn] = useState<number>(0);
  const [showAllCards, setShowAllCards] = useState(false)

  const cardWidth = 298;
  const visibleCards = 4;
  const maxShift = -(Mockdata.length - visibleCards) * cardWidth;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = String(Math.floor(timeLeft / (24 * 3600))).padStart(2, "0");
  const hours = String(Math.floor((timeLeft % (24 * 3600)) / 3600)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const renderTime = (label: string, value: string | number) => (
    <div className={styles.count_down_item}>
      <span className={styles.count_down_label}>{label}</span>
      <span className={styles.count_down_number}>{value}</span>
    </div>
  );

  const leftArrow = () => {
    setArrowBtn((prev) => Math.min(prev + cardWidth, 0));
  };

  const rightArrow = () => {
    setArrowBtn((prev) => Math.max(prev - cardWidth, maxShift));
  };

  return (
    <div className={styles.flash_sales_container}>
      <h2 className={styles.home_red_title}>Today's</h2>
      <div className={styles.flash_sales_content}>
        <div className={styles.flash_title_count_down_container}>
          <h2 className={styles.flash_sales_title}>Flash Sales</h2>
          <div className={styles.count_down}>
            {renderTime("Days", days)}
            <div className={styles.time_colon}>:</div>
            {renderTime("Hours", hours)}
            <div className={styles.time_colon}>:</div>
            {renderTime("Minutes", minutes)}
            <div className={styles.time_colon}>:</div>
            {renderTime("Seconds", seconds)}
          </div>
        </div>
        <div className={styles.flash_arrows}>
          <i onClick={leftArrow} className="fa-solid fa-arrow-left"></i>
          <i onClick={rightArrow} className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <FlashCards arrowBtn={arrowBtn} showAllCards={showAllCards}/>
      <div className={styles.view_all_products_and_hr}>
        <div className={styles.view_products_btn}>
          <NavLink to="/wishlist" state={{ seeAll: true}}>
            <button>View All Products</button>
          </NavLink>
        </div>
        <hr className={styles.flash_sales_hr} />
      </div>
    </div>
  );
}

export default FlashSales;
