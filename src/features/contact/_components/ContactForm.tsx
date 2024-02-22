import React, { FormEvent, useRef, useState } from "react";
import { cn } from "@/utils/cn";

const ContactForm = () => {
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const [resMsg, setResMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current?.value,
        message: message.current?.value,
      }),
    });

    const data = await res.json();

    setIsLoading(false);

    if (res.status === 200) {
      setIsSuccess(true);
      setResMsg(data.message);
      email.current!.value = "";
      message.current!.value = "";
      return;
    }

    if (!res.ok) {
      return setResMsg(data.message);
    }
  };
  return (
    <form
      className={
        "relative mt-20 flex w-full flex-col pb-4 text-base sm:max-w-[40%] lg:mt-12 lg:max-w-lg"
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
          className={cn(isLoading && "cursor-not-allowed !text-neutral-300")}
          disabled={isLoading}
        >
          [send]
        </button>
        <div className={"hovered-div"} />
      </div>
      {resMsg && (
        <p
          className={cn(
            "absolute -bottom-3 text-base sm:whitespace-nowrap",
            isSuccess ? "text-green-600" : "text-red-600",
          )}
        >
          {resMsg}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
