"use client"
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      content: "The care I received was exceptional. The staff was friendly and professional, and the doctors took the time to listen to my concerns.",
      author: "Jane Doe",
      role: "Patient",
      avatar: "https://github.com/nutlope.png"
    },
    {
      id: 2,
      content: "I've been coming here for years and have always been impressed with the quality of care.",
      author: "John Smith",
      role: "Patient",
      avatar: "https://github.com/nutlope.png"
    },
    {
      id: 3,
      content: "The team here is amazing. They made me feel comfortable and confident in my treatment plan.",
      author: "Emily Johnson",
      role: "Patient",
      avatar: "https://github.com/nutlope.png"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="flex flex-col max-w-6xl rounded-xl mx-auto bg-white">
      <header className="px-4 lg:px-6 py-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">What Our Patients Say</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Read what our satisfied patients have to say about their experience with us.
        </p>
      </header>
      <main className="flex-1">
        <div className="container px-10 md:px-6">
          <div className="relative">
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.author} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{currentTestimonial.author}</CardTitle>
                    <CardDescription>{currentTestimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{currentTestimonial.content}</p>
              </CardContent>
            </Card>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button variant="ghost" onClick={prevTestimonial}>
                <ArrowRight className="h-4 w-4 p-5 rounded-full bg-gray-500 rotate-180" />
              </Button>
              <Button variant="ghost" onClick={nextTestimonial}>
                <ArrowRight className="h-4 w-4 p-5 rounded-full bg-gray-500" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}