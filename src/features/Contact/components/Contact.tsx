import styles from "../Contact.module.css"
import phone from '../../../assets/icons-phone.svg';
import mail from '../../../assets/icons-mail.svg';


const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <a href="/" className={styles.link}>Home</a> / <span>Contact</span>
      </div>

      <div className={styles.content}>
        <div className={styles.infoBox}>
          <div className={styles.infoItem}>
            
    <img src={phone} alt="asd" />
                
            <h3 className={styles.write} >Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <hr />
          <div className={styles.infoItem}>
            <img src={mail} alt="" />
            <h3 className={styles.write}>Write To US</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form (o‘ng taraf) */}
        <form className={styles.form}>
          <div className={styles.inputsTop}>
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Your Email *" required />
            <input type="text" placeholder="Your Phone *" required />
          </div>
          <textarea placeholder="Your Message" rows={11} />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
