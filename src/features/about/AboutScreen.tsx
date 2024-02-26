import React from "react";
import BackButton from "@/features/_components/BackButton";
import Image from "next/image";
import { images } from "@/assets/images/Images";

const AboutScreen = () => {
  return (
    <section className={"mx-auto w-full sm:max-w-3xl"}>
      <div className={"inline-block"}>
        <BackButton href={"/"} text={"About"} />
      </div>
      <div className={"flex flex-col-reverse sm:block"}>
        <Image
          className=" mx-auto my-4
          w-40 rounded-lg object-cover object-center shadow-lg sm:float-right sm:clear-both
          sm:my-0
          sm:ml-4
          sm:mr-0
          sm:aspect-[1/1]
          "
          src={JSON.parse(JSON.stringify(images.aboutPhoto))}
          alt="Kamil Moskala's photo"
        />
        <div className={"text-justify text-neutral-600"}>
          <p>
            {`
        Hey there! 👋 I'm a 16-year-old React and React Native developer. My
        journey into coding started with curiosity but quickly turned into a
        full-blown passion. I love delving into React's architecture and
        engaging with Open Source activities.
        `}
          </p>
          <br />
          <p>
            {`
        What sets me apart? Well, besides my age, I bring a ton of creativity
        and problem-solving skills to the table. I thrive on turning ideas into
        reality, whether it's crafting slick user experiences or optimizing
        performance. I also care about the community by contributing to open
        source projects and sharing knowledge.
        `}
          </p>
          <br />
          <p>
            {`
        My journey has started recently, but I'm excited about the endless
        possibilities ahead. So, let's keep coding, keep creating, and keep
        inspiring each other! 🚀
        `}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;
