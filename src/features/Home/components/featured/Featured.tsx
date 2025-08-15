
import styles from "../../Home.module.css";
import { featureImages } from "./FeaturedImges"; 


const Featured = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.two_box}>
        <div className={styles.red_box}><button></button></div>
        <div className={styles.feature_text}> <span className={styles.featuredTag}>Featured</span></div>
      </div>
     
      <h2 className={styles.featuredTitle}>New Arrival</h2>

      <div className={styles.featuredGrid}>
        {/* PlayStation 5 */}
        <div className={styles.featuredItemLarge}>
          <img src={featureImages.ps5} alt="PlayStation 5" />
          <div className={styles.textOverlay}>
            <h3>PlayStation 5</h3>
            <p>
              Black and White version of the PS5 coming out on sale.
            </p>
            <button><a href="#">Shop Now</a></button>
           
          </div>
        </div>

        <div className={styles.rightColumn}>
          {/* Women's Collection */}
          <div className={styles.featuredItemWide}>
            <img src={featureImages.womens} alt="Women's Collections" />
            <div className={styles.textOverlay}>
              <h3>Women’s Collections</h3>
              <p>
                Featured woman collections that give you another vibe.
              </p>
              <button><a href="#">Shop Now</a></button>
            </div>
          </div>

          <div className={styles.bottomGrid}>
            {/* Speakers */}
            <div className={styles.featuredItemSmall}>
              <img src={featureImages.speakers} alt="Speakers" />
              <div className={styles.textOverlay}>
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <button><a href="#">Shop Now</a></button>
              </div>
            </div>

            {/* Perfume */}
            <div className={styles.featuredItemSmall}>
              <img src={featureImages.perfume} alt="Perfume" />
              <div className={styles.textOverlay}>
                <h3>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <button><a href="#">Shop Now</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
