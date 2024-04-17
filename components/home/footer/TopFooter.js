import CustomContainer from "@/components/ui/CustomContainer";
import React from "react";
import { Mail, MapPin, PhoneCall } from "react-feather";

const TopFooter = () => {
  const addresses = [
    {
      country: "United Kingdom",
      location: "14 Tottenham Road, N1 4EP, London",
      phone: "+1 212-226-3126",
      email: "head@consultingwp.com",
    },
    {
      country: "United States",
      location: "123 Main Street, New York, NY 10001",
      phone: "+1 123-456-7890",
      email: "info@company.com",
    },
    {
      country: "Australia",
      location: "456 George Street, Sydney, NSW 2000",
      phone: "+61 2 1234 5678",
      email: "contact@company.com",
    },
  ];

  return (
    <div className="text-white bg-primary">
      <CustomContainer>
        <section className="grid grid-cols-1 lg:divide-x-2 lg:py-10 md:grid-cols-2">
          <div className="flex justify-center w-full">
            <div className="p-4 space-y-3">
              <h3 className="text-2xl font-bold">Business Address</h3>
              <h3 className="text-2xl font-bold">Head Office</h3>
              <p className="flex items-center gap-2">
                <MapPin className="text-secondary" size={18} />{" "}
                <span>
                  Office no. A 5010, fifth floor, Solitaire Business Hub,
                  <br /> Near Phoenix mall, Pune, Maharashtra 41101
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="p-4 space-y-3">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="flex flex-col">
                <p>Craig Francis</p>
                <p className="text-sm text-neutral">
                  Business Development Head
                </p>
              </div>
              <p className="flex items-center gap-2">
                <PhoneCall className="text-secondary" size={18} />{" "}
                <span>+44 1223 92 666</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-secondary" size={18} />
                <span className="text-info">
                  sales@advancemarketanalytics.com
                </span>
              </p>
            </div>
          </div>
        </section>
      </CustomContainer>
    </div>
  );
};

export default TopFooter;
