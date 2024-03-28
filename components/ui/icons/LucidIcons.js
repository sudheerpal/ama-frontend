import React from "react";
import { icons } from "lucide-react";

const LucidIcon = ({ name, classNames, size }) => {
  const DynamicLucideIcon = icons[name];

  return <DynamicLucideIcon className={classNames} size={size || 48} />;
};

export default LucidIcon;
