import * as React from "react";
import Layout from "../components/Layout.js";
import AccordionDemo from "../components/Accordion.js";

const IndexPage = () => {
  return (
    <Layout>
      {/* <AccordionDemo /> */}
      <section
        className="lg:w-[70%] w-[80%] mt-[6rem] mx-auto md:mt-[6rem]"
        id="landing"
      >
        <p className="text-[#64cc95] dark:text-[#64CCC5]">Hi, my name is</p>
        <h1 className="md:text-7xl text-5xl text-gray-900 dark:text-slate-200 md:mt-[1rem] font-bold">
          Sumit Parida.
        </h1>
        <h2 className="md:text-6xl text-4xl md:mt-[1rem] font-bold">
          I'm a Full-Stack Web Developer.
        </h2>
        <p className="md:w-[90%] md:text-md mt-4 leading-7 md:text-left w-[90%]">
          I am a developer with a strong foundation in web development
          technologies, including front-end development tools and back-end
          programming languages. I am committed to learning and staying
          up-to-date with emerging technologies to build innovative web
          applications.
        </p>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Sumit Parida</title>
  </>
);

export default IndexPage;
