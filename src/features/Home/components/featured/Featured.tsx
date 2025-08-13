import React from "react";
import styles from "../../Home.module.css";
import FeaturedImges from "./FeaturedImges";

function Featured() {
  return (
    <div className={styles.featured_section_container}>
      <h2 className={styles.home_red_title}>Featured</h2>
      <div className={styles.new_arrival}>
        <h2 className={`${styles.flash_sales_title} ${styles.new_arrival_title}`}>
          New Arrival
        </h2>
        <FeaturedImges/>
      </div>
    </div>
  );
}

export default Featured;
