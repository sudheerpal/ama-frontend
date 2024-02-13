import Banner from "@/components/home/Banner";
import Header from "@/components/home/Header";
import Indutries from "@/components/home/Indutries";
import Newses from "@/components/home/Newses";
import Service from "@/components/home/Service";
import Sponsors from "@/components/home/Sponsors";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Indutries />
      <StatsSection />
      <Testimonials />
      <Sponsors />
      <Newses />
    </div>
  );
}
