import BookingForm from '@/components/pages/BookingForm'
import FlightBookingHeader from '@/components/pages/FlightBookingTop'


function page() {
  return (
    <div>
      <FlightBookingHeader/>
      <BookingForm
       flightDetails={flightDetails} 
       priceSummary={priceSummary} 
       />
    </div>
  )
}

export default page

// Sample data for flight details and price summary
const flightDetails = {
  departureTime: "10:00 AM",
  departureAirport: "JFK",
  arrivalTime: "2:00 PM",
  arrivalAirport: "LAX",
  duration: "4 hours",
  stops: "Non-stop",
  departureDate: "2025-02-01",
  arrivalDate: "2025-02-01",
  airline: "Delta Airlines",
  aircraft: "Boeing 737",
  luggage: "2 bags included",
};

const priceSummary = {
  items: [
    {
      description: "Base Fare",
      price: 200,
      details: "Economy class, one-way",
    },
    {
      description: "Taxes and Fees",
      price: 50,
      details: "Airport fees and taxes",
    }
  ],
  discount: 20,
  total: 230,
};