import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <section
        className="lg:w-[70%] w-[80%] mt-[6rem] mx-auto md:mt-[6rem] text-center"
        id="landing"
      >
        <h1 className="md:text-7xl text-5xl text-gray-900 dark:text-slate-200 md:mt-1 font-bold">
          Page Not Found
        </h1>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
