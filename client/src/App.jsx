import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Deals from "../components/Deals/Deals";
import CategorySection from "../components/CategorySection/CategorySection";
import SupplierBanner from "../components/SupplierBanner/SupplierBanner";
import Recommended from "../components/Recommended/Recommended";
import Services from "../components/Services/Services";
import Countries from "../components/Countries/Countries";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#f7fafc]">
      <Navbar />
      <Hero />
      <Deals />
      <CategorySection />
      <SupplierBanner />
      <Recommended />
      <Services />
      <Countries />
      <Newsletter />
      <Footer />
    </div>
  );
}
import Home from "./pages/Home";

export default function App() {
  return <Home />;
}
