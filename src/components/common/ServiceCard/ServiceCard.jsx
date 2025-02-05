import ImageCom from '../../Image/ImageCom';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ data }) => {
  const { title, imgUrl, description, imgAlt, btnText, btnLink } = data;
  return (
    <div className={styles.scwp}>
      <h3 className={styles.sct}>{title}</h3>
      {/* <img className={styles.scig} src={imgUrl} alt={imgAlt} /> */}
      <ImageCom svgUrl={imgUrl} pathDark={''} pathLight={''} />
      <p className={styles.scdes}>{description}</p>
      <a href={btnLink}><b>{btnText}</b></a>
    </div>
  )
}

export default ServiceCard
