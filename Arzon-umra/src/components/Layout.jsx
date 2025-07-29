import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../pages/Home/layout/modal/Modal";
import ScrollToTop from "./ScrollToTop";
import ScrollRevealWrapper from "./AnimationScroll";

function Layout() {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [activeLink, setActiveLink] = useState("ASOSIY");
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  useEffect(() => {
    if (isOpenedMenu) {
      document.body.style.backgroundColor = "#B9B9B9";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.overflow = "";
    }
  }, [isOpenedMenu]);

  if (openModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("Asosiy".toUpperCase());
    else if (path.includes("umra-to'plamlari"))
      setActiveLink("umra-to'plamlari".toUpperCase());
    else if (path.includes("avia-chiptalar"))
      setActiveLink("avia-chiptalar".toUpperCase());
    else if (path.includes("biz-haqimizda"))
      setActiveLink("biz-haqimizda".toUpperCase());
    else if (path.includes("bizning-hamkorlar"))
      setActiveLink("bizning-hamkorlar".toUpperCase());
    else if (path.includes("video-sharxlar"))
      setActiveLink("video-sharxlar".toUpperCase());
  });

  return (
    <>
      <div
        className={
          isOpenedMenu ? "dark-background" : "header-big-color-container"
        }
      >
        <ScrollToTop/>
        <div className="container">
          <header
            className="header"
          >
            <div className="header-logo-wrapper">
              <img
                src="/logo.svg"
                alt="logo"
                className="logo-for-responsive"
              />
              <img
                style={{ marginLeft: "5px" }}
                src="/ashan-odil.svg"
                className="ashan-odil-img"
              />
            </div>
            {!isOpenedMenu && (
              <img
                onClick={() => setIsOpenedMenu(true)}
                className="head-menu"
                src="/header-menu.svg"
                alt="menu"
              />
            )}
            {isOpenedMenu && (
              <i
                className="toggle-header-icon"
                onClick={() => setIsOpenedMenu(false)}
                style={{ fontSize: "25px" }}
                class="fa-solid fa-xmark"
              ></i>
            )}
            <ul>
              <NavLink
                to="/"
                className={() => (activeLink === "ASOSIY" ? "link-active" : "")}
              >
                <li>ASOSIY</li>
              </NavLink>
              <NavLink
                to="umra-to'plamlari"
                className={() =>
                  activeLink === "UMRA-TO'PLAMLARI" ? "link-active" : ""
                }
              >
                <li>UMRA-TO'PLAMLARI</li>
              </NavLink>
              <NavLink
                to="/avia-chiptalar"
                className={() =>
                  activeLink === "AVIA-CHIPTALAR" ? "link-active" : ""
                }
              >
                <li>AVIA CHIPTALAR</li>
              </NavLink>
              <NavLink
                to="/biz-haqimizda"
                className={() =>
                  activeLink === "BIZ-HAQIMIZDA" ? "link-active" : ""
                }
              >
                <li>BIZ HAQIMIZDA</li>
              </NavLink>
              <NavLink
                to="/bizning-hamkorlar"
                className={() =>
                  activeLink === "BIZNING-HAMKORLAR" ? "link-active" : ""
                }
              >
                <li>BIZNING HAMKORLAR</li>
              </NavLink>
              <NavLink
                to="/video-sharxlar"
                className={() =>
                  activeLink === "VIDEO-SHARXLAR" ? "link-active" : ""
                }
              >
                <li>VIDEO SHARXLAR</li>
              </NavLink>
            </ul>
            <button
              className="btn-for-responsive"
              onClick={() => setOpenModal(true)}
            >
              Bog'lanish
            </button>
          </header>
          {isOpenedMenu && (
            <ul className="mobile-menu">
              <ScrollRevealWrapper>
              <NavLink
                onClick={() => isOpenedMenu(false)}
                to="/"
                className={() => (activeLink === "ASOSIY" ? "link-active" : "")}
              >
                <li>ASOSIY</li>
              </NavLink>
              <NavLink
                onClick={() => isOpenedMenu(false)}
                to="umra-to'plamlari"
                className={() =>
                  activeLink === "UMRA-TO'PLAMLARI" ? "link-active" : ""
                }
              >
                <li>UMRA-TO'PLAMLARI</li>
              </NavLink>
              <NavLink
                onClick={() => isOpenedMenu(false)}
                to="/avia-chiptalar"
                className={() =>
                  activeLink === "AVIA-CHIPTALAR" ? "link-active" : ""
                }
              >
                <li>AVIA CHIPTALAR</li>
              </NavLink>
              <NavLink
                onClick={() => isOpenedMenu(false)}
                to="/biz-haqimizda"
                className={() =>
                  activeLink === "BIZ-HAQIMIZDA" ? "link-active" : ""
                }
              >
                <li>BIZ HAQIMIZDA</li>
              </NavLink>
              <NavLink
                onClick={() => isOpenedMenu(false)}
                to="/bizning-hamkorlar"
                className={() =>
                  activeLink === "BIZNING-HAMKORLAR" ? "link-active" : ""
                }
              >
                <li>BIZNING HAMKORLAR</li>
              </NavLink>
              <NavLink
                onClick={() => isOpenedMenu(false)}
                to="/video-sharxlar"
                className={() =>
                  activeLink === "VIDEO-SHARXLAR" ? "link-active" : ""
                }
              >
                <li>VIDEO SHARXLAR</li>
              </NavLink>
                  </ScrollRevealWrapper>
            </ul>
          )}
          {openModal && <Modal setOpenModal={setOpenModal} />}
        </div>
      </div>
      {!isOpenedMenu && <Outlet />}
      {!isOpenedMenu && (
        <div className="background-white-grey">
          <div className="container">
            <footer className="footer">
              <div className="footer-container">
                <div className="footer-wrapper">
                  <ul className="footer-content footer-about-content">
                    <li className="footer-rashan">
                      <img src="/logo.svg" alt="logo" />
                      <h2 className="footer-titles">ashan odil</h2>
                    </li>
                    <li className="footer-about-i-text">
                      <img
                        className="footer-about-icons"
                        src="/Vector.svg"
                        alt="location"
                      />
                      <p>Muxbir ko'chasi 3А, 100000, Тоshkent, T oshkent</p>
                    </li>
                    <li className="footer-about-i-text">
                      <img
                        className="footer-about-icons"
                        src="/sms.svg"
                        alt="sms"
                      />
                      <p>ravshanodil2017@gmail.com</p>
                    </li>
                    <li className="footer-about-i-text">
                      <img
                        className="footer-about-icons"
                        src="/call.svg"
                        alt="call"
                      />
                      <p>+998883174774</p>
                    </li>
                  </ul>
                  <ul className="footer-content footer-content-2">
                    <li className="footer-map-title">
                      <h2 className="footer-titles">Xarita</h2>
                    </li>
                    <li>
                      <NavLink to="/">
                        <p>ASOSIY</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/umra-to'plamlari">
                        <p>UMRA-TO'PLAMLARI</p>
                      </NavLink>
                    </li>
                    <li onClick={() => setOpenModal(true)}>
                      <p>+998883174774</p>
                    </li>
                    <li>
                    <NavLink to="/biz-haqimizda">
                      <p>BIZ HAQIMIZDA</p>
                    </NavLink>
                    </li>
                  </ul>
                  <ul className="footer-content footer-content-3">
                    <li>
                      <h2 className="footer-titles">Bizni kuzatib boring</h2>
                    </li>
                    <li className="footer-icons-wrapper">
                      <img src="/Facebook.svg" alt="" />
                      <img src="/Instagram.svg" alt="" />
                      <img src="/YouTube.svg" alt="" />
                      <img src="/Telegram.svg" alt="" />
                    </li>
                  </ul>
                  <ul className="footer-content footer-content-4">
                    <li>
                      <h2 className="footer-titles pay-types">To’lov usuli</h2>
                    </li>
                    <li>
                      <img src="/1stCard.svg" alt="" />
                      <img src="/Payme.svg" alt="" />
                    </li>
                    <li>
                      <img src="/Humo.svg" alt="" />
                      <img src="/Uzcard.svg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
