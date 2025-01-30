import { useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [ toggle, setToggle ] = useState(true);
  const btnText = ["Order now!"];

  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className={styles.hdwp}>
      <nav className={styles.navhd}>
        <div className={styles.hdlgwp}>
          <p>Delivery</p>
        </div>

        <div className={styles.hdlk}>
          <ul>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/services'}>Services</NavLink>
            </li>
            <li>
              <NavLink to={'/contact-us'}>Contact us</NavLink>
            </li>
            <li><i className={toggle ? 'fa fa-toggle-on': 'fa fa-toggle-off'} onClick={handleClick}></i></li>
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

        <div>
          <Button texts={btnText} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
