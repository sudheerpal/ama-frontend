import Button from "@/components/ui/Button";
import React from "react";

const BannerFooter = () => {
  return (
    <div className="items-center justify-between px-4 py-4 lg:flex lg:px-24 bg-secondary">
      <div className="text-2xl font-bold">
        looking for Trending Report by Industries?
      </div>
      <div className="flex justify-center">
        <Button>click here</Button>
      </div>
    </div>
  );
};

export default BannerFooter;
