import Img from 'next/image'
import { Mail, Phone, MapPin } from 'react-feather'

export function Footer() {
  return (
    <footer className="bg-teal-600 text-white py-12">
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
              <li><a href="/about" className="text-teal-50 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-teal-50 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-teal-50 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-teal-200">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/personal-care" className="text-teal-50 hover:text-white">Personal Care</a></li>
              <li><a href="/services/companionship" className="text-teal-50 hover:text-white">Companionship</a></li>
              <li><a href="/services/housekeeping" className="text-teal-50 hover:text-white">Housekeeping</a></li>
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
        <div className="my-12 bg-teal-100 text-teal-900 py-4 text-center rounded-lg flex flex-col flex-wrap md:flex-row gap-4 px-12 mx-auto text-center w-fit">
          <div className="flex justify-center items-center space-x-4">
            <Mail className="w-5 h-5" />
            <a href="mailto:info@carelivers.com" className="text-teal-900 hover:underline">info@carelivers.com</a>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <Phone className="w-5 h-5" />
            <a href="tel:571-599-7467" className="text-teal-900 hover:underline">571-599-7467</a>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <MapPin className="w-5 h-5" />
            <a href="https://www.google.com/maps?q=491B+Carlisle+Dr,+Herndon+VA+20170" target="_blank" rel="noopener noreferrer" className="text-teal-900 hover:underline">491B Carlisle Dr, Herndon VA 20170</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-teal-500 text-center text-teal-50">
          <p>&copy; {new Date().getFullYear()} CareLiving. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

