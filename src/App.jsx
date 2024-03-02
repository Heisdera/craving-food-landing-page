import CustomersReview from "./components/CustomersReview";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FooterHero from "./components/FooterHero";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurPartners from "./components/OurPartners";
import Specials from "./components/Specials";

function App() {
  return (
    <div className="bg-[#fff]">
      <Navbar />

      <Hero />

      <Specials />

      <OurPartners />

      <Features />

      <FeaturedRestaurants />

      <CustomersReview />

      <FooterHero />

      <Footer />
    </div>
  );
}

export default App;
