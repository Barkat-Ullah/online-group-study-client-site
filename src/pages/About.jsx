import Banner from "../components/layout/Banner";
import Assignment from "./Assignment";
import Contact from "./Contact";
import Faq from "./Faq.jsx/Faq";
import Team from "./Team";

const About = () => {
  return (
    <div>
      <Banner></Banner>

      <Assignment></Assignment>
      <Faq></Faq>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
};

export default About;
