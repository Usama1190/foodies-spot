import serviceCardData from "../../utils/constant/serviceCardData.js"
import ServiceCard from "../common/ServiceCard/ServiceCard"
import styles from './Service.module.css'

const Services = () => {
  return (
    <div className={styles.swp}>
      <h2 className={styles.swph}>Some Services We Offer</h2>

      <div className={styles.scwp}>
        { serviceCardData.map((item, index) => {
            return (
                <ServiceCard key={index} data={item} />
            )
        })}
      </div>
    </div>
  )
}

export default Services
