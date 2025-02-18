"use client"

import { ArrowRight } from "lucide-react";
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className="bg-secondary rounded-2xl border border-secondary-dark my-20 mx-4 md:mx-20 p-8 md:p-20 animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <span className="text-lg text-text-secondary">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Enhancing quality of life through compassionate care
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Our mission is to enhance quality of life through compassionate care while giving families peace of mind.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-text rounded-2xl px-6 py-3 hover:bg-text hover:text-white transition-colors"
          >
            Learn More
            <ArrowRight size={20} />
          </Link> 
        </div>
        <div className="flex-1">
          <img
            src="/aboutus.jpg"
            alt="Caring professional"
            className="w-full h-[540px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;