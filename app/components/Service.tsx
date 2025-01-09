"use client";

import { NextPage } from 'next';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/service-card';

type ServiceName = 'personal-care' | 'companionship' | 'transportation' | 'meal-prep';

interface ServiceProps {
    serviceSlug: ServiceName;
    serviceTitle: string;
}

const Service: NextPage<ServiceProps> = ({ serviceSlug, serviceTitle }) => {
    const serviceDetails: { [key: string]: { shortDescription: string, longDescription: string, imageUrl: string } } = {
        "personal-care": {
            shortDescription: "Comprehensive personal care services tailored to individual needs.",
            longDescription: "Comprehensive personal care services tailored to individual needs.",
            imageUrl: "/personalcare.jpeg?height=400&width=600"
        },
        "companionship": {
            shortDescription: "Dedicated companionship and emotional support services.",
            longDescription: "Comprehensive personal care services tailored to individual needs.",
            imageUrl: "/companionship.jpg?height=400&width=600"
        },
        "housekeeping": {
            shortDescription: "Light housekeeping and meal preparation services.",
            longDescription: "Comprehensive personal care services tailored to individual needs.",
            imageUrl: "/housekeeping.jpg?height=400&width=600"
        },
        // ...other services...
    };

    const otherServices = [
        {
            title: "Personal Care Assistance",
            shortDescription: "Professional assistance with daily personal care needs.",
            imageUrl: "/personalcare.jpeg?height=400&width=600",
            href: "/services/personal-care"
        },
        {
            title: "Companionship",
            shortDescription: "Dedicated companionship and emotional support.",
            imageUrl: "/companionship.jpg?height=400&width=600",
            href: "/services/companionship"
        },
        {
            title: "Light Housekeeping",
            shortDescription: "Help with household tasks and meal preparation.",
            imageUrl: "/housekeeping.jpg?height=400&width=600",
            href: "/services/housekeeping"
        },
        {
            title: "Medication Reminders",
            shortDescription: "Timely medication reminders and monitoring.",
            imageUrl: "/placeholder.svg?height=400&width=600",
            href: "/services/medication"
        },
        {
            title: "Respite Care",
            shortDescription: "Temporary relief for primary caregivers.",
            imageUrl: "/placeholder.svg?height=400&width=600",
            href: "/services/respite"
        }
    ].filter(otherService => otherService.href !== `/services/${serviceSlug}`);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-teal-600 text-white pt-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="w-3/5 py-12">
                        <h1 className="text-4xl md:text-5xl md:text-left text-center font-bold mb-6" style={{ lineHeight: 1.3 }}>
                            {serviceTitle} Service
                        </h1>
                        <p className="text-xl text-teal-50 mb-8 md:text-left text-center">
                            {serviceDetails[serviceSlug]?.shortDescription}
                        </p>
                        <div className='md:text-left text-center mx-auto w-full'>
                            <Button size="lg" variant="secondary" asChild>
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0 flex flex-end w-3/5 py-12">
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
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Other Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherServices.map((otherService) => (
                            <ServiceCard key={otherService.href} {...otherService} description={otherService.shortDescription} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;
