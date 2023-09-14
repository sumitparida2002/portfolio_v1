import * as React from "react";
import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import { useEffect } from "react";

const IndexPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  window.onload = function () {
    document.location.hash = "";
  };

  return (
    <body className=" pb-5 bod bg-white dark:bg-[#001C30] text-slate-800 dark:text-slate-400 tracking-wider h-[100vh] scroll ">
      <div className="scroll-child"></div>
      <nav className="scroll-child px-10 pt-8 hidden md:block ">
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
              <Link to="../../public.page-data/FSWEP.pdf" download={true}>
                Resume
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <div className="flex px-10 items-center justify-between border-b border-gray-400 py-8 md:hidden">
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

      <div className="flex px-10">
        <aside className="flex flex-col gap-6">
          <a target="_blank" href="https://github.com/sumitparida2002">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-github text-slate-400 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/sumitparida/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-linkedin text-slate-400 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/sumitparida/?hl=en"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-instagram text-slate-400 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
        </aside>
        <main className="flex">
          <div className="content lg:w-[80%] mx-auto">
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
              <p className="md:w-[90%] mt-4 leading-7 md:text-left w-[90%]   ">
                I am a developer with a strong foundation in web development
                technologies, including front-end development tools and back-end
                programming languages.I am committed to learning and staying
                up-to-date with emerging technologies to build innovative web
                applications.
              </p>
            </section>

            <section
              className="lg:w-[80%] mx-auto pt-[2.5rem] md:pt-[4rem] scroll-child sec"
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
                    Back in 2020, I started learning Python, building console
                    games and some graphical games for fun. A few months later,
                    I was and playing around with web scrapers and API's.Fast
                    forward to today, I am studying web development at Algonquin
                    College. I've built many projects, such as Chat Apps, Music
                    Players and E-commerce Website
                  </p>

                  <p className="pt-2">
                    While I'm not coding, I spend most of my day exploring new
                    stuff on internet about tech,space and visual designs. I
                    love video games, animations and human psychology. I am a
                    super curious guy who likes to build stuff and programming
                    has given me the power to build things one can only imagine.
                  </p>
                </div>
              </div>
            </section>
            <section
              id="projects"
              className="lg:w-[95%] mx-auto  mt-[15rem] pt-[2.5rem] md:pt-[4rem] scroll-child sec"
            >
              <div className=" py-0 border-b-[1px] border-slate-300 pb-[3px] dark:border-slate-500 w-[70%]  ">
                <h2 className="text-slate-600 text-3xl ">Projects</h2>
              </div>

              <div className="flex flex-wrap w-[100%] flex-row gap-[30px]">
                <article className="card mt-8 dark:hover:text-[#64CCC5] hover:text-[#64CC95]">
                  <div className="thumbSocial"></div>
                  <div className="infos dark:bg-[#112240] bg-white ">
                    <h2 className="title flex px-2 w-[100%] justify-between items-center align-baseline">
                      <p>Social</p>
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
                      #React #Redux #MERN
                    </p>
                    <div className="h-[80%] flex flex-col justify-between">
                      <p className="txt px-2 dark:text-slate-300 text-slate-800 ">
                        A social media app in which users have abillity to post
                        images, add friends and like and comment ont other
                        people's post.
                      </p>
                      <div className="details w-[100%] px-2 flex justify-end gap-6 ">
                        <a
                          target="_blank"
                          href="https://dribbble.com/stories/2021/02/09/social-media-design-tips"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-camera text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                          </svg>
                        </a>
                        <a
                          target="_blank"
                          href="https://github.com/sumitparida2002/SocialMediaApp"
                        >
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
                        </a>

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
                  <div className="thumbChat"></div>
                  <div className={`infos  dark:bg-[#112240] bg-white `}>
                    <h2 className="title flex px-2 w-[100%]  justify-between items-center align-baseline">
                      <p>ChatUp</p>
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
                      #Firebase #React
                    </p>
                    <div className="h-[80%] flex flex-col justify-between dark:text-slate-300 text-slate-800">
                      <p className="txt px-2 ">
                        A simple chat app in which users can join multiple chat
                        rooms and chat up.
                      </p>
                      <div className="details w-[100%] px-2 flex justify-end gap-6 ">
                        <a
                          target="_blank"
                          href="https://static.vecteezy.com/system/resources/previews/008/296/859/non_2x/concept-illustration-of-man-and-woman-friends-having-online-conversation-messaging-chatting-communication-texting-messages-in-mobile-phone-apps-flat-cartoon-style-free-vector.jpg"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-camera text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                          </svg>
                        </a>
                        <a
                          target="_blank"
                          href="https://github.com/sumitparida2002/ChatApp-W-FireBase"
                        >
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
                        </a>
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
                  <div className="thumbMusic"></div>
                  <div className={`infos  dark:bg-[#112240] bg-white `}>
                    <h2 className="title flex px-2 w-[100%]  justify-between items-center align-baseline">
                      <p>Tunes</p>
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
                      #NextJS #Graphql #Typescript
                    </p>
                    <div className="h-[80%] flex flex-col justify-between dark:text-slate-300 text-slate-800">
                      <p className="txt px-2 ">
                        A music website in which users can play their favourite
                        songs and create playlists.
                      </p>
                      <div className="details w-[100%] px-2 flex justify-end gap-6 ">
                        <a
                          target="_blank"
                          href="https://www.tenstickers-canada.com/wall-mural/music-illustration-urban-style-notes-wall-mural-F5823"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-camera text-slate-300 hover:text-[#64cc95] dark:hover:text-[#64CCC5]"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                          </svg>
                        </a>

                        <a
                          target="_blank"
                          href="https://github.com/sumitparida2002/tunes"
                        >
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
                        </a>

                        <a
                          target="_blank"
                          href="https://tunes-beta.vercel.app/"
                        >
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
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <section
              id="contact"
              className="lg:w-[50%] w-[100%] mx-auto mt-[14rem] pt-[2.5rem] md:pt-[4rem] text-center  sec"
            >
              <h1 className="md:text-6xl text-4xl text-slate-600 dark:text-slate-200">
                Send me a message!
              </h1>
              <p className="mt-6 text-sm md:text-base ">
                Have a sweet project in mind or just want to say hi? Feel free
                to send me a message!
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
        <aside className="sidebar2"></aside>
      </div>
      <footer className="mt-[6rem] px-10  scroll-child mb-[.5rem]">
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
