import * as React from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import { useEffect } from "react";

const IndexPage = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1450) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1450) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <body className="px-10 pb-5 bod bg-white dark:bg-[#001C30] text-slate-800 dark:text-slate-400 tracking-wider h-[100vh] scroll ">
      <div className="scroll-child"></div>
      {isDesktop ? (
        <nav className="scroll-child pt-8">
          <ul className="flex justify-between items-baseline">
            <div>Sumit Parida</div>
            <div className="flex pageLinks items-baseline ">
              <li className=" hover:text-[#64cc95] dark:text-[#64CCC5]    dark:hover:text-[#64ccc5]">
                <Link to="#about">About</Link>
              </li>
              <li className=" hover:text-[#64cc95] dark:text-[#64CCC5]    dark:hover:text-[#64ccc5]">
                <Link to="#projects">Projects</Link>
              </li>
              <li className=" hover:text-[#64cc95] dark:text-[#64CCC5]    dark:hover:text-[#64ccc5]">
                <Link to="#contact">Contact</Link>
              </li>
              <li className="resume border-[1px] rounded text-[#64cc95] dark:text-[#64CCC5]  border-[#64cc95] dark:border-[#64CCC5] hover:bg-[#64cc95] hover:text-white hover:border-[#64cc95] dark:hover:bg-[#64CCC5] dark:hover:text-white dark:hover:border-[#64CCC5]">
                <Link to="#about">Resume</Link>
              </li>
            </div>
          </ul>
        </nav>
      ) : (
        <div className="flex items-center justify-between border-b border-gray-400 py-8">
          <a href="/">Sumit Parida</a>
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/about">About</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </section>

            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
        </div>
      )}

      <main className="flex">
        <div className="content lg:w-[70%] mx-auto">
          <section
            className="lg:w-[70%] mt-[4rem] mx-auto md:mt-[6rem] pb-[8rem] sec"
            id="landing"
          >
            <p className="text-[#64cc95] dark:text-[#64CCC5] ">
              Hi, my name is
            </p>

            <h1 className="md:text-7xl text-5xl text-grey-900 dark:text-slate-200 md:mt-[1rem] font-bold">
              Sumit Parida.
            </h1>
            <h1 className="md:text-6xl text-4xl md:mt-[1rem] font-bold">
              I'm a Full-Stack Web Developer.
            </h1>
            <p className="md:w-[70%] mt-4 leading-7 md:text-left w-[90%]   ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              possimus tempora minus veniam harum velit accusamus. Expedita
              error minima dolorem repellat nam deleniti voluptatibus nostrum.
            </p>
          </section>

          <section
            className="lg:w-[70%] mx-auto pt-[2.5rem] md:pt-[4rem] scroll-child sec"
            id="about"
          >
            <div className=" py-0 border-b-[1px] border-slate-300 pb-[3px] dark:border-slate-500 w-[60%]">
              <h2 className="text-slate-600 text-3xl ">About Me</h2>
            </div>
            <div className="md:flex justify-between">
              <div className="md:w-[35%] w-[100%]  mt-8">
                <StaticImage
                  objectFit="contain"
                  src="https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png"
                  alt="image"
                />
              </div>
              <div className="md:w-[60%] w-[100%] mt-8">
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Velit, similique:
                </p>
                <ul className="h-[13%] flex flex-col dark:darkMode flex-wrap mt-4 skillList">
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
            </div>
          </section>
          <section
            id="projects"
            className="lg:w-[100%] mx-auto  mt-[10rem] pt-[2.5rem] md:pt-[4rem] scroll-child sec"
          >
            <div className=" py-0 border-b-[1px] border-slate-300 pb-[3px] dark:border-slate-500 w-[70%]  ">
              <h2 className="text-slate-600 text-3xl ">Projects</h2>
            </div>

            <div className="flex flex-wrap w-[100%] justify-center  flex-row gap-[30px]">
              <article className="card mt-8 dark:hover:text-[#64CCC5] hover:text-[#64CC95]">
                <div className="thumb"></div>
                <div className="infos dark:bg-[#112240] bg-white ">
                  <h2 className="title flex px-2 w-[100%] justify-between items-center align-baseline">
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
                    <p className="txt px-2 dark:text-slate-300 text-slate-800 ">
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
                        className="bi bi-github text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
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

              <article className="card mt-8 dark:hover:text-[#64CCC5] hover:text-[#64CC95] ">
                <div className="thumb"></div>
                <div className={`infos  dark:bg-[#112240] bg-white `}>
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
                  <div className="h-[80%] flex flex-col justify-between dark:text-slate-300 text-slate-800">
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
                        className="bi bi-github text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
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

              <article className="card mt-8 dark:hover:text-[#64CCC5] hover:text-[#64CC95]">
                <div className="thumb"></div>
                <div className={`infos  dark:bg-[#112240] bg-white `}>
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
                  <p className="date text-slate-400 px-2 text-[10px]  ">
                    #React #Javascript
                  </p>
                  <div className="h-[80%] flex flex-col justify-between dark:text-slate-300 text-slate-800">
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
                        className="bi bi-github text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
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
            className="lg:w-[50%] w-[100%] mx-auto mt-[14rem] pt-[2.5rem] md:pt-[4rem] text-center scroll-child sec"
          >
            <h1 className="md:text-6xl text-4xl text-slate-600 dark:text-slate-200">
              Send me a message!
            </h1>
            <p className="mt-6 text-sm md:text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              labore dolorum itaque culpa, molestias officia autem delectus
              eligendi, natus vel eos corrupti est eveniet hic.
            </p>

            <div className="w-[100%]">
              <div className="flex justify-between mt-16 w-[100%]">
                <div className="w-[100%] flex justify-start flex-col ">
                  <p className="dark:text-slate-300 text-slate-700 text-left ">
                    Your Name
                  </p>
                  <input
                    className="dark:bg-[#001C30] border-b border-[#64CCC5] focus:border-b-2 focus:outline-none  mt-1 w-[90%] text-left    "
                    placeholder="Enter your name"
                  ></input>
                </div>

                <div className="w-[100%] flex justify-start flex-col">
                  <p className="dark:text-slate-300 text-slate-700 text-left">
                    Your Email
                  </p>
                  <input
                    className="dark:bg-[#001C30] border-b border-[#64cc95] dark:border-[#64CCC5] focus:border-b-2 focus:outline-none mt-1 w-[100%] "
                    placeholder="Enter your email"
                  ></input>
                </div>
              </div>
              <div className="mt-8">
                <p className="dark:text-slate-300 text-slate-700 text-left">
                  Your Message
                </p>
                <textarea
                  className="dark:bg-[#001C30] border-b border-[#64cc95] dark:border-[#64CCC5] mt-1 h-auto w-[100%] message focus:outline-none  focus:border-b-2 "
                  placeholder="Enter your name"
                ></textarea>
              </div>
              <button className=" mt-8 rounded py-2 px-8 text-[#64cc95] dark:text-[#64CCC5] border-2 border-[#64cc95] dark:border-[#64CCC5] hover:bg-[#64cc95] hover:text-white hover:border-[#64cc95] dark:hover:bg-[#64CCC5] dark:hover:text-white dark:hover:border-[#64CCC5] ">
                Send
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-[6rem] mb-[2rem]">
        <p className="w-[100%] text-sm  text-center text-slate-300">
          Designed and Developed by Sumit Parida
        </p>
      </footer>
      <div className="scroll-child"></div>
    </body>
  );
};

export const Head = () => (
  <>
    <title>Sumit Parida</title>
  </>
);

export default IndexPage;
