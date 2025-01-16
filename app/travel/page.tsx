import PaginationDemo from "@/components/pages/PaginationDemo"
import TravelBooking from "@/components/pages/TravelBooking"
import TravelHeader from "@/components/pages/TravelHeader"
import Cards from "@/components/pages/Crad"

function page() {
  return (
    <div>
    <TravelHeader/>
    <Cards/>
      <TravelBooking/>
      <PaginationDemo/>
    </div>
  )
}

export default page
