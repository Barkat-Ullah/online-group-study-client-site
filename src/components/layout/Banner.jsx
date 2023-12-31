import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="hero min-h-screen mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/Y8BvSGb/financial-literacy-education-flat-vector-illustration-young-people-learning-how-trade-cryptocurrency.jpg"
              className="w-full h-[350px] rounded-lg "
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex-1"
          >
            <h1 className="text-2xl md:text-5xl text-primary font-bold">
              Pluralsight empowers you to{" "}
              <span className="text-sky-400">upgrade your skills</span>
            </h1>
            <p className="py-6 text-tertiary">
              Develop critical tech skills. Cut cycle times. Build happier,
              healthier tech teams. And innovate smarter using AI. All with
              Pluralsight.
            </p>
            <button className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
