import React from "react";
import  '../assets/GlobalStyle.css';


const About = () => {
  return (
    <div
      name="about"
      id="about"
      className=" about w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className=" text-title text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p className="para">
                Hi. I'm Shubham Shitole, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div>
              <p>
                
I am a junior software engineer with a passion for design and development. Open to freelance opportunities, I enjoy connecting over coffee to discuss potential collaborations. Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
