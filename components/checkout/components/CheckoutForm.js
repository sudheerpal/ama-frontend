"use client";
import InputRadio from "@/components/ui/forms/InputRadio";
import InputText from "@/components/ui/forms/InputText";
import Image from "next/image";
import React, { useState } from "react";
import visaLogo from "@/assets/checkout/visaLogo.jpg";
import bankLogo from "@/assets/checkout/bankLogo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { countryList } from "@/db/countryList";
import PricingCard from "@/components/report/components/PricingCard";
import { Book, Calendar, Grid, Layout } from "react-feather";
import moment from "moment";
import UserCard from "@/components/contacts/components/UserCard";
import QueryForm from "@/components/common/QueryForm";

const CheckoutForm = ({
  reportData,
  type = "OBD",
  title = "",
  status,
  direct = false,
}) => {
  return (
    <div className="flex">
      <div className="lg:w-2/3 lg:mr-4 mt-8 rd">
        <div className="flex justify-between">
          <h3> {title} </h3>
          <Link
            className=" border border-primary transition-all rounded-2xl px-8 font-semibold hover:bg-primary hover:text-white py-1"
            href={`/reports/${reportData?.report?.slug}`}
          >
            View Synopsis & Table of content
          </Link>
        </div>
        <Link
          href={`/reports/${reportData?.report?.slug}`}
          className="font-semibold text-3xl block mt-5"
        >
          {reportData?.report?.title}{" "}
        </Link>
        <p className="text-neutral mt-1"> {reportData?.report?.summery} </p>

        <QueryForm
          type={type}
          btnText="Submit Request"
          slug={reportData?.report?.slug}
          status={status}
          direct={direct}
          price={reportData?.report?.price}
          reportTitle={reportData?.report?.title}
        />
      </div>
      <div className="lg:w-1/3  mt-8 lg:ml-8">
        <div>
          {!direct && (
            <PricingCard
              price={reportData?.report?.price}
              slug={reportData?.report?.slug}
            />
          )}

          <div className="rd my-5">
            <h3>Key Highlights of Report</h3>
            <div className="flex mt-5 w-full">
              <div className="grid flex-grow card bg-base-300 rounded-box place-items-start">
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2" />{" "}
                  <span>
                    {moment(reportData?.report?.updatedAt).format("MMM, YYYY")}
                  </span>
                </div>
              </div>
              <div className="divider divider-horizontal divider-primary"></div>
              <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="flex items-center">
                  <Layout size={20} className="mr-2" />
                  <span>{reportData?.report?.noOfPages || 250}</span>
                </div>
              </div>
              <div className="divider divider-horizontal divider-primary"></div>
              <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="flex items-center">
                  <Grid size={20} className="mr-2" />
                  <span>Tables</span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              Base Year: {new Date().getFullYear() - 1}.
            </div>
            <div>Coverage: 15+ </div>
            <div> Companies: 18 Countries</div>
            <div>
              <div className="my-5">
                <h2 className="text-lg font-bold capitalize md:text-2xl">
                  Connect With us
                </h2>
                <hr className="w-10 border-[3px] rounded border-secondary" />
              </div>
              <div className="space-y-3">
                <UserCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
