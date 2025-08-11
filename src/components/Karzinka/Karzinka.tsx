import { useContext, useState } from "react";
import styles from "./Karzinka.module.css";
import { NavLink } from "react-router-dom";
import { AddAndFavorite } from "../../layouts/RootLayout";

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

function Karzinka() {
  const { addCard, setAddCard } = useContext(AddAndFavorite);
  const [coupon, setCoupon] = useState("");

  // Miqdorni o‘zgartirish
  const handleQuantityChange = (id: number, delta: number, name) => {
    const updated = addCard.map((item: IProducts) =>
      item.id === id && item.name === name
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
        : item
    );
    setAddCard(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  // Mahsulotni o‘chirish
  const handleRemove = (id: number) => {
    const updated = addCard.filter((item: IProducts) => item.id !== id);
    setAddCard(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  // Jami summa
  const total = addCard.reduce(
    (sum: number, item: IProducts) =>
      sum + (item.price * (item.quantity || 1)),
    0
  );

  return (
    <div className={styles.container}>
      {addCard.length === 0 ? (
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
                {addCard.map((item: IProducts, index: number) => (
                  <tr key={`${item.id}-${index}-${item.name}`}>
                    <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img src={`../src/assets/${item.image}`} alt={item.name} width={50} height={50} />
                      {item.name}
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td className={styles.quantityControls}>
                      <button onClick={() => handleQuantityChange(item.id, -1, item.name)}>-</button>
                      <span className={styles.quantityDisplay}>{item.quantity || 1}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1, item.name)}>+</button>
                    </td>
                    <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
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
