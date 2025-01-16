'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
  id: number
  text: string
  author: string
  title: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Eget ornare ac eleifend leo mauris suspendisse. Bibendum suspendisse proin aliquet porttitor sed vulputate proin ultrices et. Ut leo integer nunc amet curabitur nulla ipsum. Ultrices proin sit a aliquet lorem. Nisi lobortis amet eu vitae eget hendrerit a. Erat amet facilisi sed nunc consectetur.",
    author: "Mr John Deo",
    title: "CEO at FlyNow",
    avatar: "/person-1.png"
  },
  {
    id: 2,
    text: "Another great testimonial showcasing our excellent service and dedication to customer satisfaction. We always strive to deliver the best possible experience.",
    author: "Jane Smith",
    title: "CTO at TechCorp",
    avatar: "/person-2.png"
  },
  {
    id: 3,
    text: "Working with this team has been an absolute pleasure. Their attention to detail and professional approach has exceeded our expectations.",
    author: "Mike Johnson",
    title: "Founder at StartUp",
    avatar: "/person-3.png"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full px-4 py-12 md:py-24 lg:py-32">
      <div className="container max-w-6xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-blue-600 font-medium">Testimonials</h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              What our clients think about us?
            </h2>
          </div>
          <div className="relative">
            <Card className="p-6 bg-muted/50 h-[250px] flex flex-col">
              <div className="flex mb-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="relative"
                    style={{
                      marginLeft: index !== 0 ? '-1rem' : '0',
                      zIndex: testimonials.length - index,
                    }}
                  >
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt=""
                      className="w-12 h-12 rounded-full border-2 border-background"
                      width={48}
                      height={48}
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-4 overflow-y-auto flex-grow">
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].text}
                </p>
                <div className="space-y-1">
                  <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </Card>
            {/* Navigation arrows container positioned absolutely */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={previousTestimonial}
                className="h-8 w-8 bg-background shadow-lg hover:bg-background/90"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-8 w-8 bg-background shadow-lg hover:bg-background/90"
              >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

