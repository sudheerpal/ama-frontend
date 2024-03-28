import Image from "next/image";
import React from "react";

const SponsordCard = ({ image }) => {
  return (
    <div>
      <Image src={image} width={400} height={100} alt="sponsor image" />
    </div>
  );
};

export default SponsordCard;
