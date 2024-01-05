import React from "react";
import arrow from "./Svg/arrow.svg";

const ICONS = {
  arrow,
};

export type IconType = keyof typeof ICONS;

interface IconProps {
  name: IconType;
  className?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

const AppIcon = ({ name, ...props }: IconProps) => {
  const CurrentIcon = ICONS[name];
  return <CurrentIcon {...props} />;
};

export const Icon = React.memo(AppIcon);
