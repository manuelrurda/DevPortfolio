import { Github, Link } from "lucide-react";

interface FeaturedProjectBillboardProps {
  featuredProject: ProjectData;
}

const FeaturedProjectBillboard: React.FC<
  FeaturedProjectBillboardProps
> = async ({ featuredProject }) => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl md:text-3xl pb-3">
        {featuredProject?.name}
      </h1>
      <div className="flex flex-col gap-x-7 lg:flex-row items-center">
        <img
          src={featuredProject?.thumbnailUrl || ""}
          alt={featuredProject?.name}
          width="500"
          height="200"
          className="rounded-md max-h-80 my-3"
        />
        <div className="flex-1 flex flex-col xmin-w-md self-start">
          <div className="text-sm md:text-base">
            <p className="text-gray-400 my-3">
              {featuredProject?.techTags.join(" • ")}
            </p>
            <p className="text-justify">{featuredProject?.description}</p>
          </div>
          <div className="mt-10 self-end flex flex-row">
            {featuredProject.githubUrl && (
              <a href={featuredProject?.githubUrl} target="_blank">
                <Github
                  className="bg-black p-2 rounded-xl mx-1 cursor-pointer"
                  color="white"
                  size={55}
                />
              </a>
            )}

            {featuredProject.liveUrl && (
              <a href={featuredProject?.liveUrl} target="_blank">
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
    </div>
  );
};

export default FeaturedProjectBillboard;
