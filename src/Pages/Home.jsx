import About from "../components/About/About";
import BmiCalc from "../components/BMI/BmiCalc";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import Trainers from "../components/Trainers/Trainers";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <BmiCalc />
      <Pricing />
      <CtaBanner />
      <Footer />
    </>
  );
}

export default Home;
