import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <section
        className="lg:w-[80%] w-[80%] mt-[4rem] mx-auto md:mt-[6rem]"
        id="about"
      >
        <div className=" py-0 border-b-[1px] border-slate-300 pb-[3px] dark:border-slate-500  w-[70%] ">
          <h2 className="text-slate-600 text:xl md:text-3xl ">About Me</h2>
        </div>
        <div className="md:flex justify-between gap-4 mt-4">
          <div className="hidden md:visible ">
            <StaticImage
              objectFit="contain"
              src="https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
              alt="image"
            />
          </div>
          <div className="mt-2">
            <p>
              Back in 2020, I started learning Python, building console games
              and some graphical games for fun. A few months later, I was and
              playing around with web scrapers and API's.Fast forward to today,
              I am studying web development at Algonquin College. I've built
              many projects, such as Chat Apps, Music Players and E-commerce
              Website
            </p>

            <p className="pt-2">
              While I'm not coding, I spend most of my day exploring new stuff
              on internet about tech,space and visual designs. I love video
              games, animations and human psychology. I am a super curious guy
              who likes to build stuff and programming has given me the power to
              build things one can only imagine.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
  </>
);

export default AboutPage;
