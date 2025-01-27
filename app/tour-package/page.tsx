import PaginationDemo from "@/components/pages/PaginationDemo"
import TravelBooking from "@/components/pages/TravelBooking"
import TravelHeader from "@/components/pages/TravelHeader"
import Cards from "@/components/pages/Crad"
import { CircleCheck, Clock10, DollarSign } from "lucide-react";


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
    <TravelHeader/>
    <Cards cards={cardData}/>
      <TravelBooking/>
      <PaginationDemo/>
      
    </div>
  )
}

export default page
