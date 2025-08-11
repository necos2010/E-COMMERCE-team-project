import React, { useEffect, useState } from "react";
import styles from "./Cheskout.module.css";
import Cheskbox from "../../assets/icon-checkbox.svg";
import Bkash from "../../assets/Bkash.svg"
import Visa from "../../assets/Visa.svg"
import Nagad from "../../assets/Nagad.svg"
import Mastercard from "../../assets/Mastercard.svg"

interface IProducts {
  id: number;
  name: string;
  image: string;
  price: number;
  oldprice?: string;
  discount?: string;
  rating: number;
  reviews: string;
  colors?: string[];
  isNew?: boolean;
  quantity?: number;
}

function Cheskout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <div className={styles.checkout}>
        <div className={styles.Cheskoutheader}>
          <h1>Billing Details</h1>
          <div className={styles.CheskoutSite}>
            <h3 className={styles.checkouth3}>First Name <span>*</span></h3>
            <input className={styles.checkoutInput} type="text" />

            <h3 className={styles.checkouth3}>Company Name</h3>
            <input className={styles.checkoutInput} type="text" />

            <h3 className={styles.checkouth3}>Street Address <span>*</span></h3>
            <input className={styles.checkoutInput} type="text" />

            <h3 className={styles.checkouth3}>Apartment, floor, etc. (optional)</h3>
            <input className={styles.checkoutInput} type="text" />

            <h3 className={styles.checkouth3}>Town/City <span>*</span></h3>
            <input className={styles.checkoutInput} type="text" />

            <h3 className={styles.checkouth3}>Phone Number <span>*</span></h3>
            <input className={styles.checkoutInput} type="text" />

            <h3 className={styles.checkouth3}>Email Address <span>*</span></h3>
            <input className={styles.checkoutInput} type="text" />
          </div>

          <div className={styles.checkoutItem}>
            <img src={Cheskbox} alt="" />
            <p>Save this information for faster check-out next time</p>
          </div>
        </div>

        <div className={styles.orderSummary}>
         {cart.map((item: IProducts) => (
  <div key={item.id} className={styles.cartItem}>
    <img src={`../src/assets/${item.image}`} alt={item.name} className={styles.itemImage} />
    <div className={styles.itemInfo}>
      <p>{item.name}</p>
    </div>
    <div className={styles.itemPrice}>
      ${ (item.price * item.quantity).toFixed(2) }
    </div>
  </div>
))}




<div className={styles.totalSummary}>
  <p><span>Subtotal:</span> <span>${total.toFixed(2)}</span></p>
  <hr />
  <p><span>Shipping:</span> <span>Free</span></p>
  <hr />
  <h3><span>Total:</span> <span>${total.toFixed(2)}</span></h3>
  <hr />
</div>


          <div className={styles.paymentMethods}>
  <label>
    <input type="radio" name="payment" defaultChecked />
    Bank
    <div className={styles.paymentIcons}>
      <img src={Bkash} alt="bkash" />
      <img src={Visa} alt="visa" />
      <img src={Mastercard} alt="mastercard" />
      <img src={Nagad} alt="nagad" />
    </div>
  </label>
  <label>
    <input type="radio" name="payment" />
    Cash on delivery
  </label>
</div>

          <div className={styles.couponApply}>
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>

          <button className={styles.placeOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cheskout;
