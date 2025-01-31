import Hero from "../../components/Hero/Hero";
import heroData from "../../utils/constant/heroData";

const AboutPage = () => {
  return (
    <div>
      {heroData.map((item, index) => {
        if (index === 1) {
          return (
            <>
              <Hero key={index} data={item} />
            </>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default AboutPage;
