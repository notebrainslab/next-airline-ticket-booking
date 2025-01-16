'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { CalendarIcon, MapPin, Utensils, Ticket, Building2 } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

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

export default function TravelBooking() {
  const
   [date, setDate] = useState<Date>()
  const [priceRange, setPriceRange] = useState([100])

  return (
    <div className="max-w-7xl mx-auto  lg:p-">
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
            <Card key={pkg.id} className="p-4">
              <div className="grid md:grid-cols-[250px,1fr,200px] gap-6">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full">
                    {pkg.duration}
                  </div>
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="h-[200px] object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: pkg.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{pkg.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start justify-start gap-2">
                      <MapPin size={16} className=" text-gray-500" />
                      <div>
                      <span className="text-sm">Pick-up Location:</span><br/>
                      <span className="text-sm text-gray-600">{pkg.pickupLocation}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-start gap-2">
                      <Utensils size={16} className="text-gray-500" />
                      <div>
                      <span className="text-sm">{pkg.mealsPerDay} Meals/day:</span><br/>
                      <span className="text-sm text-gray-600">{pkg.localities}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-start gap-2">
                      <Ticket size={16} className=" text-gray-500" />
                      <span className="text-sm">All Tickets Covered:</span>
                      <span className="text-sm text-gray-600">{pkg.ticketsCovered}</span>
                    </div>
                    <div className="flex items-start justify-start gap-2">
                      <Building2 size={16} className=" text-gray-500" />
                      <div>
                      <span className="text-sm">Premium Lodgings:</span><br/>
                      <span className="text-sm text-gray-600">{pkg.lodging}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="bg-blue-50 text-sm p-2 rounded-lg text-center mb-4">
                      Pre-Registration available
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        ${pkg.pricePerPerson.toFixed(2)}
                        <span className="text-sm font-normal">/person</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Total ${pkg.totalPrice.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full">Select</Button>
                    <Button variant="outline" className="w-full">
                      Email Quotes
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

