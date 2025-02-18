"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Selection} from "@nextui-org/react";
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'react-feather'
import Head from 'next/head'
import React from "react";


export default function Contact() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["personal care"]));
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Head>
        <title>Contact Us - CareLiving</title>
        <meta name="description" content="Get in touch with CareLiving for quality home health and personal care services. Contact us via email, phone, or visit our location." />
        <meta name="keywords" content="CareLiving, contact, home health, personal care, email, phone, address" />
      </Head>
      <main className="pt-32 pb-20">

        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          <div className="flex flex-col w-full mx-auto justify-center md:flex-row gap-8">
            <div className="w-full items-center md:w-1/2">
              <Card className='max-w-md'>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        required
                      />
                    </div>
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="name" className="text-sm font-medium">Type of Care</label>
                      <Dropdown>
                        <DropdownTrigger>
                            <Button className="text-left py-8 w-fit capitalize break-words whitespace-normal" variant="outline">
                              {selectedValue || "No service selected"}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                        className='bg-white shadow-md'
                          disallowEmptySelection={false}
                          aria-label="Multiple selection example"
                          closeOnSelect={false}
                          selectedKeys={selectedKeys}
                          selectionMode="multiple"
                          variant="flat"
                          onSelectionChange={setSelectedKeys}
                        >
                          <DropdownItem key="personal care">Personal Care</DropdownItem>
                          <DropdownItem key="companionship">Companionship</DropdownItem>
                          <DropdownItem key="housekeeping">Housekeeping</DropdownItem>
                          <DropdownItem key="medication reminders">Medication Reminders</DropdownItem>
                          <DropdownItem key="respite">Respite Care</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
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
                    <a href="tel:571-599-7467" className="hover:underline">Phone: 571-599-7467</a>
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
    </>
  )
}

