import Banner from "@/components/home/Banner";
import EntrepreneurBanner from "@/components/home/EntrepreneurBanner";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Indutries from "@/components/home/Indutries";
import Newses from "@/components/home/Newses";
import Service from "@/components/home/Service";
import Sponsors from "@/components/home/Sponsors";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";

export default async function Home() {
  const industryResponse = await fetch(
    "https://ama-admin.com/api/categories?home=true"
  );
  const { data: industryCardDataHome } = await industryResponse.json();

  return (
    <div>
      <Banner />
      <Service />
      <Indutries industries={industryCardDataHome} />
      <StatsSection />
      <Testimonials />
      <Sponsors />
      <EntrepreneurBanner />
      <Newses />
      <Footer />
    </div>
  );
}
