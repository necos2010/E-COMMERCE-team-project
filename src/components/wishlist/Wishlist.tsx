import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Wishlist.module.css";
import { FaTrash, FaStar } from "react-icons/fa";

import Sumka from "../../assets/Sumka.svg";
import Diktafon from "../../assets/diktafon.svg";
import Plesteshin from "../../assets/plesteshin.png";
import Kiyim from "../../assets/kiyim.svg";
import Nootbok from "../../assets/nootbok.svg";
import Compyuter from "../../assets/compyuter.svg";
import Plesteshintwo from "../../assets/pleshteshin2.svg";
import Klaviatura from "../../assets/kalvuatura.svg";
import Category from "../../assets/Category Rectangle.svg";

// Mahsulotlar
const products = [
  {
    id: 1,
    title: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    discountPercent: 35,
    image: Sumka,
    badge: "-35%",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 2,
    title: "RGB liquid CPU Cooler",
    price: 1960,
    originalPrice: null,
    discountPercent: 0,
    image: Diktafon,
    badge: "",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 3,
    title: "GP11 Shooter USB Gamepad",
    price: 550,
    originalPrice: null,
    discountPercent: 0,
    image: Plesteshin,
    badge: "",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 4,
    title: "Quilted Satin Jacket",
    price: 750,
    originalPrice: null,
    discountPercent: 0,
    image: Kiyim,
    badge: "",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 5,
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    discountPercent: 35,
    image: Nootbok,
    badge: "-35%",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 6,
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    originalPrice: null,
    discountPercent: 0,
    image: Compyuter,
    badge: "",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 7,
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    originalPrice: null,
    discountPercent: 0,
    image: Plesteshintwo,
    badge: "NEW",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 8,
    title: "AK-900 Wired Keyboard",
    price: 200,
    originalPrice: null,
    discountPercent: 0,
    image: Klaviatura,
    badge: "",
    rating: 4.5,
    reviews: 65,
  },
];

function Wishlist() {
  const navigate = useNavigate();

  // LocalStorage'dan savatchani olish
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Wishlist va Just for You
  const wishlistProducts = products.slice(0, 4);
  const justForYouProducts = products.slice(4);

  // Har bir mahsulotni savatchaga qo‘shish
  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCart(updatedCart);

    navigate("/karzinka"); // Karzinka sahifasiga o'tkazish
  };

  return (
    <div className={styles.container}>
      {/* Wishlist Header */}
      <div className={styles.wishlistHeader}>
        <h2 className={styles.wishlisth2}>
          Wishlist ({wishlistProducts.length})
        </h2>
        <div className={styles.buttonsWrapper}>
          <button className={styles.wishlistButton}>Move All To Bag</button>
        </div>
      </div>

      {/* Wishlist productlar */}
      <div className={styles.productGrid}>
        {wishlistProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              {product.badge && (
                <div className={styles.badge}>{product.badge}</div>
              )}
              <FaTrash className={styles.trashIcon} />
            </div>

            <h4 className={styles.productTitle}>{product.title}</h4>

            <div className={styles.ratingSection}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < Math.floor(product.rating) ? "#f5b50a" : "#ccc"}
                />
              ))}
              <span className={styles.reviewCount}>({product.reviews})</span>
            </div>

            <div className={styles.priceSection}>
              <span className={styles.price}>${product.price}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <button
              className={styles.addToCartButton}
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Just For You qismi */}
      <div className={styles.justForYouSection}>
        <div className={styles.justFor}>
          <img src={Category} alt="" />
          <h3 className={styles.justForYouTitle}>Just For You</h3>
        </div>
        <button className={styles.seeAllButton}>See All</button>
      </div>

      <div className={styles.productGrid}>
        {justForYouProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              {product.badge && (
                <div className={styles.badge}>{product.badge}</div>
              )}
              <FaTrash className={styles.trashIcon} />
            </div>

            <h4 className={styles.productTitle}>{product.title}</h4>

            <div className={styles.ratingSection}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < Math.floor(product.rating) ? "#f5b50a" : "#ccc"}
                />
              ))}
              <span className={styles.reviewCount}>({product.reviews})</span>
            </div>

            <div className={styles.priceSection}>
              <span className={styles.price}>${product.price}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <button
              className={styles.addToCartButton}
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
