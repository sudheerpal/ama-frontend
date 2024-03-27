import React from "react";
import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const LucidIcon = ({ name, size = 24 }) => {
  const DynamicLucideIcon = dynamic(dynamicIconImports[name]);
  return <DynamicLucideIcon size={size} />;
};

export default LucidIcon;
