"use client";

import { FileText, Github, Linkedin } from "lucide-react";

const PersonalInfo = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full px-5 md:px-0">
      {/* profile pic */}
      <div className="py-5">
        <img
          width="300"
          height="300"
          src="/images/avatar.png"
          alt="Profile Avatar"
        />
      </div>

      {/* Name and Description */}
      <div className="flex flex-col items-center border-b py-2 text-center">
        <h1 className="py-1 text-3xl font-bold">
          Manuel Rodriguez Urdapilleta
        </h1>
        <p className="text-xl font-semibold py-1">
          Android Developer Trainee @ Dexcom
        </p>
      </div>
      <div className="flex flex-row py-5">
        <div className="bg-black w-2"></div>
        <div className="flex flex-col w-full text-[1.2rem] px-3">
          <p>B.E. Computer Engineering</p>
          <p>National Autonomous University of Mexico</p>
          <p>2020 - 2025</p>
          {/* Icons */}
          <div className="flex flex-row py-4">
            <a href="https://github.com/manuelrurda" target="_blank">
              <Github
                className="bg-black p-2 rounded-xl mx-1 cursor-pointer"
                color="white"
                size={55}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mrurdapilleta/"
              target="_blank"
            >
              <Linkedin
                size={55}
                color="white"
                strokeWidth={1.25}
                className="bg-black p-2 rounded-xl mx-2 cursor-pointer"
              />
            </a>

            <a
              href="https://manuelrurda-dev-portfolio.s3.us-west-1.amazonaws.com/resume.pdf"
              target="_blank"
            >
              <FileText
                size={55}
                color="white"
                strokeWidth={1.25}
                className="bg-black p-2 rounded-xl mx-1 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
