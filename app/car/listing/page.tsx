
import CarHeader from '@/components/pages/CarHearder'
import CarListing from '@/components/pages/CarListing'
import Cards from '@/components/pages/Crad'
import React from 'react'

function page() {
  return (
    <div>
    <CarHeader/>
    <Cards/>
      <CarListing/>
    </div>
  )
}

export default page
