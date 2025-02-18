'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Img from 'next/image'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-semibold text-teal-600">
            <Img src="/carelivinglogo.svg" alt="Logo" width={140} height={72} />
          </Link>
          <div className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-teal-600">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-teal-600">
              Services
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-teal-600">
              Resources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-600">
              About Us
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-teal-600">
              CareLivers
            </Link>
            <Link href="/waitlist" className="text-gray-600 hover:text-teal-600">
              Join Our Waitlist
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
          {/* <Button variant="ghost" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button> */}
          <Button className='bg-teal-600 text-white text-xl' asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

