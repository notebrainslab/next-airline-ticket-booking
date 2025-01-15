import BookingForm from '@/components/pages/BookingForm'
import FlightBookingHeader from '@/components/pages/FlightBookingTop'
import React from 'react'

function page() {
  return (
    <div>
      <FlightBookingHeader/>
      <BookingForm/>
    </div>
  )
}

export default page
