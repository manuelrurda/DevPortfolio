import Image from "next/image";

import getFeaturedProjectData from "@/actions/get-featured-project";
import { Github } from "lucide-react";

const HomeFeaturedProject = async () => {
  const featuredProject = await getFeaturedProjectData();

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-y-3 min-w-[350px]">
      <h1 className="self-start text-xl pt-3 text-gray-500">
        ⭐ Featured Project ⭐
      </h1>
      <div className="flex flex-col shadow-xl rounded-xl w-full p-6">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-semibold">{featuredProject?.name}</h2>
          <div className="flex flex-col self-end">
            <a href={featuredProject?.githubUrl} target="_blank">
              <Github
                className="bg-black p-1 rounded-md mx-1 cursor-pointer"
                color="white"
                size={30}
              />
            </a>
          </div>
        </div>
        {/* thumbnail */}
        <div className="flex justify-center py-3">
          <Image
            width={500}
            height={500}
            src={featuredProject?.thumbnailUrl || ""}
            alt="Featured Project"
            className="rounded-md object-center"
          />
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
