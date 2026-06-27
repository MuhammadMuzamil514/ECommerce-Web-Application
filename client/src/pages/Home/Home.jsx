import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Deals from "../../components/Deals/Deals";
import HomeOutdoor from "../../components/HomeOutdoor/HomeOutdoor";
import Electronics from "../../components/Electronics/Electronics";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Deals />
      <HomeOutdoor />
      <Electronics />
    </>
  );
};

export default Home;