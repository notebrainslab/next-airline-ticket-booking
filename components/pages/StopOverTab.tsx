import React, { useState } from 'react'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { ArrowLeftRight, CalendarIcon, Plane } from 'lucide-react'

function StopOverTab() {
    const [date,setDate]=useState<Date>()
    const [dateTwo,setDateTwo]=useState<Date>()
    const [count,setCount]=useState(0)
  return (
    <div>
      {/* Trip Type Selection */}
      <RadioGroup defaultValue="one-way" className="flex gap-6 mb-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="one-way" id="one-way" />
          <label htmlFor="one-way" className="text-xl text-blue-500 font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            One way
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="round-trip" id="round-trip" />
          <label htmlFor="round-trip" className="text-xl text-blue-500 font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Round-trip
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multi-city" id="multi-city" />
          <label htmlFor="multi-city" className="text-xl text-blue-500 font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Multi-City
          </label>
        </div>
      </RadioGroup>

      {/* Flight Search Form */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-3 gap-4">
          {/* From/To Fields */}
          <div className="space-y-1">
            <label className="text-lg text-gray-500">From</label>
            <Input placeholder="From" className="bg-white placeholder:text-xl" />
          </div>
          <div className="flex items-center justify-center">
            <Button variant="ghost" size="icon" className="mt-6">
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            <label className="text-lg text-gray-500">To</label>
            <Input placeholder="To" className="bg-white placeholder:text-lg" />
          </div>
          <div className="space-y-1">
            <label className="text-lg text-gray-500">Passengers and Class</label>
            <div className="bg-white px-3 py-2 rounded-md border text-sm">
              2 Passengers / Business
            </div>
          </div>
          {/* Dates */}
          <div className="space-y-1">
            <label className="text-lg text-gray-500">Departing</label>
            {/* Date Section */}
            <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Check-in</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

          </div>
          <div className="space-y-1">
            <label className="text-lg text-gray-500">Returning</label>
          {/* Date section       */}
            <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateTwo && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateTwo ? format(dateTwo, "PPP") : <span>Check-out</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateTwo}
                      onSelect={setDateTwo}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

          </div>
        </div>
      </div>

      {/* Stopover Options */}
      <div className='flex flex-row items-center justify-between mb-6 '>
      <div className="">
        <h3 className="text-lg text-gray-600 mb-4">When would you like stop in dubai during your journey?</h3>
        <RadioGroup defaultValue="departure" className="flex gap-6 mb-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="departure" id="departure" />
            <label htmlFor="departure" className="text-xl font-semibold text-blue-500 leading-none">
              Departure
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="return" id="return" />
            <label htmlFor="return" className="text-xl font-semibold text-blue-500 leading-none">
              Return
            </label>
          </div>
        </RadioGroup>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-lg text-gray-600">How many days would you like to stay in Dubai?</p>
          <div className="flex items-center gap-3">
            <Button 
            onClick={()=>{if(count >= 1){setCount(count-1)}}}
            variant="outline" size="lg" className="h-10 w-10 text-blue-400 text-3xl rounded-lg">-</Button>
            <div className="h-8 w-12 flex items-center justify-center border p-2 rounded-md">{count}</div>
            <Button 
            onClick={()=>setCount(count+1)}
            variant="outline" size="lg" className="h-10 w-10 text-blue-400 rounded-lg text-3xl">+</Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center md:justify-end items-center gap-4">
        <Input placeholder="Enter Promo Code" className="max-w-[200px]" />
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plane className="mr-2 h-4 w-4" /> Show Flight
        </Button>
      </div>
    </div>
  )
}

export default StopOverTab
