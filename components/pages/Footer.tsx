import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

interface LinkItem {
  title: string;
  href: string;
}

interface FooterData {
  companyInfo: {
    description: string;
    logo: string;
  };
  bookingLinks: LinkItem[];
  usefulLinks: LinkItem[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    socialLinks: {
      instagram: string;
      facebook: string;
      linkedin: string;
      twitter: string;
    };
  };
}

const footerData: FooterData = {
  companyInfo: {
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet vulputate augue penatibus in libero et id aliquam. In ridiculus pretium est velit euismod.",
    logo: "/logo.png", // Replace with your logo path
  },
  bookingLinks: [
    { title: "Book Flights", href: "/book-flights" },
    { title: "Travel Services", href: "/services" },
    { title: "Transportation", href: "/transportation" },
    { title: "Planning Your Trip", href: "/planning" },
  ],
  usefulLinks: [
    { title: "Home", href: "/" },
    { title: "Blogs", href: "/blogs" },
    { title: "About", href: "/about" },
    { title: "Contact Us", href: "/contact" },
  ],
  contactInfo: {
    address: "123 Main Street, Anytown, USA.",
    phone: "+1 234 567 890",
    email: "email@example.com",
    socialLinks: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
};

export default function Footer() {
  return (
    <footer>
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={footerData.companyInfo.logo}
                alt="FlyNow Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6">{footerData.companyInfo.description}</p>
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
              {footerData.bookingLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-3">
              {footerData.usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                {footerData.contactInfo.address}
              </li>
              <li>
                <Link href={`tel:${footerData.contactInfo.phone}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <Phone className="w-4 h-4" />
                  {footerData.contactInfo.phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${footerData.contactInfo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Mail className="w-4 h-4" />
                  {footerData.contactInfo.email}
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us!</h4>
              <div className="flex gap-3">
                <Link href={footerData.contactInfo.socialLinks.instagram} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href={footerData.contactInfo.socialLinks.facebook} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href={footerData.contactInfo.socialLinks.linkedin} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href={footerData.contactInfo.socialLinks.twitter} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
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
