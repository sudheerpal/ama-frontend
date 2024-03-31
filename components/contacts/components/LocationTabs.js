"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Mail, MapPin, PhoneCall } from "react-feather";

import image1 from "@/assets/contact/location/image1.png";
import image2 from "@/assets/contact/location/image2.png";
import image3 from "@/assets/contact/location/image3.png";

const LocationTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabsElement = [
    {
      id: 1,
      tabName: "New York Office",
      tabContent: (
        <>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Image className="w-full" src={image1} alt="image one" />
            </div>
            <div>
              <Image className="w-full" src={image2} alt="map image" />
            </div>
            <div
              style={{
                backgroundImage: `url(${image3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="grid w-full h-full p-5 py-12 text-white bg-opacity-80 bg-primary place-items-center">
                <div>
                  <h3 className="mb-5 text-xl font-bold">contact details</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <MapPin className="text-secondary" size={14} />
                      <span>
                        A5010, Solitaire Business Hub, <br /> Viman Nagar,{" "}
                        <br /> Pune India - 411014
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="text-secondary" size={14} />
                      <span>+1 551 333 1547 </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="text-secondary" size={14} />
                      <span>sales@advancemarketanalytics.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      id: 2,
      tabName: "London Office",
      tabContent: (
        <>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Image className="w-full" src={image1} alt="image one" />
            </div>
            <div>
              <Image className="w-full" src={image2} alt="map image" />
            </div>
            <div
              style={{
                backgroundImage: `url(${image3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="grid w-full h-full p-5 py-12 text-white bg-opacity-80 bg-primary place-items-center">
                <div>
                  <h3 className="mb-5 text-xl font-bold">contact details</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <MapPin className="text-secondary" size={14} />
                      <span>
                        1010 Avenue of the Moon <br />
                        New York, NY 10018 US.
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="text-secondary" size={14} />
                      <span>+1 453 567 7000</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="text-secondary" size={14} />
                      <span>brandon@advance.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      id: 3,
      tabName: "Paris Office",
      tabContent: (
        <>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Image className="w-full" src={image1} alt="image one" />
            </div>
            <div>
              <Image className="w-full" src={image2} alt="map image" />
            </div>
            <div
              style={{
                backgroundImage: `url(${image3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="grid w-full h-full p-5 py-12 text-white bg-opacity-80 bg-primary place-items-center">
                <div>
                  <h3 className="mb-5 text-xl font-bold">contact details</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <MapPin className="text-secondary" size={14} />
                      <span>456 Paris Street, Paris, France.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="text-secondary" size={14} />
                      <span>+33 456 789 1234</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="text-secondary" size={14} />
                      <span>paris@company.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },

    {
      id: 4,
      tabName: "Tokyo Office",
      tabContent: (
        <>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Image className="w-full" src={image1} alt="image one" />
            </div>
            <div>
              <Image className="w-full" src={image2} alt="map image" />
            </div>
            <div
              style={{
                backgroundImage: `url(${image3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="grid w-full h-full p-5 py-12 text-white bg-opacity-80 bg-primary place-items-center">
                <div>
                  <h3 className="mb-5 text-xl font-bold">contact details</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <MapPin className="text-secondary" size={14} />
                      <span>789 Tokyo Street, Tokyo, Japan.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="text-secondary" size={14} />
                      <span>+81 789 123 4567</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="text-secondary" size={14} />
                      <span>tokyo@company.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ),
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* tabs nav */}
      <nav className="bg-secondary text-primary">
        <ul className="flex flex-wrap gap-y-2">
          {tabsElement.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2 font-bold md:py-4 hover:bg-primary hover:text-secondary ${
                  activeTab === tab.id ? "bg-primary text-secondary" : ""
                }`}
              >
                {tab.tabName}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* tabs container */}
      <section className="my-5">
        {tabsElement.find((tab) => tab.id === activeTab)?.tabContent}
      </section>
    </div>
  );
};

export default LocationTabs;
