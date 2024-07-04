import * as React from "react";
import { useState } from "react";
import downloadbleFile from "../Resume.pdf";
import { Link } from "gatsby";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {" "}
      <nav className="px-10 py-4 hidden md:block fixed top-0 left-0 right-0 z-10 ">
        <div>
          <ul className="flex justify-between items-baseline">
            <Link className="cursor-pointer" to="/">
              Sumit Parida
            </Link>
            <div className="flex pageLinks items-baseline ">
              <li className=" hover:text-[#64cc95] dark:text-[#64CCC5]    dark:hover:text-[#64ccc5]">
                <Link className="cursor-pointer" to="/about">
                  About
                </Link>
              </li>
              <li className=" hover:text-[#64cc95] dark:text-[#64CCC5]    dark:hover:text-[#64ccc5]">
                <Link className="cursor-pointer" to="/projects">
                  Projects
                </Link>
              </li>
              <li className=" hover:text-[#64cc95] dark:text-[#64CCC5]    dark:hover:text-[#64ccc5]">
                <Link className="cursor-pointer" to="/contact">
                  Contact Me
                </Link>
              </li>
              <li className="resume border-[1px] rounded text-[#64cc95] dark:text-[#64CCC5]  border-[#64cc95] dark:border-[#64CCC5] hover:bg-[#64cc95] hover:text-white hover:border-[#64cc95] dark:hover:bg-[#64CCC5] dark:hover:text-white dark:hover:border-[#64CCC5] cursor-pointer">
                <a
                  href={downloadbleFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Resume
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <div className="z-50 fixed top-0 w-full p-6  md:hidden dark:bg-[#001C30]">
        <div>
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
                  <Link className="cursor-pointer" to="/">
                    Home
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link className="cursor-pointer" to="/about">
                    About
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link className="cursor-pointer" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link className="cursor-pointer" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU  hidden space-x-8 lg:flex">
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
        </div>
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
    </>
  );
}

export default Navbar;
