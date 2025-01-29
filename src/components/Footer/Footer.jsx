import footerData from "../../utils/constant/footerData";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.ftwp}>
      <div className={styles.ftiwp}>
        {footerData.map((item, index) => {
          const { title, description, links } = item;
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
              <ul>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
