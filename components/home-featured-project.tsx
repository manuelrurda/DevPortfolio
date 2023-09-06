import Image from "next/image";

import getFeaturedProjectData from "@/actions/get-featured-project";
import { Github, Link } from "lucide-react";

const HomeFeaturedProject = async () => {
  const featuredProject = await getFeaturedProjectData();

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-y-3 min-w-[350px]">
      <h1 className="self-start text-xl pt-3 text-gray-500">
        ⭐ Featured Project ⭐
      </h1>
      <div className="flex flex-col shadow-xl rounded-xl w-full p-6 group">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-semibold">{featuredProject?.name}</h2>
        </div>
        {/* thumbnail */}
        <div className="flex justify-center py-3 relative">
          <div className="after:w-full after:h-full after:left-0 after:top-0 after:absolute after:rounded-md group-hover:after:bg-white group-hover:after:opacity-70 transition">
            <Image
              width={500}
              height={500}
              src={featuredProject?.thumbnailUrl || ""}
              alt="Featured Project"
              className="rounded-md object-center"
            />
          </div>
          <div className="opacity-0 group-hover:opacity-80 transition absolute w-1/2 h-1/2 top-1/4 left-1/4">
            <div className="flex gap-x-6 justify-center">
              {featuredProject.githubUrl && (
                <a href={featuredProject.githubUrl} target="_blank">
                  <Github
                    className="bg-black p-2 rounded-xl mx-1 cursor-pointer"
                    color="white"
                    size={55}
                  />
                </a>
              )}

              {featuredProject.liveUrl && (
                <a href={featuredProject.liveUrl} target="_blank">
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

        {/* project info */}
        <div>
          <p className=" text-gray-400 py-2">
            {featuredProject?.techTags.join(" • ")}
          </p>
          <p className="text-justify">{featuredProject?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedProject;
