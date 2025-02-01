import { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";
// import { NavLink } from "react-router-dom";

const Header = () => {
  const btnText = ["Order now!"];
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!isOpen);
    // console.log(isOpen);
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.className = theme; // <html> element par class apply karega
    localStorage.setItem("theme", theme); // Theme ko localStorage mein save karega
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.hdwp}>
      <nav className={styles.navhd}>
        <div className={styles.hdlgwp}>
          <p>Delivery</p>
        </div>

        <div
          className={
            isOpen
              ? `${styles.hdlk} ${styles.mbo}`
              : `${styles.hdlk} ${styles.mbc}`
          }
          onClick={toggleOpen}
        >
          <ul>
            <li>
              {/* <NavLink
                to={"#home"}
                className={({ isActive }) =>
                  isActive ? `${styles.acl}` : null
                }
              >
                Home
              </NavLink> */}

              <a href="#home" className={styles.acl}>
                Home
              </a>
            </li>
            <li>
              {/* <NavLink
                to={"#about"}
                className={({ isActive }) =>
                  isActive ? `${styles.acl}` : null
                }
              >
                About
              </NavLink> */}

              <a href="#about" className={styles.acl}>
                about
              </a>
            </li>
            <li>
              {/* <NavLink
                to={"#services"}
                className={({ isActive }) =>
                  isActive ? `${styles.acl}` : null
                }
              >
                Services
              </NavLink> */}

              <a href="#services" className={styles.acl}>
                Services
              </a>
            </li>
            <li>
              {/* <NavLink
                to={"#contact-us"}
                className={({ isActive }) =>
                  isActive ? `${styles.acl}` : null
                }
              >
                Contact us
              </NavLink> */}

              <a href="#contact-us" className={styles.acl}>
                Contact us
              </a>
            </li>
            <li>
              <i
                className={
                  theme === "light" ? "fa fa-toggle-on" : "fa fa-toggle-off"
                }
                onClick={toggleTheme}
              ></i>
            </li>
            <li className={styles.hct}>
              <div className={styles.hycc}></div>
              <div className={styles.hrcc}></div>
              <div className={styles.hocc}></div>
              <div className={styles.hgcc}></div>
            </li>
            <li>
              <div className={styles.hrlg}>
                <img src="./assets/imgs/america-flag.png" alt="america flag" />
                <span className={styles.helgt}>English</span>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.hbw}>
          <Button texts={btnText} />
        </div>

        <div className={styles.hmb} onClick={toggleOpen}>
          <i className="fa fa-th-large"></i>
        </div>
      </nav>

      <div className={styles.mu}>
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default Header;
