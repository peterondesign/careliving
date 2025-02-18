import Img from 'next/image'
import { Mail, Phone, MapPin } from 'react-feather'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer>
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/footerbg.jpg')" }}>
        <div className="md:hidden relative bg-cover bg-center" style={{ backgroundImage: "url('/footerbgalt.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left">
          <div className="md:w-1/2">
            {/* <h2 className="text-3xl font-bold mb-4">Stay Connected</h2> */}
            <p className="mb-6">Care starts here. Contact CareLiving today for your free consultation and support where it matters most — at home.</p>
            <Button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
              <a href="/contact"> Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Img src="/carelivinglogo.svg" alt="Logo" width={140} height={72} className='mb-4 filter brightness-200' />
              <p className="text-teal-50">
                Providing quality home health and personal care
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-teal-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-teal-50 hover:text-white">Home</a></li>
                <li><a href="/services" className="text-teal-50 hover:text-white">Services</a></li>
                <li><a href="/resources" className="text-teal-50 hover:text-white">Resources</a></li>
                <li><a href="/about" className="text-teal-50 hover:text-white">About Us</a></li>
                <li><a href="/careers" className="text-teal-50 hover:text-white">CareLivers</a></li>          <li><a href="/waitlist" className="text-teal-50 hover:text-white">Waitlist</a></li>
                <li><a href="/contact" className="text-teal-50 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-teal-200">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services/personal-care" className="text-teal-50 hover:text-white">Personal Care</a></li>
                <li><a href="/services/companionship" className="text-teal-50 hover:text-white">Companionship</a></li>
                <li><a href="/services/housekeeping" className="text-teal-50 hover:text-white">Housekeeping</a></li>
                <li><a href="/services/medication" className="text-teal-50 hover:text-white">Medication Reminders</a></li>
                <li><a href="/services/respite" className="text-teal-50 hover:text-white">Respite Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-teal-200">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-teal-50 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-teal-50 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="my-12 bg-teal-100 text-teal-900 py-4 text-left md:text-center rounded-lg flex flex-col md:flex-wrap flex-nowrap md:flex-row gap-4 md:px-12 px-4 md:mx-auto mx-0 md:w-auto w-webkit-fill-available md:justify-center justify-start items-center">
            <div className="flex md:justify-center justify-start items-center space-x-4">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@carelivers.com" className="text-teal-900 hover:underline">info@carelivers.com</a>
            </div>
            <div className="flex md:justify-center justify-start  items-center space-x-4">
              <Phone className="w-5 h-5" />
              <a href="tel:571-599-7467" className="text-teal-900 hover:underline">571-599-7467</a>
            </div>
            <div className="flex md:justify-center justify-start  items-center space-x-4">
              <MapPin className="w-5 h-5" />
              <a href="https://www.google.com/maps?q=491B+Carlisle+Dr,+Herndon+VA+20170" target="_blank" rel="noopener noreferrer" className="text-teal-900 hover:underline">491B Carlisle Dr, Herndon VA 20170</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-teal-500 text-center text-teal-50">
            <p>&copy; {new Date().getFullYear()} CareLiving. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

