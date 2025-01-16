
import CarHeader from '@/components/pages/CarHearder'
import CarListing from '@/components/pages/CarListing'
import Cards from '@/components/pages/Crad'
import { CircleCheck, Clock10, DollarSign } from 'lucide-react';
import React from 'react'

const cardData = [
    {
      icon: CircleCheck,
      title: "Free Cancelation",
      description: "Cancel anytime without extra charges."
    },
    {
      icon: DollarSign,
      title: "No Hidden Charges",
      description: "Pay only for what you see—no surprises."
    },
    {
      icon: Clock10,
      title: "24/7 Customer Service",
      description: "Our team is always here to assist you."
    }
  ];
  

function page() {
  return (
    <div>
    <CarHeader/>
    <Cards cards={cardData}/>
      <CarListing/>
    </div>
  )
}

export default page
