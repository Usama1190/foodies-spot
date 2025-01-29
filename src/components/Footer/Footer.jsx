import footerData from "../../utils/constant/footerData";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.ftwp}>
      <div className={styles.ftiwp}>
        {footerData.map((item, index) => {
          const { title, description, links, icons } = item;
          return (
            <div key={index} className={styles.ftcnwp}>
              <h2>{ title }</h2>
              {
                description?.map((item, index) => {
                  return (
                    <p key={index}>{ item }</p>
                  )
                })
              }
              {
                links && <ul>
                {
                  links?.map((item, index) => {
                    return (
                      <li key={index} className={styles.ftlan}>
                        <a href="#">{ item }</a>
                      </li>
                    )
                  })
                }
              </ul>
              }
              {
                icons?.map((item, index) => {
                  return (
                    <span key={index} className={styles.ftics}>{item}</span>
                  )
                })
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
