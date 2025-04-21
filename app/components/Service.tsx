"use client";

import { NextPage } from 'next';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/service-card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import Link from 'next/link';

type ServiceName = 'personal-care' | 'companionship' | 'medication' | 'respite' | 'housekeeping' | 'meal-preparation' | 'mobility-assistance' | 'therapy-services' | 'transportation' | 'skilled-nursing' 

interface ServiceProps {
    serviceSlug: ServiceName;
    serviceTitle: string;
}

const Service: NextPage<ServiceProps> = ({ serviceSlug, serviceTitle }) => {
    const serviceDetails: { [key: string]: { shortDescription: string, longDescription: string, imageUrl: string } } = {
        "personal-care": {
            shortDescription: "We assist with daily tasks, promoting independence and dignity through respectful, professional care.",
            longDescription: "We assist with daily tasks like bathing, dressing, and grooming, helping clients maintain their independence and dignity. Our carelivers ensure these essential routines are handled with respect and professionalism, fostering comfort and confidence.",
            imageUrl: "/personalcare.jpeg?height=400&width=600"
        },
        "companionship": {
            shortDescription: "CareLiving provides emotional support and meaningful connections, fostering joy and reducing isolation.",
            longDescription: "CareLiving offers emotional support and meaningful interactions, reducing feelings of loneliness and isolation. From engaging conversations to shared activities, our carelivers enhance the joy and connection in daily life",
            imageUrl: "/companionship.jpg?height=400&width=600"
        },
        "respite": {
            shortDescription: "We offer respite care, ensuring loved ones are safe while caregivers recharge and find peace of mind.",
            longDescription: "Family caregivers deserve time to recharge. We provide short-term care, ensuring loved ones remain safe and supported. Our flexible respite services bring peace of mind, allowing caregivers to focus on their own well-being.",
            imageUrl: "/respitecare.jpg?height=400&width=600"
        },
        "medication": {
            shortDescription: "We provide timely medication reminders, supporting health, safety, and family peace of mind.",
            longDescription: "We help clients stay on track with prescribed medications through timely and accurate reminders. This service promotes health and safety while easing the burden on families.",
            imageUrl: "/medicationreminder.jpg?height=400&width=600"
        },
        "housekeeping": {
            shortDescription: "Light housekeeping and meal preparation services.",
            longDescription: "We handle light cleaning and meal prep, keeping homes safe, clean, and stress-free.",
            imageUrl: "/housekeeping.jpg?height=400&width=600"
        },
        "meal-preparation": {
            shortDescription: "Nutritious meal planning and preparation tailored to dietary needs.",
            longDescription: "Our caregivers prepare healthy, delicious meals based on your preferences and dietary requirements, ensuring proper nutrition and enjoyable dining experiences.",
            imageUrl: "/meal-preparation.jpeg?height=400&width=600"
        },
        "mobility-assistance": {
            shortDescription: "Safe mobility support and transfer assistance at home.",
            longDescription: "We help clients move safely around their home, providing transfer assistance, fall prevention, and support with walking aids for greater independence.",
            imageUrl: "/mobility.jpeg?height=400&width=600"
        },
        "transportation": {
            shortDescription: "Transportation and errand services for appointments and daily needs.",
            longDescription: "We provide reliable transportation to medical appointments, social outings, and errands, helping clients stay active and connected.",
            imageUrl: "/transportation.jpg?height=400&width=600"
        },
        "skilled-nursing": {
            shortDescription: "Professional nursing care: wound care, medication management, post-surgical care.",
            longDescription: "Our skilled nurses deliver advanced care at home, including wound care, medication management, and post-surgical support, ensuring optimal recovery and health.",
            imageUrl: "/nursing.jpg?height=400&width=600"
        },
        "therapy-services": {
            shortDescription: "Physical, occupational, and speech therapy services at home.",
            longDescription: "Licensed therapists provide physical, occupational, and speech therapy in the comfort of your home, supporting rehabilitation and improved quality of life.",
            imageUrl: "/therapy.jpeg?height=400&width=600"
        },
    };

    const otherServices = [
        {
            title: "Personal Care Assistance",
            shortDescription: "Help with bathing, dressing, and hygiene.",
            imageUrl: "/personalcare.jpeg?height=400&width=600",
            href: "/services/personal-care"
        },
        {
            title: "Companionship",
            shortDescription: "Emotional support and social engagement.",
            imageUrl: "/companionship.jpg?height=400&width=600",
            href: "/services/companionship"
        },

        {
            title: "Respite Care",
            shortDescription: "Short-term relief for family caregivers.",
            imageUrl: "/respitecare.jpg?height=400&width=600",
            href: "/services/respite"
        }, {
            title: "Medication Reminders",
            shortDescription: "Ensuring timely and accurate medication intake.",
            imageUrl: "/medicationreminder.jpg?height=400&width=600",
            href: "/services/medication"
        },
        {
            title: "Housekeeping",
            shortDescription: "Light cleaning and meal preparation.",
            imageUrl: "/housekeeping.jpg?height=400&width=600",
            href: "/services/housekeeping"
        },
        {
            title: "Meal Preparation",
            shortDescription: "Healthy meal planning and cooking.",
            imageUrl: "/meal-preparation.jpeg?height=400&width=600",
            href: "/services/meal-preparation"
        },
        {
            title: "Mobility Assistance & Transfers",
            shortDescription: "Support with mobility and transfers.",
            imageUrl: "/mobility.jpeg?height=400&width=600",
            href: "/services/mobility-assistance"
        },
        {
            title: "Transportation & Errands",
            shortDescription: "Reliable transport for appointments and errands.",
            imageUrl: "/transportation.webp?height=400&width=600",
            href: "/services/transportation"
        },
        {
            title: "Skilled Nursing",
            shortDescription: "Wound care, medication management, post-surgical care.",
            imageUrl: "/nursing.jpg?height=400&width=600",
            href: "/services/skilled-nursing"
        },
    ].filter(otherService => otherService.href !== `/services/${serviceSlug}`);

    return (
        <div>
            {/* Hero Section */}
            <Header />
            <section className="bg-teal-600 text-white pt-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="w-3/5 my-24 md:py-12">
                        <h1 className="text-4xl md:text-5xl md:text-left text-center font-bold mb-6" style={{ lineHeight: 1.3 }}>
                            {serviceTitle} Service
                        </h1>
                        <p className="text-xl text-teal-50 mb-8 md:text-left text-center">
                            {serviceDetails[serviceSlug]?.shortDescription}
                        </p>
                        <div className='md:text-left text-center mx-auto w-full'>
                            <Link
                                href="/contact"
                                className="inline-block bg-white hover:bg-white/90 text-teal-600 px-8 py-4 rounded-2xl transition-colors font-semibold"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="-mt-6 md:mt-0 flex flex-end w-3/5 py-12">
                        <img src={serviceDetails[serviceSlug]?.imageUrl} alt="Service Hero" className="rounded-xl" />
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">About {serviceTitle} Service</h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xl mb-6">
                            {serviceDetails[serviceSlug]?.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Other Services Section */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Other Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherServices.map((otherService) => (
                            <ServiceCard key={otherService.href} {...otherService} description={otherService.shortDescription} />
                        ))}
                    </div>
                </div>
            </section>
            <ContactCTA />
            <Footer />
        </div>
    );
};

export default Service;
