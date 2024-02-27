"use client";

import React, { FormEvent, useRef, useState } from "react";
import BackButton from "@/features/_components/BackButton";
import { cn } from "@/utils/cn";
import { Icon } from "@/assets/icons/Icon";
import HomeTabsSection from "@/features/home/_components/HomeTabsSection";
import { socialMediaItems } from "@/features/home/HomeScreen";
import useGetWindowSize from "@/utils/hooks/useGetWindowSize";
import ContactForm from "@/features/contact/_components/ContactForm";

const ContactScreen = () => {
  const { height } = useGetWindowSize();

  return (
    <section className={"mx-auto w-full pb-12 sm:max-w-3xl"}>
      <div className={"inline-block"}>
        <BackButton href={"/"} text={"Contact"} />
      </div>
      <div className={"flex gap-4"}>
        <ContactForm />
        <div
          className={cn(
            "right-[0px] top-12 hidden overflow-hidden sm:fixed sm:block lg:top-32 xl:right-[9vw] 2xl:right-[15vw] 3xl:hidden",
            height > 1700 && "!hidden",
          )}
        >
          <Icon name={"arrowcontact"} className={"overflow-hidden"} />
        </div>
      </div>
      <div className={"-ml-4 mt-20"}>
        <HomeTabsSection links={socialMediaItems} heading={"Connect"} />
      </div>
    </section>
  );
};

export default ContactScreen;
