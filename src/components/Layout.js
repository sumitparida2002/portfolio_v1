import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav className="mt-4">
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
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer className="mt-[20rem]">
        <p className="w-[100%] text-sm  text-center text-slate-300">
          Designed and Developed by Sumit Parida
        </p>
      </footer>
    </div>
  );
};

export default Layout;
