import { useState, useEffect } from "react";
import styles from "../Home.module.css";
import FlashCards from "./FlashCards";

function FlashSales() {
  const initialTime = 3 * 24 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = String(Math.floor(timeLeft / (24 * 3600))).padStart(2, "0");
  const hours = String(Math.floor((timeLeft % (24 * 3600)) / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const renderTime = (label: string, value: string | number) => (
    <div className={styles.count_down_item}>
      <span className={styles.count_down_label}>{label}</span>
      <span className={styles.count_down_number}>{value}</span>
    </div>
  );

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
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <FlashCards/>
    </div>
  );
}

export default FlashSales;
