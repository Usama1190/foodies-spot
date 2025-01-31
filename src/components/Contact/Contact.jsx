import styles from './Contact.module.css'
import Button from "../common/Button/Button"
import { contactData, contactInfo } from '../../utils/constant/contactData'

const Contact = () => {
  const { title, description } = contactData;
  const { tel, email, location } = contactInfo;
  const btnText = ['Contact us'];
  return (
    <section className={styles.cnwp}>
      <div className={styles.cncnwp}>
        <div className={styles.cnhdes}>
          <h2 className={styles.cnt}>{ title }</h2>
          <p className={styles.cndes}>{ description }</p>
        </div>
        <div>
          <ul className={styles.consw}>
            <li>Telephone: <a href="#">{ tel }</a></li>
            <li>Email: <a href="#">{ email }</a></li>
            <li>Location: <a href="#">{ location }</a></li>
          </ul>
        </div>
        <div className={styles.cbw}> 
          <Button texts={btnText} />
        </div>
      </div>
    </section>
  )
}

export default Contact
