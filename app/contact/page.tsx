import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'react-feather'
import Head from 'next/head'

export default function Contact() {
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
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" placeholder="How can we help?" />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
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

