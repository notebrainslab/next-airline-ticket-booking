'use client'

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Utensils, ShipWheelIcon as Wheelchair } from 'lucide-react'
import { Button } from "../ui/button"

type FlightDetails = {
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  duration: string;
  stops: string;
  departureDate: string;
  arrivalDate: string;
  airline: string;
  aircraft: string;
  luggage: string;
};

type PriceSummaryItem = {
  description: string;
  price: number;
  details: string;
};

type PriceSummary = {
  items: PriceSummaryItem[];
  discount: number;
  total: number;
};

type BookingFormProps = {
  flightDetails: FlightDetails;
  priceSummary: PriceSummary;
};

export default function BookingForm({ flightDetails, priceSummary }: BookingFormProps) {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="grid lg:grid-cols-[1fr,300px] gap-8">
        {/* Left Column - Form */}
        <div className="space-y-8">
          {/* Progress Steps */}
          <div className="flex items-center gap-4 text-sm bg-white rounded-lg p-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                ✓
              </div>
              <span className="font-medium">Your Selection</span>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                2
              </div>
              <span className="font-medium">Your Details</span>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center">
                3
              </div>
              <span className="font-medium text-gray-400">Final Step</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Enter Your Details</h2>
            <div className="grid gap-4">
              <div className="grid md:grid-cols-[200px,1fr,1fr] gap-4">
                <Select>
                  <SelectTrigger className="bg-blue-50">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Email" type="email" />
                <Select>
                  <SelectTrigger className="bg-blue-50">
                    <SelectValue placeholder="Nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Number" type="tel" />
                <Input placeholder="Date of Birth" type="date" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Postal Code" />
                <Input placeholder="Flight Number" />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-4 bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Save your details!</h3>
            <p className="text-sm text-gray-500">
              Use your contact details to create an account and speed up future bookings.(We won&apos;t save your payment information.)
            </p>
            <div className="flex items-center gap-2 justify-start">
              <span><input type="checkbox" /></span>
              <p>Save my detail so I can book faster next time.</p>
            </div>
            <p>
              By signing in or creating an account, you agree with our <span className="text-blue-700">Terms & conditions</span>
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Extras</h3>
            <div className="space-y-4">
              <Select>
                <SelectTrigger className="bg-blue-50">
                  <Utensils className="w-4 h-4 ml-2" />
                  <SelectValue placeholder="Select Meal Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="halal">Halal</SelectItem>
                  <SelectItem value="kosher">Kosher</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-blue-50">
                  <Wheelchair className="w-4 h-4 ml-2" />
                  <SelectValue placeholder="Request Wheelchair" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, I need assistance</SelectItem>
                  <SelectItem value="no">No assistance needed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Next</Button>
          </div>
        </div>

        {/* Right Column - Booking Details */}
        <div className="space-y-6">
          {/* Flight Details */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Your Booking Detail</h3>
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <div className="text-xl font-bold">{flightDetails.departureTime}</div>
                <div className="text-sm text-gray-600">{flightDetails.departureAirport}</div>
              </div>
              <div className="flex-1 px-4">
                <div className="relative">
                  <div className="border-t-2 border-dashed border-gray-300"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-50 px-2 text-sm text-gray-500">
                    {flightDetails.duration}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-4 bg-blue-50 px-2 text-xs text-gray-500">
                    {flightDetails.stops}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">{flightDetails.arrivalTime}</div>
                <div className="text-sm text-gray-600">{flightDetails.arrivalAirport}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm border-t pt-4">
              <div>
                <div className="text-gray-500">Departure</div>
                <div className="font-medium">{flightDetails.departureDate}</div>
              </div>
              <div>
                <div className="text-gray-500">Arrival</div>
                <div className="font-medium">{flightDetails.arrivalDate}</div>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div>{flightDetails.airline}</div>
              <div>{flightDetails.aircraft}</div>
              <div>{flightDetails.luggage}</div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Price Summary</h3>
            <div className="space-y-4">
              {priceSummary.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{item.description}</div>
                    <div className="text-sm text-gray-500">{item.details}</div>
                  </div>
                  <div className="font-bold">${item.price}</div>
                </div>
              ))}
              <hr />
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-2xl">Deal/Discount</div>
                </div>
                <div className="font-medium text-2xl">${priceSummary.discount}</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-2xl">Total</div>
                </div>
                <div className="font-bold text-2xl">${priceSummary.total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
