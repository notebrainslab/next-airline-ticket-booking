
import FlightListingHeader from '@/components/pages/FlightListingHeader'
import FlightResults from '@/components/pages/FlightResult'
import FlightSearch from '@/components/pages/FlightSearch'
import React from 'react'

function page() {
  return (
    <div>
       <FlightListingHeader/>
       <FlightSearch
       />
       <FlightResults/>
    </div>
  )
}

export default page
