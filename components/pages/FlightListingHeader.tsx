import Image from "next/image"

export default function FlightListingHeader() {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-100 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          {/* Left Image */}
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <Image
              src="/vacation.png"
              alt="Travel essentials"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Center Text */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Flight Listing
          </h1>

          {/* Right Image */}
          <div className="relative w-[300px] h-[250px]">
            <Image
              src="/plane.png"
              alt="Airplane"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

