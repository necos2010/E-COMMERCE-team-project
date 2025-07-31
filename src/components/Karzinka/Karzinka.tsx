import React, { useState } from "react";
import styles from "./Karzinka.module.css";
import { NavLink } from "react-router-dom";

function Karzinka() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (id, delta) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <p className={styles.karzinkaP}>Savatingiz bo'sh</p>
      ) : (
        <>
          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img src={item.image} alt={item.title} width={50} height={50} />
                      {item.title}
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td className={styles.quantityControls}>
                      <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <span className={styles.quantityDisplay}>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => handleRemove(item.id)}>❌</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.karzinkaButton}>
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>

          <div className={styles.checkoutArea}>
            <div className={styles.couponSection}>
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button>Apply Coupon</button>
            </div>

            <div className={styles.cartTotal}>
              <h3>Cart Total</h3>
              <div className={styles.row}>
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className={styles.row}>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className={`${styles.row} ${styles.total}`}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <NavLink to="/cheskout">
                <button className={styles.checkoutBtn}>Proceed to checkout</button>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Karzinka;
