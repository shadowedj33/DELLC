import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Services from "./components/Services";
import OurProcess from "./components/OurProcess";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Tools />
        <Features />
        <Services />
        <OurProcess />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
