"use client"

const ContactCTA = () => {
  return (
    <section className="teal-pattern-bg rounded-2xl border border-teal-600/20 mx-4 md:mx-20 p-8 md:p-24 text-center animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Care starts here</h2>
      <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
        Contact CareLiving today for your free consultation and support where it matters most — at home.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white hover:bg-white/90 text-teal-600 px-8 py-4 rounded-2xl transition-colors font-semibold"
      >
        Contact Us
      </a>
    </section>
  );
};

export default ContactCTA;