"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function Tabs({ activeTab }) {
  console.log("activeTab", activeTab);

  const tabs = [
    {
      label: "Summary",
      value: "summary",
    },
    {
      label: "Table of Content",
      value: "toc",
    },
    {
      label: "Segmentation",
      value: "segments",
    },
    {
      label: "Methodology",
      value: "methodology",
    },
  ];
  const router = useRouter();
  return (
    <div className="relative">
      <hr className="absolute w-full border-b-2 border-primary top-[18px] md:top-[30px] z-10" />
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={async () => {
              await axios.post("/api/cookie", {
                name: "tab",
                value: tab.value,
              });
              await router.refresh();
            }}
            className={`mr-1 md:mx-4 tab border border-primary text-nowrap font-semibold ${
              activeTab === tab.value ? "bg-primary text-white" : "text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
