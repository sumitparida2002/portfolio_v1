import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <section
        id="contact"
        className="lg:w-[70%] w-[80%] mt-[4rem] mx-auto md:mt-[6rem]"
      >
        <h1 className="md:text-6xl text-4xl text-slate-600 dark:text-slate-200">
          Send me a message!
        </h1>
        <p className="mt-6 text-sm md:text-base ">
          Have a sweet project in mind or just want to say hi? Feel free to send
          me a message!
        </p>

        <div className="w-[100%]">
          <form method="post" action="https://formspree.io/f/xeqbrwar">
            <div className="flex md:flex-row flex-col justify-between md:mt-16 mt-8 w-[100%]">
              <div className="w-[100%] flex justify-start flex-col ">
                <p className="dark:text-slate-300 text-slate-700 text-left ">
                  Your Name
                </p>
                <input
                  className="dark:bg-[#001C30] border-b border-[#64CCC5] focus:border-b-2 pb-2 focus:outline-none  mt-1 w-[100%] md:w-[90%] text-left    "
                  placeholder="Enter your name"
                  name="name"
                  required
                ></input>
              </div>

              <div className="w-[100%] mt-8 md:mt-0 flex justify-start flex-col">
                <p className="dark:text-slate-300 text-slate-700 text-left">
                  Your Email
                </p>
                <input
                  className="dark:bg-[#001C30] border-b border-[#64cc95] dark:border-[#64CCC5] pb-2 focus:border-b-2 focus:outline-none mt-1 w-[100%] "
                  placeholder="Enter your email"
                  name="email"
                  required
                ></input>
              </div>
            </div>
            <div className="mt-8">
              <p className="dark:text-slate-300 text-slate-700 text-left">
                Your Message
              </p>
              <textarea
                className="dark:bg-[#001C30] border-b border-[#64cc95] dark:border-[#64CCC5] mt-1 h-auto w-[100%] message focus:outline-none  focus:border-b-2 "
                placeholder="Enter your message"
                required
                name="message"
              ></textarea>
            </div>
            <button className=" mt-8 md:w-fit w-full rounded py-2 px-8 text-[#64cc95] dark:text-[#64CCC5] border-2 border-[#64cc95] dark:border-[#64CCC5] hover:bg-[#64cc95] hover:text-white hover:border-[#64cc95] dark:hover:bg-[#64CCC5] dark:hover:text-white dark:hover:border-[#64CCC5] ">
              Send
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
