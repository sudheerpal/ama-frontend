import Image from "next/image";
import React from "react";

const SponsordCard = ({ image }) => {
  return (
    <div>
      <Image src={image} alt="sponsor image" />
    </div>
  );
};

export default SponsordCard;
