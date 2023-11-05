import { useLoaderData } from "react-router-dom";
import Banner from "../components/layout/Banner";


import Contact from "./Contact";
import Faq from "./Faq.jsx/Faq";

import Team from "./Team";
import Assignment from "./Assignment";

const About = () => {
  const assignments = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <h2 className="mt-28 text-center font-semibold text-primary text-4xl">
        Quiz test Assignment
      </h2>
      <p className="mt-2 mb-2 text-center font-medium text-tertiary">
        A "quiz test assignment" is a short assessment designed to test a
        student's knowledge or understanding of a specific topic or subject
        matter.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {assignments?.map((assignment) => (
         <Assignment key={assignment._id} assignment={assignment}></Assignment>
        ))}
      </div>

      <Faq></Faq>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
};

export default About;
