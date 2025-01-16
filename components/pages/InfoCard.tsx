import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, Plane, Wallet } from 'lucide-react'

export default function InfoCards() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      <Card className="border-0 shadow-sm">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="rounded-full p-2 bg-blue-50">
            <HelpCircle className="w-12 h-12 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">We are Now Available</h3>
            <p className="text-sm text-gray-500">
              Call +1 555 666 888 contact with us
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="rounded-full p-2 bg-blue-50">
            <Plane className="w-12 h-12 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">International Flight</h3>
            <p className="text-sm text-gray-500">
              Call +1 555 666 888 contact with us
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm w-full">
        <CardContent className="flex items-start gap-4 p-6 ">
          <div className="rounded-full p-2 bg-blue-50">
            <Wallet className="w-12 h-12 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Check Refund</h3>
            <p className="text-sm text-gray-500">
              Call +1 555 666 888 contact with us
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

