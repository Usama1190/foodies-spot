import Button from '../common/Button/Button';
import styles from './Hero.module.css'

const Hero = ({ data }) => {
  const { title, description, btnText, btnLink , imgUrl, imgAlt } = data;
  return (
    <div className={styles.hrwp}>
      <div className={styles.hrciwp}>
        <div className={styles.hrcwp}>
          <h1 className={styles.hrt}>{title}</h1>
          <p className={styles.hrdc}>{description}</p>
          <Button text={btnText} link={btnLink} />
        </div>
        <div className={styles.hriwp}>
          <img src={imgUrl} alt={imgAlt} />
        </div>
      </div>
    </div>
  )
}

export default Hero
