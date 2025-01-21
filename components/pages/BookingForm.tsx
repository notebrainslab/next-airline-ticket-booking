"use client";

import FlightBookingForm from "./FlightBookingForm";

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

export default function BookingForm({
  flightDetails,
  priceSummary,
}: BookingFormProps) {

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="grid lg:grid-cols-[1fr,300px] gap-8">
        {/* Left Column - Form */}
        <div className="space-y-4">
          <FlightBookingForm />
        </div>

        {/* Right Column - Booking Details */}
        <div className="space-y-6">
          {/* Flight Details */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Your Booking Details</h3>
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <div className="text-xl font-bold">
                  {flightDetails.departureTime}
                </div>
                <div className="text-sm text-gray-600">
                  {flightDetails.departureAirport}
                </div>
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
                <div className="text-xl font-bold">
                  {flightDetails.arrivalTime}
                </div>
                <div className="text-sm text-gray-600">
                  {flightDetails.arrivalAirport}
                </div>
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
                  <div className="font-bold">${item.price.toFixed(2)}</div>
                </div>
              ))}
              <hr />
              <div className="flex justify-between items-center">
                <div className="font-medium text-2xl">Deal/Discount</div>
                <div className="font-medium text-2xl text-green-600">
                  -${priceSummary.discount.toFixed(2)}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-medium text-2xl">Total</div>
                <div className="font-bold text-2xl">
                  ${priceSummary.total.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
