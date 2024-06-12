"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CustomContainer from "../ui/CustomContainer";
import MRFImage from "../ui/Image";
import mainLogo from "@/assets/logo4.jpeg";
import Link from "next/link";

export default function Tabs({ activeTab, basic }) {
  const router = useRouter();
  const params = useParams();

  const {
    ref: summaryTabRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const [isStickyNavShow, setIsStickyNavShow] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const tabs = [
    {
      label: "Summary",
      value: "summary",
    },
    {
      label: isMobile ? "TOC" : "Table of Content",
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

  useEffect(() => {
    // Check if the device width is below a certain threshold to determine mobile
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    if (params.slug !== basic.slug) {
      router.replace(`/reports/${basic.slug}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (entry) {
      const boundingClientRect = entry.boundingClientRect;
      const isOutOfViewFromTop = boundingClientRect.top < 0;
      if (isOutOfViewFromTop && !inView) {
        setIsStickyNavShow(true);
      } else {
        setIsStickyNavShow(false);
      }
    }
  }, [inView, entry]);

  return (
    <div className="relative">
      {!inView && isStickyNavShow && (
        <div
          className={`fixed top-0 duration-100 left-0 lg:-left-2 bg-white shadow-lg w-[100vw] py-3 z-20 ${
            !inView ? "block" : "hidden"
          }`}
        >
          <CustomContainer classNames="lg:flex gap-5 items-center">
            <div className="flex gap-5">
              <MRFImage
                classNames="max-w-28 lg:max-w-36 xl:max-w-40 md:pr-4 max-h-12"
                src={mainLogo}
                alt="Market Research Future Logo"
              />
              <h2 className="font-bold uppercase xl:text-lg text-primary">
                {basic?.title}
              </h2>
            </div>
            <div className="mt-2 tabs-xs tabs md:tabs-md md:tabs-boxed">
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
                    activeTab === tab.value
                      ? "bg-primary text-white"
                      : "text-primary"
                  }`}
                  style={{
                    borderRadius: "4px",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </CustomContainer>
        </div>
      )}

      <hr
        ref={summaryTabRef}
        className="absolute w-full border-b-2 border-primary top-[18px] md:top-[30px] z-10"
      />
      <div className="max-w-lg tabs-xs tabs md:tabs-md">
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
            style={{
              borderRadius: "4px 4px 0 0",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
