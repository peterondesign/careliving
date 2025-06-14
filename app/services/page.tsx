import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="pt-48">
          <Services />
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}