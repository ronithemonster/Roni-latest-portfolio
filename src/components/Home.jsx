import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import HomeSocial from "./HomeSocial";
import Lottie from "lottie-react";
import bg from "../assets/blue-background-animation.json";
import { FiDownload, FiPhoneCall } from "react-icons/fi";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import img1 from "../assets/roni.png";
import resume from "../../public/resume.pdf"

const Home = () => {
  return (
    <>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Hello, I'm <br />
              <h5 className="text-5xl font-extrabold mt-8 mb-8">Ashadul Islam Roni</h5>
              <span className="text-violet-600 text-5xl">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Tailwind Master",
                      "React Developer",
                      "Full Stack Developer",
                      "BootStrap Expert",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-center md:flex-row">




            {/* <div className="inline-flex gap-3 items-center justify-center w-full h-full">
            <div className="border-blue-300 gap-3 md:w-auto md:mr-4 mb-4 md:mb-0">
                  <button className="flex -ms-16 btn bg-violet-400 border-0 text-white rounded-md px-5 py-2">
                  <a className="" href={resume}>Download CV</a>
                  <span className="text-lg ml-1">
                  <FiDownload />
                  </span>
                    
                  </button>
                  
            </div>
            
              </div> */}
            <div className="border-blue-300 md:w-auto md:mr-4 mb-4 md:mb-0">


              <div className="inline-flex items-center justify-center w-full h-full">
                <button className="btn btn-outline btn-primary rounded-md px-5 py-2 me-20">
                <a className="" href={resume}>Download CV</a> 
                  <span className="text-lg ml-1">
                    <FiDownload />
                  </span>
                </button>
              </div>
            </div>



            <Link to="/contact" className="md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <button className="btn bg-blue-400 -ms-16 border-0 text-white rounded-md px-5 py-2">
                  Contact Me{" "}
                  <span className="text-lg ml-1">
                    <FiPhoneCall />
                  </span>
                </button>
              </div>
            </Link>
          </div>
          <div>
            <HomeSocial />
          </div>
        </div>

        <div className="relative lg:w-1/2">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96">
            <div className="relative right-32 ">
              <Lottie animationData={bg} loop={true} />
            </div>
            <div className="absolute top-12 left-26 pt-6 ">
              <img
                src={img1}
                alt=""
                className="rounded-full w-64 "
              />
            </div>
          </div>
        </div>
      </div>
      {/* page ---at home  */}
      <About />
      <Experience />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Home;
