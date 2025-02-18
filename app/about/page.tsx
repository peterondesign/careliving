import { NextPage } from 'next';
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/testimonial-card'

const About: NextPage = () => {
    return (
        <div>
            <section className="pt-32 pb-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xl mb-6">
                            At CareLiving, we provide personalized home care services to support seniors in need.
                        </p>
                        <p className="text-xl mb-6">
                            Our mission is to enhance quality of life through compassionate care while giving families peace of mind.
                        </p>
                        <p className="text-xl mb-6">
                            We honor family caregivers, or ‘carelivers,’ by partnering with them to deliver tailored solutions that bring comfort and dignity home.
                        </p>

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
