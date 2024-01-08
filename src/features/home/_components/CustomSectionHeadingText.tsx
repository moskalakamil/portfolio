import React from "react";

interface CustomSectionHeadingTextProps {
  text: string;
}

const CustomSectionHeadingText = ({ text }: CustomSectionHeadingTextProps) => {
  return (
    <p className={"my-4 text-xl lowercase text-neutral-400"}>
      [{text.replaceAll(" ", "_")}]
    </p>
  );
};

export default CustomSectionHeadingText;
