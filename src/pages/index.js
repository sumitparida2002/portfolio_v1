import * as React from "react";
import Layout from "../components/Layout.js";

import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <body className="py-2 px-10 bod bg-[#001C30] text-slate-400 tracking-wider ">
      <Layout>
        <main>
          <section className="lg:w-[70%] mx-auto mt-[10rem]">
            <p className="text-[#64CCC5] ">Hi, my name is</p>
            <h1 className="text-7xl text-slate-200 mt-[1rem] font-bold">
              Sumit Parida.
            </h1>
            <h1 className="text-6xl mt-[1rem] font-bold">
              I'm a Full-Stack Web Developer.
            </h1>
            <p className="w-[70%] mt-4 leading-7  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              possimus tempora minus veniam harum velit accusamus. Expedita
              error minima dolorem repellat nam deleniti voluptatibus nostrum.
            </p>
          </section>
          <section className="lg:w-[67%] mx-auto mt-[16rem]" id="about">
            <div className=" py-0 border-b-[1px] border-slate-500 w-[60%]">
              <h2 className="text-slate-200 text-3xl ">About Me</h2>
            </div>
            <div className="flex justify-between">
              <div className="w-[60%] mt-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  mollitia nesciunt dolore qui labore ipsam similique eos.
                  Mollitia omnis harum sit, fuga ut rerum voluptates minus eum
                  neque? Possimus laboriosam molestiae vitae iste. Reprehenderit
                  eum eos accusamus deserunt, officiis neque necessitatibus
                  debitis, voluptatem rerum quo ut magnam, distinctio molestias?
                  At!
                </p>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  mollitia nesciunt dolore qui labore ipsam similique eos.
                  Mollitia omnis harum sit, fuga ut rerum voluptates minus eum
                  neque? Possimus laboriosam molestiae vitae iste. Reprehenderit
                  eum eos accusamus deserunt, officiis neque necessitatibus
                  debitis, voluptatem rerum quo ut magnam, distinctio molestias?
                  At!
                </p>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  mollitia nesciunt dolore qui labore ipsam similique eos.
                  Mollitia omnis harum sit, fuga ut rerum voluptates minus eum
                  neque? Possimus laboriosam molestiae vitae iste. Reprehenderit
                  eum eos accusamus deserunt, officiis neque necessitatibus
                  debitis, voluptatem rerum quo ut magnam, distinctio molestias?
                  At!
                </p>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Velit, similique:
                </p>

                <ul className="h-[13%] flex flex-col flex-wrap mt-4 skillList">
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
              <div className="w-[35%]  mt-8">
                <StaticImage
                  objectFit="contain"
                  src="https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
                  alt="image"
                />
              </div>
            </div>
          </section>
          <section id="projects" className="lg:w-[70%] mx-auto mt-[16rem]">
            <div className=" py-0 border-b-[1px] border-slate-500 w-[60%]  ">
              <h2 className="text-slate-200 text-3xl ">Projects</h2>
            </div>

            <div className="flex flex-row justify-between items-center mt-4">
              <div className="w-[55%]  mt-8">
                <StaticImage
                  objectFit="contain"
                  src="https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
                  alt="image"
                />
              </div>

              <div className="w-[43%] mt-8">
                <h3 className="text-3xl w-[100%] text-end text-slate-200">
                  Lorem
                </h3>
                <div className="w-[100%]  p-4 mt-2 bg-[#112240] shadow-lg shadow-[#ffffff] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima labore dolorum itaque culpa, molestias officia autem
                  delectus eligendi, natus vel eos corrupti est eveniet hic.
                </div>
                <ul className="flex mx-auto gap-2 justify-end mt-2">
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
                <div className="w-[100%] flex justify-end items-center mt-4 ">
                  <a className="mr-2 hov">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather w-4 h-4 feather-github"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>

                  <a className="hov">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-8">
              <div className="w-[43%] mt-8">
                <h3 className="text-3xl w-[100%]  text-slate-200">Lorem</h3>
                <div className="w-[100%]  p-4 mt-2 bg-[#112240] shadow-lg shadow-[#020c1bb3] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima labore dolorum itaque culpa, molestias officia autem
                  delectus eligendi, natus vel eos corrupti est eveniet hic.
                </div>
                <ul className="flex mx-auto gap-2  mt-2">
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
                <div className="w-[100%] flex items-center mt-4 ">
                  <a className="mr-2 hov">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather w-4 h-4 feather-github"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>

                  <a className="hov">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-[55%]  mt-16">
                <StaticImage
                  objectFit="contain"
                  src="https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-8">
              <div className="w-[55%]  mt-8">
                <StaticImage
                  objectFit="contain"
                  src="https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
                  alt="image"
                />
              </div>
              <div className="w-[43%] mt-8">
                <h3 className="text-3xl w-[100%] text-end text-slate-200">
                  Lorem
                </h3>
                <div className="w-[100%]  p-4 mt-2 bg-[#112240] shadow-lg shadow-[#020c1bb3] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima labore dolorum itaque culpa, molestias officia autem
                  delectus eligendi, natus vel eos corrupti est eveniet hic.
                </div>
                <ul className="flex mx-auto gap-2 justify-end mt-2">
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
                <div className="w-[100%] flex justify-end items-center mt-4 ">
                  <a className="mr-2 hov">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather w-4 h-4 feather-github"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>

                  <a className="hov">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            id="moreProjects"
            className="lg:w-[70%] mx-auto mt-20"
          ></section>

          <section
            id="contact"
            className="lg:w-[50%] mx-auto mt-[20rem] text-center"
          >
            <h1 className="text-6xl text-slate-200">Get In Touch </h1>
            <p className="mt-6 ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              labore dolorum itaque culpa, molestias officia autem delectus
              eligendi, natus vel eos corrupti est eveniet hic.
            </p>

            <button className="btnHov border-2 rounded text-[#64CCC5] border-[#64CCC5] p-2 px-4 mt-6  ">
              Say Hello
            </button>
          </section>
        </main>
      </Layout>
    </body>
  );
};

export const Head = () => (
  <>
    <title>Sumit Parida</title>
  </>
);

export default IndexPage;
