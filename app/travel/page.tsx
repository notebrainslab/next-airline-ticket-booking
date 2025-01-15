import PaginationDemo from "@/components/pages/PaginationDemo"
import TravelBooking from "@/components/pages/TravelBooking"
import TravelCards from "@/components/pages/TravelCrad"
import TravelHeader from "@/components/pages/TravelHeader"

function page() {
  return (
    <div>
    <TravelHeader/>
    <TravelCards/>
      <TravelBooking/>
      <PaginationDemo/>
    </div>
  )
}

export default page
