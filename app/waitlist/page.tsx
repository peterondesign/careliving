import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'


export default function Waitlist() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <div className="pt-48">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Join our Waitlist</h2>
                    <div className="flex flex-col w-full mx-auto justify-center md:flex-row gap-8">
                        <div className="w-full items-center lg:w-1/2 w-full md:px-16 px-8">
                            <Card>
                                <CardContent className="p-6">
                                    <iframe
                                        src="https://tally.so/embed/meYEQo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                        width="100%"
                                        height="640"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
}