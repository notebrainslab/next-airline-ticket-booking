import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2 } from 'lucide-react'

interface Destination {
  id: number
  city: string
  country: string
  image: string
}

const destinations: Destination[] = [
  {
    id: 1,
    city: "Rome",
    country: "Italy",
    image: "/image-1.png",
  },
  {
    id: 2,
    city: "Tokyo",
    country: "Japan",
    image: "/image-2.png",
  },
  {
    id: 3,
    city: "Sydney",
    country: "Australia",
    image: "/image-3.png",
  },
  {
    id: 4,
    city: "London",
    country: "United Kingdom (UK)",
    image: "/image-4.png",
  },
]

export default function PopularDestinations() {
  return (
    <div className=" max-w-6xl mx-auto py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Popular Global Travel Destinations</h2>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          Show More
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-2">
        {/* Globe Visualization */}
        <div className="lg:col-span-2 relative aspect-square rounded-lg p-6 hidden lg:block">
          <div className="relative w-full h-full hover:scale-110 duration-300 ease">
            <Image
              src="/map.png"
              alt="Global destinations map"
              fill
              className="object-contain "
            />
          </div>
        </div>

        {/* Destination Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="border-0 shadow-sm ">
              <CardContent className="p-3">
                <div className="relative aspect-video overflow-hidden p-3 hover:scale-105 duration-300 ease hover:p-3">
                  <Image
                    src={destination.image}
                    alt={destination.city}
                    fill
                    className="rounded-lg"
                  />
                  <p className="absolute bg-white px-3 p-2 rounded-lg opacity-0 hover:text-opacity-30 ">from <span className="text-amber-400">$350</span></p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium lg:font-semibold">{destination.city}</h3>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.country}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>Hotels</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Discover
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

