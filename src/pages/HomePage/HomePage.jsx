import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import heroData from "../../utils/constant/heroData.js";
import Header from "../../components/Header/Header.jsx";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext.jsx";

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const data = heroData[language];
  return (
    <div id="home">
      <Header />
      {data.map((item, index) => {
        if (index === 2) {
          return (
            <>
              <Hero key={index} data={item} />
              <Services />
            </>
          );
        } else {
          return <Hero key={index} data={item} />;
        }
      })}
      <Contact />
    </div>
  );
};

export default HomePage;
