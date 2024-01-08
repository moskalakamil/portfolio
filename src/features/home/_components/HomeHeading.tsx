import React from "react";

const HomeHeading = () => {
  return (
    <blockquote className={"flex flex-col"}>
      <q className={"text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"}>
        Coding like poetry should be short and concise.
      </q>
      <cite className={"text-right text-2xl"}>~ Santosh Kalwar</cite>
    </blockquote>
  );
};

export default HomeHeading;
