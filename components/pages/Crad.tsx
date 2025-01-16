import { Card, CardContent } from "@/components/ui/card"
import { CircleCheck, Clock10, DollarSign } from "lucide-react";

type CardData = {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CardsProps {
  cards: CardData[];
}

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
export default function Cards({ cards }: CardsProps) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
      {cards.map((card, index) => (
        <Card key={index} className="border-0 shadow-sm w-full">
          <CardContent className="flex items-center justify-center gap-4 p-6">
            <div className="rounded-full p-2 bg-blue-50">
              <card.icon className="w-12 h-12 text-blue-600" />
            </div>
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
