import { NextPage } from 'next';
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/testimonial-card'

const About: NextPage = () => {
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xl mb-6">
                            At CareLiving, we call family caregivers 'carelivers' - bringing care to life at home. We ease their responsibilites and help prevent burnout by providing compassionate care and support.
                        </p>

                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img src="/team1.jpg" alt="Team Member 1" className="w-full h-auto mb-4" />
                            <h3 className="text-xl font-medium">John Doe</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="text-center">
                            <img src="/team2.jpg" alt="Team Member 2" className="w-full h-auto mb-4" />
                            <h3 className="text-xl font-medium">Jane Smith</h3>
                            <p className="text-gray-600">Chief Operating Officer</p>
                        </div>
                        <div className="text-center">
                            <img src="/team3.jpg" alt="Team Member 3" className="w-full h-auto mb-4" />
                            <h3 className="text-xl font-medium">Emily Johnson</h3>
                            <p className="text-gray-600">Head of Care Services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TestimonialCard
                            content="The caregivers have been a blessing for our family. Their compassion and dedication have made a world of difference."
                            author={{ name: "Sarah M." }}
                        />
                        <TestimonialCard
                            content="Professional, caring, and always reliable. We couldn't be happier with the service provided."
                            author={{ name: "James R." }}
                        />
                        <TestimonialCard
                            content="The peace of mind knowing our loved one is in good hands is priceless."
                            author={{ name: "Linda K." }}
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
