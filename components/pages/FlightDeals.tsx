"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

interface FlightDeal {
  from: string
  to: string
  image: string
  startDate: string
  endDate: string
  travelClass: string
  price: number
}

const flightDeals: FlightDeal[] = [
  {
    from: "Dubai",
    to: "Maldives",
    image: "/flight-1.png",
    startDate: "14 Aug, 2023",
    endDate: "20 Aug 2023",
    travelClass: "Business Class",
    price: 980,
  },
  {
    from: "Dubai",
    to: "Canada",
    image: "/flight-2.png",
    startDate: "14 Aug, 2023",
    endDate: "20 Aug 2023",
    travelClass: "First Class",
    price: 5000,
  },
  {
    from: "Dubai",
    to: "Dhaka",
    image: "/flight-3.png",
    startDate: "14 Aug, 2023",
    endDate: "20 Aug 2023",
    travelClass: "Economy Class",
    price: 400,
  },
  {
    from: "Dubai",
    to: "Dhaka",
    image: "/flight-4.png",
    startDate: "14 Aug, 2023",
    endDate: "20 Aug 2023",
    travelClass: "Economy Class",
    price: 400,
  },
  {
    from: "Dubai",
    to: "Dhaka",
    image: "/flight-2.png",
    startDate: "14 Aug, 2023",
    endDate: "20 Aug 2023",
    travelClass: "Economy Class",
    price: 400,
  },
  {
    from: "Dubai",
    to: "Dhaka",
    image: "/flight-3.png",
    startDate: "14 Aug, 2023",
    endDate: "20 Aug 2023",
    travelClass: "Economy Class",
    price: 400,
  },
]

export default function FlightDeals() {
  return (
    <div className=" max-w-6xl mx-auto ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Flight Deals</h2>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {flightDeals.map((deal, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={deal.image || "/placeholder.svg"}
                      alt={`${deal.from} to ${deal.to}`}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {deal.from} to {deal.to}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {deal.startDate} - {deal.endDate}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{deal.travelClass}</p>
                        <p className="text-lg font-bold">${deal.price}</p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Booking Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 bg-blue-600 hover:bg-blue-700 text-white" />
        <CarouselNext className="hidden md:flex -right-12 bg-blue-600 hover:bg-blue-700 text-white" />
      </Carousel>
    </div>
  )
}

