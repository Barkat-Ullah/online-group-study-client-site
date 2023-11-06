// import { useLoaderData } from "react-router-dom";
import Banner from "../components/layout/Banner";
import Faq from "./Faq.jsx/Faq";
import Team from "./Team";
import Contact from "./Contact";
import Assignment from "./Assignment";

const Home = () => {
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

export default Home;
