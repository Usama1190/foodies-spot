import BannerImage from "/assets/imgs/bannerImage.svg";
import styles from "/Images.module.css";
// import { secondSvgImage as mySVG2 } from "/assets/imgs/bannerImage2.svg";
// import { thirdSvgImage as mySVG3 } from "/assets/imgs/bannerImage3.svg";
// import { fourthSvgImage as mySVG4 } from "/assets/imgs/bannerImage4.svg";

const FirstImage = () => {
  return (
    <>
      <img src={BannerImage} alt="" className={styles.svg1} />
    </>
  );
};

export default FirstImage;
