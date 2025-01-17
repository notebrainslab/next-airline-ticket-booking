import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

interface Flight {
  id: number;
  date: string;
  logo: string;
  airline: string;
  flightClass: string;
  flightNumber: string;
  aircraft: string;
  luggageInfo: string;
  departure: string;
  duration: string;
  arrival: string;
}

function FlightDetailsToggle({ flight }: { flight: Flight }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="mt-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        {/* Flight Date */}
        <div className="text-sm text-gray-600">{flight.date}</div>
        {/* Toggle Button */}
        <button
          onClick={toggleCard}
          className="text-blue-600 hover:no-underline flex items-center gap-1"
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
          Flight Detail
        </button>
      </div>

      {/* Flight Details Section */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 p-4 border rounded bg-gray-100 flex items-center justify-between">
          <div className="px-10 py-8 bg-sky-100 rounded-lg flex items-center gap-4">
            {/* Airline Logo */}
            <Image
              src={flight.logo} // Dynamically load airline logo
              alt={flight.airline}
              width={50}
              height={50}
              className="w-12 h-12 rounded-full"
            />
            {/* Flight Details */}
            <div className="space-y-3">
              <p className="font-semibold">{flight.airline}</p>
              <p className="text-sm text-gray-500">
                {flight.flightClass} | Flight {flight.flightNumber} | Aircraft{" "}
                {flight.aircraft}
              </p>
              <p className="text-sm text-gray-500">{flight.luggageInfo}</p>
            </div>
          </div>

          <div className="mt-4 px-14 flex flex-col space-y-5 items-end justify-center">
            {/* Button with Date */}
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              {flight.date}
            </Button>
            {/* Departure Details */}
            <p className="text-sm text-gray-900 font-semibold flex gap-3">
              <span>{flight.date}</span>
              <span>{flight.departure}</span>
            </p>
            {/* Flight Duration */}
            <p className="text-sm text-gray-900 font-semibold">
              {flight.duration}
            </p>
            {/* Arrival Details */}
            <p className="text-sm text-gray-900 flex gap-3 font-semibold">
              <span>{flight.date}</span>
              <span>{flight.arrival}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetailsToggle;
