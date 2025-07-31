import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "../layouts/RootLayout.module.css"; // misol uchun
import SendEmailInput from "../assets/icon-send.svg";
import QrLinks from "../assets/Frame 719.svg";
import SocialIcons from "../assets/Frame 741.svg";
import Layk from "../assets/layk.svg";
import Karzinka from "../assets/karzinka.svg";
import Search from "../assets/search.svg";

function RootLayout() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("HOME");

  //   const UserId: boolean = true2

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path === "/") setActiveLink("HOME");
    else if (path.includes("contact")) setActiveLink("CONTACT");
    else if (path.includes("about")) setActiveLink("ABOUT");
    else if (path.includes("sign-up")) setActiveLink("SIGNUP");

    if (path.includes("/user")) setActiveLink("user");
  }, [location.pathname]); // ✅ dependency array kiritildi

  return (
    <>
      <div className={styles.header_bg_container}>
        <div className="container">
          <header className={styles.siteheader}>
            <h1 className={styles.header_title}>Exclusive</h1>
            <nav>
              <ul className={styles.headerul}>
                <NavLink
                  to="/"
                  className={() =>
                    activeLink === "HOME" ? styles.link_active : ""
                  }
                >
                  <li className={styles.headerli}>Home</li>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={() =>
                    activeLink === "CONTACT" ? styles.link_active : ""
                  }
                >
                  <li className={styles.headerli}> Contact </li>
                </NavLink>
                <NavLink
                  to="/about"
                  className={() =>
                    activeLink === "ABOUT" ? styles.link_active : ""
                  }
                >
                  <li className={styles.headerli}> About </li>
                </NavLink>
                <NavLink
                  to="/sign-up"
                  className={() =>
                    activeLink === "SIGNUP" ? styles.link_active : ""
                  }
                >
                  <li className={styles.headerli}>Sign Up</li>
                </NavLink>
              </ul>
            </nav>
            {
              <div className={styles.headeritem}>
                <div className={styles.headermain}>
                  <input
                    className={styles.headerInput}
                    type="text"
                    placeholder="What are you looking for?"
                  />
                  <img className={styles.headerimg} src={Search} alt="" />
                </div>
                <NavLink to="wishlist">
                <img className={styles.header_end_icon} src={Layk} alt="layk" />
                </NavLink>
                <NavLink to="karzinka">
                  <img
                    className={styles.header_end_icon}
                    src={Karzinka}
                    alt="karzinka"
                  />
                </NavLink>
                <NavLink to="user">
                  <i className={`${styles.header_end_icon} ${styles.header_icon_user} fa-regular fa-user ${activeLink === "user" ? styles.active_user_page : ""}`}></i>
                </NavLink>
              </div>
            }
          </header>
        </div>
      </div>

      <Outlet />

      <div className={styles.footerContainer}>
        <div className="container">
          <div className={styles.footerMainWrapper}>
            <div className={styles.footerSection}>
              <h2 className={styles.footerTitle}>Exclusive</h2>
              <h3 className={styles.footerText}>Subscribe</h3>
              <h5 className={styles.footerSmallerText}>
                Get 10% off your first order
              </h5>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className={styles.input}
                />
                <img
                  src={SendEmailInput}
                  alt="Send"
                  className={styles.sendIcon}
                />
              </div>
            </div>
            <div className={styles.footerSection}>
              <h2 className={styles.footerTitle}>Support</h2>
              <h4 className={styles.footerSubText}>
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </h4>
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
              <p className={styles.downloadText}>
                Save $3 with App New User Only
              </p>
              <img src={QrLinks} alt="QR" className={styles.downloadImage} />
              <img
                src={SocialIcons}
                alt="Social Icons"
                className={styles.downloadImage}
              />
            </div>
          </div>
          <hr className={styles.footerHr} />
          <div className={styles.footerCopyright}>
            <p className={styles.copyrightText}>
              Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RootLayout;
