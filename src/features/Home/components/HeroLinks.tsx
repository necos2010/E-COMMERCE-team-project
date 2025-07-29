import React, { useEffect, useState } from "react";
import styles from "../Home.module.css";

function HeroLinks() {
  const [activeAngle, setActiveAngle] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = () => setActiveAngle(null);
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const links = [
    {
      title: "Woman’s Fashion",
      selectMode: ["All", "Dress", "Tops", "Skirts", "Pants"],
    },
    {
      title: "Man’s Fashion",
      selectMode: ["All", "Shirts", "T-Shirts", "Pants", "Shorts"],
    },
    { title: "Electronics" },
    { title: "Home & Lifestyle" },
    { title: "Medicine" },
    { title: "Sports & Outdoor" },
    { title: "Baby’s & Toys" },
    { title: "Groceries & Pets" },
    { title: "Health & Beauty" },
  ];

  return (
    <div className={styles.hero_links_container}>
      {links.map((link, i) => (
        <ul key={i} onClick={(e) => e.stopPropagation()}>
          <li>
            {link.title}{" "}
            {link.selectMode && (
              <i
                onClick={(e) => {
                  e.stopPropagation(); // faqat i bosilganda modal ochilsin, bodyga ketmasin
                  setActiveAngle(
                    activeAngle === link.title ? null : link.title
                  );
                }}
                className={`fa-solid fa-angle-right ${
                  link.title === activeAngle ? styles.active_angle : ""
                }`}
              ></i>
            )}
          </li>
          {activeAngle === link.title && (
            <div className={styles.modal_content}>
              {link.selectMode?.map((mode, j) => (
                <li key={j} className={styles.select_mode}>
                  {mode}
                </li>
              ))}
            </div>
          )}
        </ul>
      ))}
    </div>
  );
}

export default HeroLinks;
