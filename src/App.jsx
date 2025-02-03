// import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from "./context/languageContext";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <LanguageProvider>
      <HomePage />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
