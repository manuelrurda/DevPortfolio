import Image from "next/image";

import getFeaturedProjectData from "@/actions/get-featured-project";

const FeaturedProjectBillboard = async () => {
  const featuredProject = await getFeaturedProjectData();

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl pb-3">{featuredProject?.name}</h1>
      <div className="flex flex-col gap-x-7 lg:flex-row items-center">
        <Image
          src={featuredProject?.thumbnailUrl}
          alt={featuredProject?.name}
          width="500"
          height="200"
          className="rounded-md max-h-80 my-3"
        />
        <div className="flex-1 flex flex-col min-w-md self-start">
          <p className="text-gray-400 my-3">
            {featuredProject?.techTags.join(" • ")}
          </p>
          <p className="text-justify">{featuredProject?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectBillboard;
