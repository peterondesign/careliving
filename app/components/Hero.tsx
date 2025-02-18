"use client"

import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-full animate-fadeIn">
      {/* Mobile Hero */}
      <div className="xl:hidden">
        <div className="mt-[120px] relative w-full h-[300px]">
          <Image
            src="/hero_mobile.jpg"
            alt="CareLiving Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="bg-teal-600 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">
              Where Compassion Meets Home
            </h1>
            <p className="text-lg text-white/90 mb-8">
              We provide quality home care and personal care services, helping seniors with daily tasks to maintain their independence
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-white/90 text-teal-600 px-8 py-4 rounded-2xl transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden xl:block relative w-full min-h-[600px] bg-hero px-20 pt-[360px] pb-[240px]">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-text mb-6">
            Where Compassion Meets Home
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            We provide quality home care and personal care services, helping seniors with daily tasks to maintain their independence
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;