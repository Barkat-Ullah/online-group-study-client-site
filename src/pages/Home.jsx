// import { useLoaderData } from "react-router-dom";
import Banner from "../components/layout/Banner";
import Faq from "./Faq.jsx/Faq";
import Team from "./Team";
import Contact from "./Contact";
import Assignment from "./Assignment";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Assignment></Assignment>
      <Faq></Faq>
      <Team></Team>
      <Contact></Contact>
      
      <Footer></Footer>
    </div>
  );
};

export default Home;
