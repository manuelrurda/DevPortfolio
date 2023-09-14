"use client";

import { Github, Link } from "lucide-react";
import { Fade } from "react-awesome-reveal";

interface ProjectCardProps {
  name: string;
  imageSrc: string;
  techTags: string[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  imageSrc,
  techTags,
  description,
  githubUrl,
  liveUrl,
}) => {
  return (
    <Fade className="shadow-lg inline-block min-w-[300px] max-w-md rounded-md min-h h-full group">
      <div className="flex flex-col justify-start align-middle p-5 gap-y-3 w-fit h-full">
        <h1 className="text-xl font-bold">{name}</h1>
        <div className="relative">
          <div className="after:w-full after:h-full after:left-0 after:top-0 after:absolute after:rounded-md group-hover:after:bg-white group-hover:after:opacity-70 transition">
            <img
              src={imageSrc}
              alt="img"
              width="200"
              height="200"
              className="min-w-full h-auto rounded-md w-auto"
            />
          </div>

          <div className="opacity-0 group-hover:opacity-80 transition absolute w-1/2 h-1/2 top-1/4 left-1/4">
            <div className="flex gap-x-6 justify-center">
              {githubUrl && (
                <a href={githubUrl} target="_blank">
                  <Github
                    className="bg-black p-2 rounded-xl mx-1 cursor-pointer"
                    color="white"
                    size={55}
                  />
                </a>
              )}

              {liveUrl && (
                <a href={liveUrl} target="_blank">
                  <Link
                    className="bg-black p-2 rounded-xl mx-1 cursor-pointer"
                    color="white"
                    size={55}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 text-sm md:text-base ">
          <p className="text-gray-400">{techTags.join(" • ")}</p>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
