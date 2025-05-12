"use client"

import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-full animate-fadeIn">
      {/* Mobile Hero */}
      <div className="xl:hidden">
        <div className="mt-[120px] relative w-full h-[42rem]">
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
              Get Immediate Home Care Assistance
            </h1>
            <p className="text-lg text-white/90 mb-8">
              We provide quality home care and personal care services, helping seniors with daily tasks to maintain their independence
            </p>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white hover:bg-white/90 text-teal-600 px-8 py-4 rounded-2xl transition-colors font-semibold"
              >
                Start Care Now
              </Link>
              <a
                href="tel:571-550-9778"
                className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-2xl transition-colors font-semibold"
              >
                Speak to a Care Coordinator First
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden xl:block relative w-full min-h-[600px] bg-hero px-20 pt-[360px] pb-[240px]">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-text mb-6">
            Get Immediate Home Care Assistance
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            We provide quality home care and personal care services, helping seniors with daily tasks to maintain their independence
          </p>
            <div className="flex flex-col gap-4 size-max">
              <Link
              href="/contact"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white text-center px-8 py-4 rounded-2xl transition-colors font-semibold"
              >
              Start Care Now
              </Link>
              <a
              href="tel:571-550-9778"
              className="inline-block bg-transparent border-2 border-teal-600 hover:bg-teal-50 text-teal-600 text-center px-8 py-4 rounded-2xl transition-colors font-semibold"
              >
              Speak to a Care Coordinator First
              </a>
            </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;