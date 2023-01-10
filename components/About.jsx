import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a 26-years-old Javascript sertificated Front-end Developer. I
            am trying to start working in the software development industry,
            especially as a React.js/Next.js Front-end Developer. Because of
            this, I learned some Front-end engineer skills like working with
            React, using css frameworks like Tailwind Css/ Material Ui/ Bootsrap
            . 2022/10 I also start learning Next.js, also I have theoretical
            knowledge like scrum processes, testing types, test cases, and so on
            to be more comfortable with other team members. In addition I plan
            to become a Full-Stack Developer engineer and now I am learning
            Node.js basics. I think it is critically important for me to get a
            job as a Front-end engineer to use my knowledge on real-life tasks
            and I believe it will help me to grow as an engineer faster and
            quickly fill gaps in my knowledge.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check Out some of my latest projects</p>
        </div>
        <div  className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src='/../public/assets/about.jpg' alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
