'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { CalendarIcon, MapPin, Utensils, Ticket, Building2, Fuel, Users, Briefcase, Car, Activity } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Badge } from '../ui/badge'

interface TravelPackage {
  id: number
  title: string
  image: string
  rating: number
  duration: string
  pickupLocation: string
  mealsPerDay: number
  localities: string
  ticketsCovered: string
  lodging: string
  pricePerPerson: number
  totalPrice: number
}

const travelPackages: TravelPackage[] = [
  {
    id: 1,
    title: "Dubai First Time Visiting",
    image: "/tour-1.png",
    rating: 5,
    duration: "3 Days",
    pickupLocation: "Luxury Car Pickup",
    mealsPerDay: 3,
    localities: "Localities / Your Choice",
    ticketsCovered: "Experience Guides",
    lodging: "Fully Equipped Rooms",
    pricePerPerson: 500.00,
    totalPrice: 550.40
  },
  {
    id: 2,
    title: "Palazzo Versace",
    image: "/tour-2.png",
    rating: 5,
    duration: "5 Days",
    pickupLocation: "Luxury Car Pickup",
    mealsPerDay: 3,
    localities: "Localities / Your Choice",
    ticketsCovered: "Experience Guides",
    lodging: "Fully Equipped Rooms",
    pricePerPerson: 500.00,
    totalPrice: 550.40
  },
  {
    id: 3,
    title: "Palazzo Versace",
    image: "/tour-3.png",
    rating: 5,
    duration: "5 Days",
    pickupLocation: "Luxury Car Pickup",
    mealsPerDay: 3,
    localities: "Localities / Your Choice",
    ticketsCovered: "Experience Guides",
    lodging: "Fully Equipped Rooms",
    pricePerPerson: 500.00,
    totalPrice: 550.40
  },
  {
    id: 4,
    title: "Palazzo Versace",
    image: "/tour-2.png",
    rating: 5,
    duration: "5 Days",
    pickupLocation: "Luxury Car Pickup",
    mealsPerDay: 3,
    localities: "Localities / Your Choice",
    ticketsCovered: "Experience Guides",
    lodging: "Fully Equipped Rooms",
    pricePerPerson: 500.00,
    totalPrice: 550.40
  },
  {
    id: 5,
    title: "Palazzo Versace",
    image: "/tour-1.png",
    rating: 5,
    duration: "5 Days",
    pickupLocation: "Luxury Car Pickup",
    mealsPerDay: 3,
    localities: "Localities / Your Choice",
    ticketsCovered: "Experience Guides",
    lodging: "Fully Equipped Rooms",
    pricePerPerson: 500.00,
    totalPrice: 550.40
  },
  {
    id: 6,
    title: "Palazzo Versace",
    image: "/tour-3.png",
    rating: 5,
    duration: "5 Days",
    pickupLocation: "Luxury Car Pickup",
    mealsPerDay: 3,
    localities: "Localities / Your Choice",
    ticketsCovered: "Experience Guides",
    lodging: "Fully Equipped Rooms",
    pricePerPerson: 500.00,
    totalPrice: 550.40
  },
]

export default function CarListing() {
  const
   [date, setDate] = useState<Date>()
  const [priceRange, setPriceRange] = useState([100])

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[250px,1fr] gap-6">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Search Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Search</h2>
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Destination/property"
                  className="w-full"
                />
              </div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Check-in date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button className="w-full">Search</Button>
            </div>
          </div>

          {/* Filter Section */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Filter By:</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Price Range (Per Night)</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[100]}
                    max={3000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>${priceRange[0]}</span>
                    <span>$3000</span>
                  </div>
                </div>
              </div>
              <hr/>
              <div className='space-y-4'>
                <h3 className="text-lg font-semibold mb-2">Popular Filters</h3>
                {/* Add filter checkboxes here */}
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Sparate Room</span>
                    </div>
                    <span>(02)</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Self Catering</span>
                    </div>
                    <span>(04)</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>No Prepayment</span>
                    </div>
                    <span>(06)</span>
                </div>
              </div>
              <hr />
              <div className='space-y-4'>
                <h3 className="text-lg font-semibold mb-2">Facilities</h3>
                {/* Add filter checkboxes here */}
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Non-Smoking Rooms</span>
                    </div>
                    <span>(02)</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Free WiFi</span>
                    </div>
                    <span>(04)</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Family Rooms</span>
                    </div>
                    <span>(06)</span>
                </div>
              </div>
              <hr />
              <div className='space-y-4'>
                <h3 className="text-lg font-semibold mb-2">Fun thing to do</h3>
                {/* Add filter checkboxes here */}
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>City Tour</span>
                    </div>
                    <span>(02)</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Heritage</span>
                    </div>
                    <span>(04)</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Localities</span>
                    </div>
                    <span>(06)</span>
                </div>
              </div>
              <hr />
              <div className='space-y-4'>
                <h3 className="text-lg font-semibold mb-2">Cancellation Policy</h3>
                {/* Add filter checkboxes here */}
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Free Cancellation</span>
                    </div>
                    <span>(02)</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>Book without credit card</span>
                    </div>
                    <span>(04)</span>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex items-center gap-1'>
                    <input type='checkbox'/>
                    <span>No Prepayment</span>
                    </div>
                    <span>(06)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {travelPackages.map((pkg) => (
            <Card className="max-w-4xl">
            <CardContent className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr,1fr] gap-6 p-6">
              {/* Left Section */}
              <div className="space-y-2 bg-gray-300 p-4 rounded-lg">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">S Class - Benz</h3>
                  <p className="text-sm text-muted-foreground">Hyundai Accentor similar</p>
                </div>
                
                <div className="relative h-40">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-16%2010-23-37-yXlysLn6NFAt2TvixsqTZ3MYRrzZ4J.png"
                    alt="Blue S Class Benz"
                    className="object-contain w-full h-full"
                  />
                </div>
      
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    <span className="text-sm">4</span>
                  </div>
                </div>
      
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    Automatic Transmission
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    Air Conditioning
                  </div>
                </div>
              </div>
      
              {/* Middle Section */}
              <div className="space-y-6">
      
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <div>
                    <div className="font-medium">Pick-Up Location:</div>
                    <div className="text-sm text-muted-foreground">Meet & Greet</div>
                  </div>
                </div>
      
                <div className="flex items-start gap-3">
                  <Fuel className="w-5 h-5 mt-0.5" />
                  <div>
                    <div className="font-medium">Fuel Policy:</div>
                    <div className="text-sm text-muted-foreground">Full to Full</div>
                  </div>
                </div>
      
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 mt-0.5" />
                  <div>
                    <div className="font-medium">Mileage:</div>
                    <div className="text-sm text-muted-foreground">Unlimited</div>
                  </div>
                </div>
      
                <div className="flex items-center gap-3">
                  <img src="/placeholder.svg?height=24&width=80" alt="Europcar" className="h-6" />
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Very Good <span className="ml-1">9.6</span>
                  </Badge>
                </div>
              </div>
      
              {/* Right Section */}
              <div className="space-y-8">
                <div className="bg-blue-50 p-3 rounded-md text-sm">
                  Pre-Registration available
                </div>
      
                <div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">$ 140.00</span>
                    <span className="text-sm text-muted-foreground ml-1">/day</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Total $320.40</div>
                </div>
      
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Select
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Email Quotes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

