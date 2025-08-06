import styles from "../Home.module.css";

function categoriesBanner() {
  const bannerTime = [
    { title: "Days", countDown: 5 },
    { title: "Hours", countDown: 23 },
    { title: "Minutes", countDown: 59 },
    { title: "Seconds", countDown: 35 },
  ];
  return (
    <div className={styles.category_banner_container}>
      <div className={styles.categories_banner_list}>
        <p className={styles.categories_banner_category_title}>Categories</p>
        <h2>Enhance Your Music Experience</h2>
        <div className={styles.category_circle_wrapper}>
          {bannerTime.map((item, i) => (
            <div className={styles.circle} key={i}>
              <h4>{item.countDown}</h4>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button className={styles.buy_now_button}>Buy Now!</button>
      </div>
      <div className={styles.categories_banner_bg_img}>
        {/* <div className={styles.banner_img_content}>
        </div> */}
        <img src="../src/assets/radio.png" />
      </div>
    </div>
  );
}

export default categoriesBanner;
