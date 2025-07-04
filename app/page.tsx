import Details from "@/components/TripView";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";


export default function Home() {
  return (
    <div>
      <Hero />
      <Details/>
      <div className="p-4">
      <ContactUs/>
      </div>
      
    </div>
  );
}
