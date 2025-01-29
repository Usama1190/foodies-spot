import Button from "../common/Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.hdwp}>
      <nav className={styles.navhd}>
        <div className={styles.hdlgwp}>
          <p>Delivery</p>
        </div>

        <div className={styles.hdlk}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>icon</li>
            <li className={styles.hct}>
              <div className={styles.hycc}></div>
              <div className={styles.hrcc}></div>
              <div className={styles.hocc}></div>
              <div className={styles.hgcc}></div>
            </li>
            <li>
              <div>
                <img src="" alt="flag" />
                <span>English</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <Button text="Order now!" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
