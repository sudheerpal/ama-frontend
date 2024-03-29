import Button from "@/components/ui/Button";
import CustomContainer from "@/components/ui/CustomContainer";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "react-feather";

const BannerFooter = () => {
  return (
    <div className="bg-secondary">
      <CustomContainer
        classNames={`items-center justify-between py-4 lg:flex `}
      >
        <div className="text-2xl font-bold">
          looking for Trending Report by Industries?
        </div>
        <div className="flex justify-center">
          <Link href={`/industries`}>
            <Button>
              Explore <ArrowRight size={16} color="#FDE428" />
            </Button>
          </Link>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerFooter;
