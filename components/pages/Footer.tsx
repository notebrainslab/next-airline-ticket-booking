import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="">
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="FlyNow Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Aliquet vulputate augue penatibus in libero et id aliquam. In ridiculus pretium est velit euismod.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold mb-2">Subscribe to our special offers</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="max-w-xs bg-gray-50"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Booking</h3>
            <ul className="space-y-3">
              <li><Link href="/book-flights" className="text-gray-600 hover:text-gray-900">Book Flights</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Travel Services</Link></li>
              <li><Link href="/transportation" className="text-gray-600 hover:text-gray-900">Transportation</Link></li>
              <li><Link href="/planning" className="text-gray-600 hover:text-gray-900">Planning Your Trip</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                123 Main Street, Anytown, USA.
              </li>
              <li>
                <Link href="tel:+1234567890" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <Phone className="w-4 h-4" />
                  +1 234 567 890
                </Link>
              </li>
              <li>
                <Link href="mailto:email@example.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Mail className="w-4 h-4" />
                  email@example.com
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us!</h4>
              <div className="flex gap-3">
                <Link href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Twitter className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

