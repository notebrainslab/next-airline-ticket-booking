
import FlightListingHeader from '@/components/pages/FlightListingHeader'
import FlightResults from '@/components/pages/FlightResult'
import FlightSearch from '@/components/pages/FlightSearch'
import PaginationDemo from '@/components/pages/PaginationDemo'
import React from 'react'

function page() {
  return (
    <div>
       <FlightListingHeader/>
       <FlightSearch/>
       <FlightResults/>
       <PaginationDemo/>
    </div>
  )
}

export default page
