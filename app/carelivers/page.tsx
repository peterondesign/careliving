import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import Link from 'next/link'

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="pt-48">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">CareLivers (Careers)</h2>
          <section className="bg-secondary rounded-2xl border border-secondary-dark my-20 mx-4 md:mx-20 p-8 md:p-20 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  Coming Soon
                </h2>
                <p className="text-lg text-text-secondary mb-8">
                  We're always on the lookout for passionate individuals to join our team. Our careers page is coming soon with exciting opportunities that will help you grow and thrive with us.
                </p>
                </div>
              <div className="flex-1">
                <img
                  src="/resources.webp"
                  alt="Caring professional"
                  className="w-full h-[540px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}