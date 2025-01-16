'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Building2, Car} from 'lucide-react'
import TripTypeSelection from "./TripTypeSelection"
import BookingManage from "./BookingManage"
import { useState } from "react"


export default function FlightBookingCard() {
  const [activeComponent,setActiveComponent]=useState<string>('Flights')
  return (
    <div className=" max-w-6xl mx-auto p-6 bg-gray-200 rounded-xl shadow-sm">
      {/* Main Service Tabs */}
      <Tabs defaultValue="flights" className="mb-6">
        <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3 ">
          <TabsTrigger value="flights" className="flex items-center gap-2">
            <Plane size={20} />
            Flights
          </TabsTrigger>
          <TabsTrigger value="hotel" className="flex items-center gap-2">
            <Building2 size={20} />
            Hotel
          </TabsTrigger>
          <TabsTrigger value="car" className="flex items-center gap-2">
            <Car size={20} />
            Car Rentals
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Secondary Tabs */}
      <Tabs defaultValue="Stopover">
      <TabsList className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-6">
        <TabsTrigger 
        onClick={()=>setActiveComponent("stopover")}
        value="Stopover">
          Stopover
        </TabsTrigger>
        <TabsTrigger 
         onClick={()=>setActiveComponent("manage-booking")}
        value="Check-in">
          Manage Booking / Check in
        </TabsTrigger>
        <TabsTrigger 
         onClick={()=>setActiveComponent("flight-status")}
        value="Flight-Status">
          Flight Status
        </TabsTrigger>
      </TabsList>
      </Tabs>
      {
        activeComponent == 'stopover' && <TripTypeSelection/>
      }
      {
        activeComponent == 'manage-booking' && <BookingManage/>
      }
    </div>
  )
}

