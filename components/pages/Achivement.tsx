import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCheck } from "lucide-react"

interface AchievementData {
  title: string;
  description: string;
  happyCustomersCount: string;
  clientSatisfactionPercentage: string;
  imageSrc: string;
}

const achievements: AchievementData[] = [
  {
    title: "Your Destination Awaits, Book Now",
    description: "Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu.",
    happyCustomersCount: "12870+",
    clientSatisfactionPercentage: "100%",
    imageSrc: "/achievement-image.png", // Replace with an actual image path or mock image
  },
];

export default function AchievementCard() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {achievements.map((achievement, index) => (
        <Card key={index} className="overflow-hidden mb-8">
          <CardContent className="p-8 grid md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="space-y-6 ">
              <div className="">
                <p className="text-blue-600 font-medium mb-2 ">Achievement</p>
                <h2 className="text-3xl font-bold mb-4">{achievement.title}</h2>
                <p className="text-gray-500 leading-relaxed">{achievement.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{achievement.happyCustomersCount}</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <UserCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{achievement.clientSatisfactionPercentage}</p>
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
                src={achievement.imageSrc}
                alt="Passenger enjoying flight"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
