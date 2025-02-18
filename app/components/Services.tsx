"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'


const services = [
  {
    title: "Personal Care Assistance",
    description: "Comprehensive personal care services tailored to individual needs.",
    image: "/companionship.jpg",
    href: "/services/personal-care"
  },
  {
    title: "Companionship",
    description: "Dedicated companionship and emotional support services.",
    image: "/personalcare.jpeg",
    href: "/services/companionship"

  },
  {
    title: "Respite Care",
    description: "Short-term care services to provide relief for family caregivers.",
    image: "/respitecare.jpg",
    href: "/services/respite"
  },
  {
    title: "Medication Reminders",
    description: "Assistance with medication management and reminders.",
    image: "/medicationreminder.jpg",
    href: "/services/medication"
  },
  {
    title: "Housekeeping",
    description: "Light housekeeping and meal preparation services.",
    image: "/housekeeping.jpg",
    href: "/services/housekeeping"
  },
];
const Services = () => {
  return (
    <section className="pb-20 px-4 md:px-20 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            href={service.href}
            key={index}
            className='cursor-pointer'>
            <motion.div
              key={index}
              className="group relative h-[400px] rounded-2xl overflow-hidden"
              whileHover="hover"
              initial="initial"
              variants={{
                hover: {
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-8 flex flex-col justify-end">
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <Link
                    href={service.href}
                    className="inline-block bg-white hover:bg-white/90 text-teal-600 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Read More
                  </Link>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-white/90 mb-6">{service.description}</p>

              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;