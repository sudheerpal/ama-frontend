import Banner from "@/components/home/Banner";
import EntrepreneurBanner from "@/components/home/EntrepreneurBanner";
import Footer from "@/components/home/Footer";
import Industries from "@/components/home/Industries";
import Newses from "@/components/home/Newses";
import Service from "@/components/home/Service";
import Sponsors from "@/components/home/Sponsors";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import {
  fetchIndustriesHome,
  fetchSponsorLogos,
  fetchTestimonials,
} from "@/utils/fetchFunctions";

export default async function Home() {
  const industryCardDataHome = await fetchIndustriesHome();
  const testimonialsHome = await fetchTestimonials();
  const sponsorsHome = await fetchSponsorLogos();

  return (
    <div>
      <Banner />
      <Service />
      <Industries industries={industryCardDataHome} />
      <StatsSection />
      <Testimonials testimonials={testimonialsHome} />
      <Sponsors sponsors={sponsorsHome} />
      <EntrepreneurBanner />
      <Newses />
      <Footer />
    </div>
  );
}
