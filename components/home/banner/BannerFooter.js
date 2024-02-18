import Button from "@/components/ui/Button";
import CustomContainer from "@/components/ui/CustomContainer";
import React from "react";
import { ArrowRight } from "react-feather";

const BannerFooter = () => {
  return (
    <div className="bg-secondary">
      <CustomContainer
        classNames={`items-center justify-between px-4 py-4 lg:flex lg:px-24 `}
      >
        <div className="text-2xl font-bold">
          looking for Trending Report by Industries?
        </div>
        <div className="flex justify-center">
          <Button>
            click here <ArrowRight size={16} color="#FDE428" />
          </Button>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerFooter;
