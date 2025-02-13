import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Home from "@/components/Home";
import SearchBar from "@/components/SearchBar";

const HomePage = () => {
  return (
    <div className="space-y-5">
      <Hero />
      <SearchBar />
      <Home />
      <ContactUs />
    </div>
  );
};

export default HomePage;
