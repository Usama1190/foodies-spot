import { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  const btnText = ["Order now!"];
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!isOpen);
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
              <a
                href="#home"
                // onClick={homeActive}
                // className={activeSection === "home" ? styles.acl : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                // onClick={aboutActive}
                // className={activeSection === "about" ? styles.acl : ""}
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#services"
                // onClick={servicesActive}
                // className={activeSection === "services" ? styles.acl : ""}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                // onClick={contactActive}
                // className={activeSection === "contact" ? styles.acl : ""}
              >
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
