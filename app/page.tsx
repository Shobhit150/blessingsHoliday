import Details from "@/components/TripView";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import TripSteps from "@/components/TripSteps"
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Details/>
      <div className="p-4">
        
      <ContactUs/>
      </div>
      <FaqSection/>
      <TripSteps/>

      <Footer/>

      
    </div>
  );
}
