import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import WhyChoose from "./components/WhyChoose";
import Advice from "./components/Advice";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Stats />
      <WhyChoose />
      <Advice />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
