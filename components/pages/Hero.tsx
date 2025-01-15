
import Image from "next/image"

function Hero() {
  return (
    <div
        className="max-w-7xl mx-auto pt-16 lg:pt-32 px-8 lg:px-12 lg:flex items-center justify-center">
        <div className="space-y-8 flex flex-col">
          <h1 className="text-5xl font-bold mb-4 text-center md:text-left">
            <span className="text-blue-600">Book</span> Your
            Dream <span className="text-blue-600">Flights</span>
            Now!
          </h1>
          <p className="text-gray-600 text-xl text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Felis tristique pretium leo nisi at risus ac enim.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black font-semibold transition-colors">
            Book Now
          </button>
        </div>
        <div className="mt-14">
            <Image src={"/plane.png"} alt="plane" width={900} height={600}/>
        </div>
        </div>
  )
}

export default Hero
