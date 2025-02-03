import { useContext, useEffect, useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";
import translations from "../../locals/translations";
import { LanguageContext } from "../../context/languageContext";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const { language, toggleLanguage } = useContext(LanguageContext);

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
          <a href="#">{translations[language].delivery}</a>
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
              <a href="#home">{translations[language].home}</a>
            </li>
            <li>
              <a href="#about">{translations[language].about}</a>
            </li>
            <li>
              <a href="#services">{translations[language].services}</a>
            </li>
            <li>
              <a href="#contact">{translations[language].contact}</a>
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
              <div className={styles.hrlg} onClick={toggleLanguage}>
                {language === "en" ? (
                  <>
                    <img
                      src="./assets/imgs/america-flag.png"
                      alt="english flag"
                    />
                    <span className={styles.helgt}>English</span>
                  </>
                ) : (
                  <>
                    <img
                      src="./assets/imgs/pakistan-flag.png"
                      alt="urdu flag"
                    />
                    <span className={styles.helgt}>Urdu</span>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.hbw}>
          {language === "en" ? (
            <Button texts={["Order now!"]} />
          ) : (
            <Button texts={["ابھی آرڈر کریں"]} />
          )}
        </div>

        <div className={styles.hmb} onClick={toggleOpen}>
          <i className="fa fa-th-large"></i>
        </div>
      </nav>

      <div className={styles.mu}>
        <a href="#">
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
