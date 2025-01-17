"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Plane, Building2, Car } from "lucide-react";
import TripTypeSelection from "./TripTypeSelection";
import BookingManage from "./BookingManage";

export default function FlightBookingCard() {
  return (
    <div className="max-w-7xl p-4 mx-auto bg-gray-200 rounded-xl shadow-sm">
      {/* Main Service Tabs */}
      <Tabs defaultValue="flights" className="mb-6">
        <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3">
          <TabsTrigger value="flights" className="flex items-center gap-2 transition-all duration-300 ease-in-out">
            <Plane size={20} />
            Flights
          </TabsTrigger>
          <TabsTrigger value="hotel" className="flex items-center gap-2 transition-all duration-300 ease-in-out">
            <Building2 size={20} />
            Hotel
          </TabsTrigger>
          <TabsTrigger value="car" className="flex items-center gap-2 transition-all duration-300 ease-in-out">
            <Car size={20} />
            Car Rentals
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Secondary Tabs */}
      <Tabs defaultValue="stopover">
        <TabsList className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-6">
          <TabsTrigger value="stopover">Stopover</TabsTrigger>
          <TabsTrigger value="manage-booking">Manage Booking / Check in</TabsTrigger>
          <TabsTrigger value="flight-status">Flight Status</TabsTrigger>
        </TabsList>

        {/* Dynamic Content Rendering */}
        <TabsContent value="stopover">
          <TripTypeSelection />
        </TabsContent>
        <TabsContent value="manage-booking">
          <BookingManage />
        </TabsContent>
        <TabsContent value="flight-status">
          <div className="text-center py-6">
            <h2 className="text-xl font-semibold text-gray-800">Flight Status</h2>
            <p className="text-gray-600">Coming Soon...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
