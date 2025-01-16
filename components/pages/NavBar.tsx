"use client"

import { SearchIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"

// Navigation items configuration
const navigationItems = [
  { name: "Fight", href: "/fight" },
  { name: "Car", href: "/car" },
  { name: "Hotel", href: "/hotel" },
  { name: "Tour Package", href: "/tour-package" },
  { name: "Pages", href: "/pages" },
  { name: "News", href: "/news" },
] as const

interface NavBarProps {
  logo?: string
  onSearch?: () => void
  onAuthClick?: () => void
}

function NavBar({ 
  logo = "/logo.png",
  onSearch,
  onAuthClick 
}: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header>
      <nav className="py-6 max-w-7xl mx-auto px-6">
        <div className="flex flex-row items-center justify-between">
          <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
            <Image src={logo || "/placeholder.svg"} alt="logo" height={100} width={100} priority />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between gap-10">
            <ul className="flex items-center justify-center gap-10 text-lg font-semibold">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`hover:text-blue-600 cursor-pointer transition-colors ${
                      isActive(item.href) ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-xl font-semibold flex items-center gap-3">
              <button 
                onClick={onSearch}
                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
                aria-label="Search"
              >
                <SearchIcon />
              </button>
              <button 
                onClick={onAuthClick}
                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2 py-1"
              >
                Login/Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="grid grid-cols-3 gap-3 text-center mt-4 bg-gray-300 rounded-lg p-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block p-4 font-semibold hover:text-blue-500 text-xl transition-colors ${
                      isActive(item.href) ? 'text-blue-600' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default NavBar

