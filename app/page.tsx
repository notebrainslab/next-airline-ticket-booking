import AchievementCard from "@/components/pages/Achivement";
import FlightBookingCard from "@/components/pages/FightBook";
import FlightDeals from "@/components/pages/FlightDeals";
import Hero from "@/components/pages/Hero";
import InfoCards from "@/components/pages/InfoCard";
import LatestNews from "@/components/pages/Latest-news";
import PopularDestinations from "@/components/pages/PopularDistination";
import Testimonials from "@/components/pages/Tesimonials";

export default function Home() {
  return (
    <div className="px-3 space-y-8">
      <Hero/>
      <FlightBookingCard/>
      <InfoCards/>
      <FlightDeals/>
      <PopularDestinations/>
      <AchievementCard/>
      <Testimonials/>
      <LatestNews/>
      footer....
    </div>
  );
}
