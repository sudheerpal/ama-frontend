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
import { fetchIndustriesHome, fetchTestimonials } from "@/utils/fetchFunctions";

export default async function Home() {
  const industryCardDataHome = await fetchIndustriesHome();
  const testimonialsHome = await fetchTestimonials();

  return (
    <div>
      <Banner />
      <Service />
      <Indutries industries={industryCardDataHome} />
      <StatsSection />
      <Testimonials testimonials={testimonialsHome} />
      <Sponsors />
      <EntrepreneurBanner />
      <Newses />
      <Footer />
    </div>
  );
}
