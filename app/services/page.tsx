import { ServiceCard } from '@/components/service-card'

const services = [
  {
    title: "Personal Care Assistance",
    description: "Professional assistance with daily personal care needs.",
    imageUrl: "/personalcare.jpeg?height=400&width=600",
    href: "/services/personal-care"
  },
  {
    title: "Companionship",
    description: "Dedicated companionship and emotional support.",
    imageUrl: "/companionship.jpg?height=400&width=600",
    href: "/services/companionship"
  },
  {
    title: "Light Housekeeping",
    description: "Help with household tasks and meal preparation.",
    imageUrl: "/housekeeping.jpg?height=400&width=600",
    href: "/services/housekeeping"
  },
  {
    title: "Medication Reminders",
    description: "Timely medication reminders and monitoring.",
    imageUrl: "/medicationreminder.jpg?height=400&width=600",
    href: "/services/medication"
  },
  {
    title: "Respite Care",
    description: "Temporary relief for primary caregivers.",
    imageUrl: "/respitecare.jpg?height=400&width=600",
    href: "/services/respite"
  }
]

export default function Services() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </main>
  )
}

