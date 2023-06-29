import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Benefits from "../components/Benefits/Benefits";
import OurPartners from "../components/OurPartners/OurPartners";
import CtaSection from "../components/CtaSection/CtaSection";
import ContactUs from "../components/ContactUs/ContactUs";

function LandingPage() {
  return (
    <div className="max-w-screen-2xl bg-white dark:bg-neutral-800 mx-auto font-poppins text-neutral-900 dark:text-neutral-200">
      <Navbar />
      <Header />
      <Benefits />
      <OurPartners />
      <CtaSection />
      <ContactUs />
    </div>
  );
}

export default LandingPage;
