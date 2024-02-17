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
      <section className="grid grid-cols-1 lg:divide-x-2 lg:py-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {addresses?.map((address, index) => (
          <div key={index} className="flex justify-center w-full">
            <div className="p-4 space-y-3">
              <h3 className="text-2xl font-bold">{address.country}</h3>
              <p className="flex items-center gap-2">
                <MapPin className="text-secondary" size={18} />{" "}
                {address.location}
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="text-secondary" size={18} />{" "}
                {address.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-secondary" size={18} /> {address.email}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TopFooter;
