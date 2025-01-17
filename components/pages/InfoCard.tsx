import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Plane, Wallet } from "lucide-react";

const cardData = [
  {
    id: 1,
    icon: <HelpCircle className="w-12 h-12 text-blue-600" />,
    title: "We are Now Available",
    description: "Call +1 555 666 888 contact with us",
  },
  {
    id: 2,
    icon: <Plane className="w-12 h-12 text-blue-600" />,
    title: "International Flight",
    description: "Call +1 555 666 888 contact with us",
  },
  {
    id: 3,
    icon: <Wallet className="w-12 h-12 text-blue-600" />,
    title: "Check Refund",
    description: "Call +1 555 666 888 contact with us",
  },
];

export default function InfoCards() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      {cardData.map((card) => (
        <Card key={card.id} className="border-0 shadow-sm">
          <CardContent className="flex items-start gap-4 p-6">
            <div className="rounded-full p-2 bg-blue-50">{card.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
