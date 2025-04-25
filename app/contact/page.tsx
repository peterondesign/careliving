"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'react-feather'
import Head from 'next/head'
import React, { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { title } from 'process';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function ContactPage() {
  return (
    <div> {/* Ensure a single parent element wraps all JSX */}
      <Header />
      {/* Google Tag Manager */}
      <Head>
        <title>Contact Us - CareLiving</title>
        <meta name="description" content="Get in touch with CareLiving for quality home health and personal care services. Contact us via email, phone, or visit our location." />
        <meta name="keywords" content="CareLiving, contact, home health, personal care, email, phone, address" />
        {/* Event snippet for Submit lead form conversion page */}
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16926500271');`}
        </script>
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-16926500271/n-Z6CJmliK8aEK_Ll4c_'});`}
        </script>
      </Head>
      <main className="pt-48 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          <div className="flex flex-col w-full mx-auto justify-center md:flex-row gap-8">
            <div className="w-full items-center md:w-1/2">
              <Card>
                <CardContent className="p-6">
                  <iframe
                    src="https://tally.so/embed/nPG0D0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    width="100%"
                    height="900"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </CardContent>
              </Card>
            </div>

            <div className="w-full md:w-1/2">
              <section className="pt-12 md:pt-0">
                <div className="md:text-left text-center">
                  <div className="flex justify-start md:justify-start items-center space-x-4 mb-2">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:info@carelivers.com" className="hover:underline">Email: info@carelivers.com</a>
                  </div>
                  <div className="flex justify-start md:justify-start items-center space-x-4 mb-2">
                    <Phone className="w-5 h-5" />
                    <a href="tel:571-550-9778" className="hover:underline">Phone: 571-550-9778</a>
                  </div>
                  <div className="flex justify-start md:justify-start items-center space-x-4">
                    <MapPin className="w-5 h-5" />
                    <a href="https://www.google.com/maps?q=491B+Carlisle+Dr,+Herndon+VA+20170" target="_blank" rel="noopener noreferrer" className="hover:underline">Address: 491B Carlisle Dr, Herndon VA 20170</a>
                  </div>
                </div>
              </section>

              {/* Map Section */}
              <section className="py-8">
                <div className="container">
                  <div className="flex justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.001293282024!2d-77.38609868465088!3d38.95582097957059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a4e4b5b4b4b%3A0x4b5b4b4b4b4b4b4b!2s491%20Carlisle%20Dr%2C%20Herndon%2C%20VA%2020170%2C%20USA!5e0!3m2!1sen!2s!4v1633024800000!5m2!1sen!2s"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}