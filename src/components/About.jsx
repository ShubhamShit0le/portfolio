import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Shubham Shitole, nice to meet you. Please take a look
                around.
              </p>
            </div>
            <div>
              <p>
                
                 Currently I am studying Master of Computer Application at Vidya
                Pratishthan's Institute Of Information Technology,Baramati Pune,
                which is where my passion for design and development converge.
                I am also working on
                a few side projects including REACT CRUD APPLICATION and REACT EXPENSES TRACKER APPLICATION.
                Currently I am accepting freelance work, i love to get coffee
                and get to know you, so don’t hesitate to get in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
