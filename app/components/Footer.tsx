"use client"

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-20 px-4 md:px-20 animate-fadeIn bg-secondary">
            <div className="flex flex-wrap gap-12 md:gap-24 justify-between mb-16">
                <div className="flex-1 gap-4 flex flex-col min-w-[200px]">
                    <img src="/carelivinglogo.svg" alt="CareLiving Logo" className="hidden xl:inline h-8 mb-6 max-w-fit" />
                    <a href="mailto:info@carelivers.com" target="_blank"
                        rel="noopener noreferrer" >
                        <p className="flex items-center text-text-secondary">
                            <Mail size={16} className="mr-2" />
                            info@carelivers.com
                        </p>
                    </a>
                    <a href="tel:571-599-7467" target="_blank"
                        rel="noopener noreferrer" >
                        <p className="flex items-center text-text-secondary mt-2">
                            <Phone size={16} className="mr-2" />
                            571-599-7467
                        </p>
                    </a>
                    <a href="https://www.google.com/maps?q=491B+Carlisle+Dr,+Herndon+VA+20170"  target="_blank"
                        rel="noopener noreferrer" >
                        <address className="flex items-center text-text-secondary mt-2 not-italic">
                            <MapPin size={16} className="mr-2" />
                            491B Carlisle Dr, Herndon VA 20170
                        </address>
                    </a>
                </div>

                <div className="flex-1 min-w-[200px]">
                    <h3 className="font-bold mb-6">Quick Links</h3>
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link>
                        <Link href="/services" className="text-text-secondary hover:text-primary transition-colors">Services</Link>
                        <Link href="/resources" className="text-text-secondary hover:text-primary transition-colors">Resources</Link>
                        <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">About Us</Link>
                        <Link href="https://careliving.clearcareonline.com/quick-apply/" target="_blank" className="text-text-secondary hover:text-primary transition-colors">CareLivers (Careers)</Link>
                        <Link href="/waitlist" className="text-text-secondary hover:text-primary transition-colors">Waitlist</Link>
                        <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact Us</Link>
                    </nav>
                </div>

                <div className="flex-1 min-w-[200px]">
                    <h3 className="font-bold mb-6">Services</h3>
                    <nav className="flex flex-col gap-4">
                        <Link href="/services/personal-care" className="text-text-secondary hover:text-primary transition-colors">Personal Care</Link>
                        <Link href="/services/companionship" className="text-text-secondary hover:text-primary transition-colors">Companionship</Link>
                        <Link href="/services/respite" className="text-text-secondary hover:text-primary transition-colors">Respite Care</Link>
                        <Link href="/services/medication" className="text-text-secondary hover:text-primary transition-colors">Medication Reminders</Link>
                        <Link href="/services/housekeeping" className="text-text-secondary hover:text-primary transition-colors">Housekeeping</Link>
                    </nav>
                </div>

                <div className="flex-1 min-w-[200px]">
                    <h3 className="font-bold mb-6">Social</h3>
                    <nav className="flex flex-col gap-4">
                        <Link href="https://www.instagram.com/carelivinghome" target="_blank"
                            rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">Instagram</Link>
                        <Link href="https://www.facebook.com/profile.php?id=61572990697550" target="_blank"
                            rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">Facebook</Link>
                        <Link href="https://www.x.com/carelivinghome" target="_blank"
                            rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">X (Twitter)</Link>
                    </nav>
                </div>
            </div>

            <div className="border-t border-secondary-dark pt-8 text-center text-text-secondary">
                <p>CareLiving © All rights reserved. {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;