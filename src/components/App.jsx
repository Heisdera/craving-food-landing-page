import CustomersReview from "./CustomersReview";
import FeaturedRestaurants from "./FeaturedRestaurants";
import Features from "./Features";
import Footer from "./Footer";
import FooterHero from "./FooterHero";
import Hero from "./Hero";
import Navbar from "./Navbar";
import OurPartners from "./OurPartners";
import Specials from "./Specials";

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
