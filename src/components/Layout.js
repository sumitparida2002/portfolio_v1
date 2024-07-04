import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const Layout = ({ children }) => {
  return (
    <Theme>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#001C30] text-slate-800 dark:text-slate-400 tracking-wider">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col lg:w-[80%] mx-auto mt-4 md:mt-10">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </Theme>
  );
};

export default Layout;
