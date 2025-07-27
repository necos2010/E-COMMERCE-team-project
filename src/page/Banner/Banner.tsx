import styles from "./Banner.module.css";

function Banner() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.bannerHeader}>
          <div className={styles.bannerSite}>
          <div className={styles.bannerMain}>
            <img src="../src/assets/iphone-img.svg"alt="iPhone" />
            <h1>iPhone 14 Series</h1>
          </div>
            <h1 className={styles.bannerH1}>Up to 10% off Voucher</h1>
          <div className={styles.bannerItem}>
            <button className={styles.bannerbutton}>ShopNow</button>
            <img className={styles.bannerImg} src="../src/assets/arrow-right.svg" alt="Arrow" />
          </div>
          </div>
          <img src="../src/assets/big_phone.svg" alt="iPhone Big" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
