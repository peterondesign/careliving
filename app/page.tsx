import { Button } from '@/components/ui/button'
import { ServiceCard } from '@/components/service-card'
import { TestimonialCard } from '@/components/testimonial-card'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-teal-600 text-white pt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="w-3/5 md:py-12 py-10">
            <h1 className="text-4xl md:text-5xl md:text-left text-center font-bold mb-6" style={{ lineHeight: 1.3 }}>
              Where Compassion Meets <span className="bg-teal-100 text-gray-900 rounded px-2">Home</span>
            </h1>
            <p className="text-xl text-teal-50 mb-8 md:text-left text-center">
              We provide quality home health and personal care, helping seniors with daily tasks to maintain their independence.
            </p>
            <div className='md:text-left text-center mx-auto w-full'>
              <Button size="lg" variant="secondary" className='text-xl' asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="-mt-6 md:mt-0 flex flex-end w-3/5">
            <img src="/landinghero.png" alt="Landing Hero" className="" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="md:pt-4 pt-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center md:mt-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mt-6">
              At CareLiving, we provide personalized home care services to support seniors in need.
            </p>
            <p className='text-xl mt-6'>Our mission is to enhance quality of life through compassionate care while giving families peace of mind. </p>

            <p className='text-xl mt-6'>We honor family caregivers, or ‘carelivers,’ by partnering with them to deliver tailored solutions that bring comfort and dignity home.</p>

            <Button size="lg" variant="secondary" className='text-xl mt-8' asChild>
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="md:pt-24 pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Personal Care Assistance"
              description="Comprehensive personal care services tailored to individual needs."
              imageUrl="/companionship.jpg?height=400&width=600"
              href="/services/personal-care"
            />
            <ServiceCard
              title="Companionship"
              description="Dedicated companionship and emotional support services."
              imageUrl="/personalcare.jpeg?height=400&width=600"
              href="/services/companionship"
            />
            <ServiceCard
              title="Respite Care"
              description="Short-term care services to provide relief for family caregivers."
              imageUrl="/respitecare.jpg?height=400&width=600"
              href="/services/respite"
            />
            <ServiceCard
              title="Medication Reminders"
              description="Assistance with medication management and reminders."
              imageUrl="/medicationreminder.jpg?height=400&width=600"
              href="/services/medication"
            />
            <ServiceCard
              title="Housekeeping"
              description="Light housekeeping and meal preparation services."
              imageUrl="/housekeeping.jpg?height=400&width=600"
              href="/services/housekeeping"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-20 pt-16 pb-32 bg-gray-50">
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
    </main>
  )
}

