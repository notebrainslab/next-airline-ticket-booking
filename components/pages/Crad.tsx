import { Card, CardContent } from "@/components/ui/card"
import { CircleCheck, Clock10, DollarSign } from 'lucide-react'

export default function Cards() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
      <Card className="border-0 shadow-sm">
        <CardContent className="flex items-center justify-center gap-4 p-6">
          <div className="rounded-full p-2 bg-blue-50">
            <CircleCheck className="w-12 h-12 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Free Cancelation</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardContent className="flex items-center justify-center gap-4 p-6">
          <div className="rounded-full p-2 bg-blue-50">
            <DollarSign className="w-12 h-12 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">No Hidden Charges</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm w-full">
        <CardContent className="flex items-center justify-center gap-4 p-6 ">
          <div className="rounded-full p-2 bg-blue-50">
            <Clock10 className="w-12 h-12 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">24/7 Customer Service</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

