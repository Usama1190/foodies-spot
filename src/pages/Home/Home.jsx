import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import heroData from "../../utils/constant/heroData";

const Home = () => {
  return (
    <div>
      {heroData.map((item, index) => {
        if (index === 2) {
          return (
            <>
              <Hero key={index} data={item} />
              <Services />
            </>
          );
        }else {
          return <Hero key={index} data={item} />
        }
      })}
      <Contact />
    </div>
  );
};

export default Home;
