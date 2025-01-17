'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { CalendarIcon, MapPin, Fuel, Users, Briefcase, Car, Activity, Calendar1 } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Badge } from '../ui/badge'
import Image from 'next/image'

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
        image: "/car-1.png",
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
        image: "/car-2.png",
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
        image: "/car-3.png",
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
        image: "/car-4.png",
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
        image: "/car-5.png",
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
        image: "/car-6.png",
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
            <div className="grid lg:grid-cols-[300px,1fr] gap-6">
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
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Search</Button>
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
                            <hr />
                            <div className='space-y-4'>
                                <h3 className="text-lg font-semibold mb-2">Popular Filters</h3>
                                {/* Add filter checkboxes here */}
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
                                        <span>Sparate Room</span>
                                    </div>
                                    <span>(02)</span>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
                                        <span>Self Catering</span>
                                    </div>
                                    <span>(04)</span>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
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
                                        <input type='checkbox' />
                                        <span>Non-Smoking Rooms</span>
                                    </div>
                                    <span>(02)</span>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
                                        <span>Free WiFi</span>
                                    </div>
                                    <span>(04)</span>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
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
                                        <input type='checkbox' />
                                        <span>City Tour</span>
                                    </div>
                                    <span>(02)</span>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
                                        <span>Heritage</span>
                                    </div>
                                    <span>(04)</span>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
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
                                        <input type='checkbox' />
                                        <span>Free Cancellation</span>
                                    </div>
                                    <span>(02)</span>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
                                        <span>Book without credit card</span>
                                    </div>
                                    <span>(04)</span>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type='checkbox' />
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
                        <Card className="" key={pkg.id}>
                            <CardContent className="grid grid-cols-1 md:grid-cols-[1.8fr,1.5fr,1fr] gap-4 p-4">
                                {/* Left Section */}
                                <div className="space-y-1 bg-gray-300 p-4 rounded-lg">
                                    <div className="space-y-1 ">
                                        <h3 className="font-semibold text-lg">{pkg.title}</h3>
                                        <p className="text-sm text-muted-foreground">Hyundai Accentor similar</p>
                                    </div>

                                    <div className="relative h-40">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.title}
                                            fill
                                            className="object-contain w-full h-full"
                                        />
                                    </div>

                                    <div className="flex justify-evenly items-center">
                                        <div className="flex items-center gap-2">
                                            <Users size={20} />
                                            <span className="text-2xl font-semibold">4</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={20}/>
                                            <span className="text-2xl font-semibold">2</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Car size={20}/>
                                            <span className="text-2xl font-semibold">4</span>
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
                                <div className="space-y-8">
                                    <div className='flex justify-center items-center gap-1'>
                                        <Calendar1 size={17}/>
                                        <div className='flex gap-1'>
                                            <p className='text-lg font-semibold'>20 AUG</p>
                                            <span className='text-gray-600'>(Sun)</span>
                                            <span className='text-lg font-semibold'>-</span>
                                            <p className='text-lg font-semibold'> 24 OCT</p>
                                            <span className='text-gray-600'>(Wed)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 mt-0.5" />
                                        <div>
                                            <div className="font-medium">Pick-Up Location:</div>
                                            <div className="text-sm text-muted-foreground">{pkg.pickupLocation}</div>
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

                                    <div className="flex items-center gap-3 border p-3 rounded-lg">
                                        <Image src={"/car-brand-1.png"} alt='car-crand' width={70} height={70}/>
                                        <p>Very Good</p>
                                        <Badge variant="secondary" className="bg-blue-200 text-blue-700">
                                            9.6
                                        </Badge>
                                    </div>
                                </div>

                                {/* Right Section */}
                                <div className="space-y-14">
                                    <div className="bg-blue-50 p-2 rounded-md font-semibold text-lg">
                                        Pre-Registration available
                                    </div>

                                    <div className='space-y-1'>
                                        <div className="flex items-baseline ">
                                            <span className="text-2xl font-bold">${pkg.pricePerPerson}</span>
                                            <span className="text-sm text-muted-foreground ml-1">/day</span>
                                        </div>
                                        <div className="text-sm text-muted-foreground">Total ${pkg.totalPrice}</div>
                                    </div>

                                    <div className="space-y-4">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
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

