
import styles from '../About.module.css';

import twoNegr from '../../../assets/ikkitaNegr.png';
import tom from '../../../assets/Tom.png';
import emma from '../../../assets/Emma.png';
import smith from '../../../assets/Smith.png';
import money from '../../../assets/money.svg';
import kashlok from '../../../assets/kashlok.svg';
import dollar from '../../../assets/dollar.svg';
import shop from '../../../assets/shop.svg';
import car from '../../../assets/car.svg'
import headphone from '../../../assets/headphone.svg'
import checked from '../../../assets/headphone.svg'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.breadcrumb}>
      <a href="/" className={styles.link}>Home</a> / <span>About</span>
      </div>
    
     

      <div className={styles.storySection}>
        <div className={styles.text}>
      <h2 className={styles.title}>Our Story</h2>
          <p className={styles.firstP}>
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p className={styles.firstP}>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <img src={twoNegr} alt="Our Story" className={styles.storyImage} />
      </div>

      <div className={styles.stats}>
        <div className={styles.box}>
          <img src={shop} alt="" />
          <h3>10.5k</h3>
          <p>Sales active on our site</p>
          </div>
        <div className={styles.box}>
          <img src={dollar} alt="" />
          <h3>33k</h3>
          <p>Mopnthly Produduct Sale</p>
          </div>
        <div className={styles.box}>
          <img src={kashlok} alt="" />
          <h3>45.5k</h3>
          <p>Customer active on our site</p>
          </div>
        <div className={styles.box}>
          <img src={money} alt="" />
          <h3>25k</h3>
          <p>Annual gross sale on our site</p>
          </div>
      </div>
      
      <div className={styles.members}>
        <div className={styles.boxes}>
          <img src={tom} alt="" />

          <h1 className="big-text">Tom Cruise</h1>
          <p className="members-p">Founder & Chairman</p>
        </div>
          <div className={styles.boxes}>
          <img src={emma} alt="" />

          <h1 className="big-text">Emma Watson</h1>
          <p className="members-p">Managing Director</p>
        </div>
          <div className={styles.boxes}>
          <img src={smith} alt="" />

          <h1 className="big-text">Will Smith</h1>
          <p className="members-p">Product Designer</p>
        </div>
        <div className="member-two"></div>
        <div className="member-three"></div>
      </div>

      <div className={styles.services}>
        <div className={styles.service}>
          <img src={car} alt="Delivery" />
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className={styles.service}>
          <img src={headphone} alt="Support" />
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className={styles.service}>
          <img src={checked} alt="Guarantee" />
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
    
    
  );
};
    
    export default About;
    