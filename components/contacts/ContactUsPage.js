import React from "react";
import CustomContainer from "../ui/CustomContainer";
import LocationTabs from "./components/LocationTabs";

const ContactUsPage = () => {
  return (
    <div>
      <main>
        {/* location tabs section */}
        <section>
          <CustomContainer>
            <LocationTabs />
          </CustomContainer>
        </section>
      </main>
    </div>
  );
};

export default ContactUsPage;
