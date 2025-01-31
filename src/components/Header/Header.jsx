import { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const btnText = ["Order now!"];
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

        <div className={styles.hdlk}>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/contact-us"}>Contact us</NavLink>
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
      </nav>
    </div>
  );
};

export default Header;
