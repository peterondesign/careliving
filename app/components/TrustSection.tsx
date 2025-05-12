"use client";

import { ShieldCheck, MapPin, Phone } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck size={40} className="text-teal-600 mb-4" />,
      text: "Licensed Home Health Agency",
      description: "Fully licensed and insured for your peace of mind.",
    },
    {
      icon: <MapPin size={40} className="text-teal-600 mb-4" />,
      text: "Serving Northern Virginia",
      description: "Ashburn • Leesburg • Sterling • Chantilly • Herndon • Reston • Fairfax • Oakton • Vienna • McLean • Falls Church • Great Falls • Arlington • Alexandria • Annandale • Burke • Manassas • Woodbridge • Springfield",
    },
    {
      icon: <Phone size={40} className="text-teal-600 mb-4" />,
      text: "Speak With a Care Coordinator",
      description: "Get personalized support and answers today.",
      href: "tel:(571) 520 5039", // Added href for phone link
    },
  ];

  return (
    <section className="py-16 bg-gray-50 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {trustPoints.map((point, index) => {
            const content = (
              <>
                {point.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {point.text}
                </h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </>
            );
            return point.href ? (
              <a
                key={index}
                href={point.href}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
