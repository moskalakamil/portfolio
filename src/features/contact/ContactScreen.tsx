"use client";

import React, { FormEvent, useRef, useState } from "react";
import BackButton from "@/features/_components/BackButton";
import { cn } from "@/utils/cn";
import { Icon } from "@/assets/icons/Icon";
import HomeTabsSection from "@/features/home/_components/HomeTabsSection";
import { socialMediaItems } from "@/features/home/HomeScreen";
import useGetWindowSize from "@/utils/hooks/useGetWindowSize";

const ContactScreen = () => {
  const { height } = useGetWindowSize();

  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [resMsg, setResMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const req = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current?.value,
        message: message.current?.value,
      }),
    });
    const res = await req.json();

    setIsLoading(false);

    if (res.status === 200) {
      setIsSuccess(true);
      setResMsg(res.message);
      email.current!.value = "";
      message.current!.value = "";
      return;
    }

    if (!res.ok) {
      return setResMsg(res.message);
    }
  };

  return (
    <section className={"mx-auto w-full sm:max-w-3xl"}>
      <div className={"inline-block"}>
        <BackButton href={"/"} text={"Contact"} />
      </div>
      <div className={"flex gap-4"}>
        <form
          className={
            "mt-20 flex w-full flex-col pb-4 text-base sm:max-w-[40%] lg:mt-12 lg:max-w-lg"
          }
          onSubmit={handleSubmit}
        >
          <input
            placeholder={"[email]"}
            ref={email}
            onChange={() => {
              setResMsg("");
              setIsSuccess(false);
            }}
            className={
              "border-b border-b-[#ACACAC] bg-transparent px-2 py-4 outline-none"
            }
          />
          <textarea
            placeholder={"[message]"}
            ref={message}
            maxLength={10000}
            onChange={() => {
              setResMsg("");
              setIsSuccess(false);
            }}
            className={
              "h-40 resize-none border-b border-b-[#ACACAC] bg-transparent px-2 py-4 outline-none"
            }
          />
          <div className="button-container mr-auto mt-2 flex justify-center px-2 py-2 text-xl">
            <button
              onClick={() => setResMsg("")}
              type={"submit"}
              className={cn(isLoading && "cursor-not-allowed text-neutral-300")}
              disabled={isLoading}
            >
              [send]
            </button>
            <div className="hovered-div" />
          </div>
          {resMsg && (
            <p
              className={cn(
                "absolute bottom-5 text-base",
                isSuccess ? "text-green-600" : "text-red-600",
              )}
            >
              {resMsg}
            </p>
          )}
        </form>
        <div
          className={cn(
            "3xl:hidden right-[0px] top-12 hidden overflow-hidden sm:fixed sm:block lg:top-32 xl:right-[9vw] 2xl:right-[15vw]",
            height > 1700 && "!hidden",
          )}
        >
          <Icon name={"arrowcontact"} className={"overflow-hidden"} />
        </div>
      </div>
      <div className={"-mx-6 mt-20 pl-2"}>
        <HomeTabsSection links={socialMediaItems} heading={"Connect"} />
      </div>
    </section>
  );
};

export default ContactScreen;
