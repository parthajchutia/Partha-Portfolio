import React from "react";
import profile from "../assets/profile.jpeg";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import Resume from "../assets/Partha .pdf";
function Animate() {
  const linkdin = "https://www.linkedin.com/in/partha-jyoti-chutia-532b94221/";
  const github = "https://github.com/parthajchutia";
  const insta = "https://www.instagram.com/parthajyoti_chutia_/";

  const handlelink = () => {
    window.open(linkdin, "_profile");
  };
  const handlegithub = () => {
    window.open(github, "_profile");
  };
  const handleinsta = () => {
    window.open(insta, "_profile");
  };

  return (
    <div className="bg-grey-500 ">
      <div className="bg-grey-500  max:w-[2000px] h-[auto] sm:h-screen md:h-[screen]  flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className="bg-grey-500 flex-col sm:pl-16 lg:mr-0 my-auto mx-auto">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold text-white">
            Hi I am Partha jyoti ......{" "}
          </p>
          <h1 className="md:text-6xl text-purple sm:text-5l text-2xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "web designer",
                1500,
                "consultant",
                1000,
                "MERN Stack developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-lg font-bold text-gray-300">
              with a 4+ year learning experience 
            </p>
            <p className="text-title-100 text-2xl font-serif mt-4">And 3 month work experience</p>
           
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple">
            <button onClick={handlelink}>
              <AiFillLinkedin />
            </button>
            <button onClick={handlegithub}>
              <AiFillGithub />
            </button>
            <button onClick={handleinsta}>
              <AiFillInstagram />
            </button>
          </div>
          <div class="relative inline-flex group my-3">
            <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#5994c1] via-[#db01bb] to-[#c21616] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href={Resume}
              title="Download CV"
              role="button"
              class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white hover:bg-primary-color-hover transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-grey-500"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto lg:pb-[10rem] mt-7 mb-12 lg:mt-40 md:mt-40 lg:ml-32 mx-auto">
          <img
            class="w-[20rem] lg: mx-auto h-auto rounded-full"
            src={profile}
            alt="profil"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Animate;
