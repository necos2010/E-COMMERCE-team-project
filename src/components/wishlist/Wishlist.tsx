import { useState, useContext } from "react";
import styles from "./Wishlist.module.css";
import { FaStar } from "react-icons/fa";
import { AddAndFavorite } from "../../layouts/RootLayout";
import Category from "../../assets/Category Rectangle.svg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
// datalar
import flashCards from "../../mockdata/FlashCards.json";
import TheMonthCards from "../../mockdata/theMonthCards.json";
import OurProducts from "../../mockdata/OurProducts.json";

interface IWishlistProducts {
  id: number;
  name: string;
  image: string;
  price: number;
  oldprice?: number;
  discount?: string;
  rating: number;
  reviews: string;
  colors?: string[];
  isNew?: boolean;
}

function Wishlist() {
  const [seeAll, setSeeAll] = useState(false);
  const { addCard, setAddCard, fovorite, setFovorite } =
    useContext(AddAndFavorite);

  const mockdata: IWishlistProducts[] = [
    ...flashCards,
    ...TheMonthCards,
    ...OurProducts,
  ];

  function RandomNumber(num: number) {
    const count = Math.min(4, num);
    const randNum: number[] = [];
    for (let i = 0; i < count; i++) {
      const numCal = Math.floor(Math.random() * num);
      if (randNum.includes(numCal)) {
        i--;
      } else {
        randNum.push(numCal);
      }
    }
    return randNum;
  }
  const randomFindNumber = RandomNumber(mockdata.length);

  const forYou = randomFindNumber.map((index) => mockdata[index]);
  const forYouData = seeAll ? mockdata : forYou;

  const removeCards = (id: number, name: string) => {
    setFovorite(
      fovorite.filter(
        (p: IWishlistProducts) => !(p.id === id && p.name === name)
      )
    );
  };

  const toggleFovorite = (product: IWishlistProducts) => {
    setFovorite((prev: IWishlistProducts[]) =>
      prev.some((p) => p.id === product.id && p.name === product.name)
        ? prev.filter((p) => !(p.id === product.id && p.name === product.name))
        : [...prev, product]
    );
  };

  const filteredForYouData = forYouData.filter(
    (product) =>
      !fovorite.some(
        (fav: IWishlistProducts) =>
          fav.id === product.id && fav.name === product.name
      )
  );

  const moveToAllBag = () => {
    setAddCard((prev: IWishlistProducts[]) => {
      const newItems = fovorite.filter(
        (fav: IWishlistProducts) =>
          !prev.some((p) => p.id === fav.id && p.name === fav.name)
      );
      return [...prev, ...newItems];
    });
    alert("products added your cart")
  };

  return (
    <div className="container">
      {/* Wishlist Header */}
      <div className={styles.wishlistHeader}>
        <h2 className={styles.wishlisth2}>Wishlist ({fovorite.length})</h2>
        <div className={styles.buttonsWrapper}>
          <button onClick={moveToAllBag} className={styles.wishlistButton}>
            Move All To Bag
          </button>
        </div>
      </div>

      {/* Wishlist productlar */}
      <div className={styles.productGrid}>
        {fovorite.map((product: IWishlistProducts, index: number) => (
          <div
            key={`${product.id}-${index}-${product.name}`}
            className={styles.productCard}
          >
            {product.isNew && (
              <p className={`${styles.discount} ${styles.new_item}`}>NEW</p>
            )}
            <div className={styles.imageWrapper}>
              <img
                src={`../src/assets/${product.image}`}
                alt={product.name}
                className={styles.productImage}
              />
              {product.discount && (
                <div className={styles.badge}>{product.discount}</div>
              )}
              <IoTrashOutline
                className={styles.trashIcon}
                onClick={() => removeCards(product.id, product.name)}
              />
            </div>

            <h4 className={styles.productTitle}>{product.name}</h4>

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
              {product.price && (
                <span className={styles.originalPrice}>
                  {product.oldprice && `$${product.oldprice}`}
                </span>
              )}
            </div>

            {!addCard.some(
              (p: IWishlistProducts) =>
                p.id === product.id && p.name === product.name
            ) && (
              <button
                className={styles.addToCartButton}
                onClick={() => setAddCard([...addCard, product])}
              >
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Just For You qismi */}
      <div className={styles.justForYouSection}>
        <div className={styles.justFor}>
          <img src={Category} alt="" />
          <h3 className={styles.justForYouTitle}>Just For You</h3>
        </div>
        <button
          onClick={() => setSeeAll(!seeAll)}
          className={styles.seeAllButton}
        >
          {seeAll ? "Hide All" : "See All"}
        </button>
      </div>

      <div className={styles.productGrid}>
        {filteredForYouData.map((product, index) => (
          <div
            key={`${product.id}-${index}-${product.name}`}
            className={styles.productCard}
          >
            {product.isNew && <p className={styles.new_item}>NEW</p>}
            <div className={styles.imageWrapper}>
              <img
                src={`../src/assets/${product.image}`}
                alt={product.name}
                className={styles.productImage}
              />
              {product.discount && (
                <div className={styles.badge}>{product.discount}</div>
              )}
              <MdOutlineRemoveRedEye
                className={styles.eye_icon}
                onClick={() => toggleFovorite(product)}
              />
            </div>

            <h4 className={styles.productTitle}>{product.name}</h4>

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
              {product.price && (
                <span className={styles.originalPrice}>
                  {product.oldprice && ` $${product.oldprice}`}
                </span>
              )}
            </div>

            {addCard.some(
              (p: IWishlistProducts) =>
                p.id === product.id && p.name === product.name
            ) && (
              <button
                className={styles.addToCartButton}
                onClick={() => setAddCard([...addCard, product])}
              >
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
