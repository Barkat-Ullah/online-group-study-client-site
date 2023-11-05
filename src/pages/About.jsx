import { useLoaderData } from "react-router-dom";
import Banner from "../components/layout/Banner";


import Contact from "./Contact";
import Faq from "./Faq.jsx/Faq";

import Team from "./Team";
import Assignment from "./Assignment";

const About = () => {
  const assignments = useLoaderData();
  console.log(assignments);

  return (
    <div>
      <Banner></Banner>

      <Assignment  assignment={assignments}></Assignment>

  

      <Faq></Faq>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
};

export default About;
