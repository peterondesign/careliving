import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import Link from 'next/link'

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <div className="pt-48">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Us</h2>
                    <section className="bg-secondary rounded-2xl border border-secondary-dark my-20 mx-4 md:mx-20 p-8 md:p-20 animate-fadeIn">
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            <div className="flex-1">
                                <div>
                                    <p className="text-lg text-text-secondary mb-8">
                                        At CareLiving, we are dedicated to providing personalized home care services that support seniors in maintaining their independence and enhancing their quality of life.
                                    </p>
                                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Our Mission</h2>
                                    <p className="text-lg text-text-secondary mb-8">
                                        Our mission is to deliver compassionate care to our clients while also bringing comfort and dignity to their daily lives. We strive to offer families peace of mind, knowing their loved ones are in capable and caring hands.
                                    </p>
                                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Our Approach</h2>
                                    <p className="text-lg text-text-secondary">
                                        We honor family caregivers, whom we refer to as 'carelivers,' by collaborating closely with them to develop tailored care solutions. This partnership ensures that each client receives support that is customized to their unique needs and preferences, fostering a sense of security and well-being at home.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src="/personalcare.jpeg"
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