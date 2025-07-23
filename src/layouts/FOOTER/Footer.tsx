import styles from "./Footer.module.css";
import QrLinks from "../../assets/Frame 719.svg";
import SocialIcons from "../../assets/Frame 741.svg";
import SendEmailInput from "../../assets/icon-send.svg";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMainWrapper}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Exclusive</h2>
          <h3 className={styles.footerText}>Subscribe</h3>
          <h5 className={styles.footerSmallerText}>Get 10% off your first order</h5>
          <div className={styles.inputWrapper}>
            <input type="text" placeholder="Enter Your Email" className={styles.input} />
            <img src={SendEmailInput} alt="Send" className={styles.sendIcon} />
          </div>
        </div>

        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Support</h2>
          <h4 className={styles.footerSubText}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h4>
          <h4 className={styles.footerSubText}>exclusive@gmail.com</h4>
          <h4 className={styles.footerSubText}>+88015-88888-9999</h4>
        </div>

        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Account</h2>
          <h4 className={styles.footerSubText}>My Account</h4>
          <h4 className={styles.footerSubText}>Login / Register</h4>
          <h4 className={styles.footerSubText}>Cart</h4>
          <h4 className={styles.footerSubText}>Wishlist</h4>
          <h4 className={styles.footerSubText}>Shop</h4>
        </div>

        <div className={styles.footerSection}>
          <h2 className={styles.footerTitle}>Quick Link</h2>
          <h4 className={styles.footerSubText}>Privacy Policy</h4>
          <h4 className={styles.footerSubText}>Terms Of Use</h4>
          <h4 className={styles.footerSubText}>FAQ</h4>
          <h4 className={styles.footerSubText}>Contact</h4>
        </div>

        <div className={styles.downloadWrapper}>
          <h2 className={styles.footerTitle}>Download App</h2>
          <p className={styles.downloadText}>Save $3 with App New User Only</p>
          <img src={QrLinks} alt="QR" className={styles.downloadImage} />
          <img src={SocialIcons} alt="Social Icons" className={styles.downloadImage} />
        </div>
      </div>

      <hr className={styles.footerHr} />

      <div className={styles.footerCopyright}>
        <p className={styles.copyrightText}>
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
