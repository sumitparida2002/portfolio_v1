import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout.js";

import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const sections = document.getElementsByClassName("sec");

  console.log(sections);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
    });
  });

  for (let section of sections) {
    observer.observe(section);
  }

  return (
    <body className="px-10 bod bg-[#001C30] text-slate-400 tracking-wider h-[100vh] scroll ">
      <nav className="scroll-child pt-4">
        <ul className="flex justify-between items-baseline">
          <div>Sumit Parida</div>
          <div className="flex pageLinks items-baseline ">
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
            <li className="resume border-2 rounded text-[#64CCC5] border-[#64CCC5]">
              <Link to="#about">Resume</Link>
            </li>
          </div>
        </ul>
      </nav>
      <main className="flex">
        <div className="content lg:w-[70%] mx-auto">
          <section className="lg:w-[70%] mx-auto mt-[10rem] sec">
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

          <section
            className="lg:w-[67%] mx-auto pt-[rem] scroll-child sec"
            id="about"
          >
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
                  neque?
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
          <section
            id="projects"
            className="lg:w-[70%] mx-auto  mt-[16rem] scroll-child sec"
          >
            <div className=" py-0 border-b-[1px] border-slate-500 w-[60%]  ">
              <h2 className="text-slate-200 text-3xl ">Projects</h2>
            </div>

            <div className="flex flex-wrap w-[100%] flex-row gap-[30px]">
              <article className="card mt-8 text-slate-300">
                <div className="thumb"></div>
                <div className={`infos `}>
                  <h2 className="title flex px-2 w-[100%]  justify-between items-center align-baseline">
                    <p>Lorem</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      />
                    </svg>
                  </h2>
                  <p className="date text-slate-400 px-2 text-[10px] ">
                    #React #Javascript
                  </p>
                  <div className="h-[80%] flex flex-col justify-between">
                    <p className="txt px-2 ">
                      Join us for our Live Infinity Session in beautiful New
                      York City. This is a 3 day intensive workshop where you'll
                      learn how to become
                    </p>
                    <div className="details w-[100%] px-2 flex justify-end gap-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github text-slate-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right text-slate-300"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>

              <article className="card mt-8 text-slate-300">
                <div className="thumb"></div>
                <div className={`infos `}>
                  <h2 className="title flex px-2 w-[100%]  justify-between items-center align-baseline">
                    <p>Lorem</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      />
                    </svg>
                  </h2>
                  <p className="date text-slate-400 px-2 text-[10px] ">
                    #React #Javascript
                  </p>
                  <div className="h-[80%] flex flex-col justify-between">
                    <p className="txt px-2 ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Porro aliquid est obcaecati iste autem a dolorem
                      aspernatur libero, soluta iure ipsam quas deleniti
                      inventore reiciendis
                    </p>
                    <div className="details w-[100%] px-2 flex justify-end gap-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github text-slate-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right text-slate-300"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>

              <article className="card mt-8 text-slate-300">
                <div className="thumb"></div>
                <div className={`infos `}>
                  <h2 className="title flex px-2 w-[100%]  justify-between items-center align-baseline">
                    <p>Lorem</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      />
                    </svg>
                  </h2>
                  <p className="date text-slate-400 px-2 text-[10px] ">
                    #React #Javascript
                  </p>
                  <div className="h-[80%] flex flex-col justify-between">
                    <p className="txt px-2 ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Porro aliquid est obcaecati iste autem a dolorem
                      aspernatur libero, soluta iure ipsam quas deleniti
                    </p>
                    <div className="details w-[100%] px-2 flex justify-end gap-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github text-slate-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right text-slate-300"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section
            id="contact"
            className="lg:w-[50%] mx-auto mt-[20rem] text-center scroll-child sec"
          >
            <h1 className="text-6xl text-slate-200">Send me a message!</h1>
            <p className="mt-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              labore dolorum itaque culpa, molestias officia autem delectus
              eligendi, natus vel eos corrupti est eveniet hic.
            </p>

            <div className="w-[100%]">
              <div className="flex justify-between mt-16 w-[100%]">
                <div className="w-[100%] flex justify-start flex-col ">
                  <p className="text-slate-300 text-left ">Your Name</p>
                  <input
                    className="bg-[#001C30] border-b border-[#64CCC5] focus:border-b-2 focus:outline-none  mt-1 w-[90%] text-left    "
                    placeholder="Enter your name"
                  ></input>
                </div>

                <div className="w-[100%] flex justify-start flex-col">
                  <p className="text-slate-300 text-left">Your Email</p>
                  <input
                    className="bg-[#001C30] border-b border-[#64CCC5] focus:border-b-2 focus:outline-none mt-1 w-[100%] "
                    placeholder="Enter your email"
                  ></input>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-slate-300 text-left">Your Message</p>
                <textarea
                  className="bg-[#001C30] border-b border-[#64CCC5] mt-1 h-auto w-[100%] message focus:outline-none  focus:border-b-2 "
                  placeholder="Enter your name"
                ></textarea>
              </div>
              <button className="btnHov mt-8 border-2 rounded text-[#64CCC5] border-[#64CCC5] py-2 px-8 ">
                Send
              </button>
            </div>
          </section>
        </div>

        <div className="pagination flex flex-col h-[85vh] justify-center">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </main>

      <footer className="mt-[20rem]">
        <p className="w-[100%] text-sm  text-center text-slate-300">
          Designed and Developed by Sumit Parida
        </p>
      </footer>
    </body>
  );
};

export const Head = () => (
  <>
    <title>Sumit Parida</title>
  </>
);

export default IndexPage;
