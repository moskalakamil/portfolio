import React from "react";
import BackButton from "@/features/_components/BackButton";

const AboutScreen = () => {
  return (
    <section className={"mx-auto w-full sm:max-w-3xl"}>
      <div className={"inline-block"}>
        <BackButton href={"/"} text={"About"} />
      </div>
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
    </section>
  );
};

export default AboutScreen;
