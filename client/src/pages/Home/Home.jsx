import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Deals from "../../components/Deals/Deals";
import HomeOutdoor from "../../components/HomeOutdoor/HomeOutdoor";
import Electronics from "../../components/Electronics/Electronics";
import SupplierBanner from "../../components/SupplierBanner/SupplierBanner";
import Recommended from "../../components/Recommended/Recommended";
import Services from "../../components/Services/Services";
import Regions from "../../components/Regions/Regions";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Deals />
      <HomeOutdoor />
      <Electronics />
      <SupplierBanner />
      <Recommended />
      <Services />
      <Regions />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;