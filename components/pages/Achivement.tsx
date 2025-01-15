import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCheck } from 'lucide-react'

export default function AchievementCard() {
  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden">
      <CardContent className="p-8 grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <p className="text-blue-600 font-medium mb-2">Achievement</p>
            <h2 className="text-3xl font-bold mb-4">
              Your Destination Awaits, Book Now
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu. In tellus
              interdum vel ac massa interdum viverra elementum auctor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">12870+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">100%</p>
                <p className="text-sm text-gray-600">Client Satisfied</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-medium">Let&apos;s Connect Reach Out for More Information</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact us
            </Button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-lg overflow-hidden">
          <Image
            src="/achievement-image.png"
            alt="Passenger enjoying flight"
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
    </Card>
  )
}

