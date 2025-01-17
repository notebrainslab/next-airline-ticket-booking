import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

function BookingManage() {
  return (
    <div className="w-full max-w-6xl mx-auto">
    <Tabs defaultValue="manage" className="w-full">
      <TabsList className="flex w-full justify-start border-b rounded-none h-auto p-0 bg-transparent space-x-8">
        <TabsTrigger 
          value="manage" 
          className="relative bg-transparent h-12 rounded-lg px-5 pb-3 pt-2 font-medium   data-[state=active]:text-white hover:text-black"
        >
          Manage Booking
        </TabsTrigger>
        <TabsTrigger 
          value="checkin"
          className="relative h-12 rounded-lg px-5 pb-3 pt-2 font-medium  data-[state=active]:text-white hover:text-black"
        >
          Check in
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="manage" className="mt-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input 
              type="text" 
              placeholder="Booking Reference"
              className="h-12 bg-blue-50 border-none"
            />
          </div>
          <div className="flex-1">
            <Input 
              type="text" 
              placeholder="Last Name"
              className="h-12 bg-blue-50 border-none"
            />
          </div>
          <Button 
            className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Check Booking
          </Button>
        </div>
      </TabsContent>
      
      <TabsContent value="checkin" className="mt-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input 
              type="text" 
              placeholder="Booking Reference"
              className="h-12 bg-blue-50 border-none"
            />
          </div>
          <div className="flex-1">
            <Input
              type="text" 
              placeholder="Last Name"
              className="h-12 bg-blue-50 border-none"
            />
          </div>
          <Button 
            className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Check Booking
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default BookingManage
