import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}