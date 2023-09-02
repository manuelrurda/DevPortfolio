import Image from "next/image";

const HomeFeaturedProject = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="self-start text-xl py-3 text-gray-500">
        ⭐ Featured Project ⭐
      </h1>
      <div className="flex flex-col shadow-xl rounded-xl w-full p-6">
        <h2 className="text-2xl font-semibold">Project Name</h2>

        {/* thumbnail */}
        <div className="flex justify-center py-3">
          <Image
            width={500}
            height={500}
            src="https://techcrunch.com/wp-content/uploads/2020/07/iOS-14.png"
            alt="Featured Project"
          />
        </div>

        {/* project info */}
        <div>
          <p className=" text-gray-400 py-2">
            NextJS • TypeScript • PostgresSQL • REST API's
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pretium facilisis tortor in vestibulum. Donec finibus mauris eget
            dui tempus, nec dignissim neque sollicitudin. Etiam mauris purus,
            ultrices nec feugiat cursus, placerat porta elit. Nullam rutrum
            augue erat, sit amet dapibus libero aliquam quis. Vivamus posuere
            finibus egestas. Vivamus suscipit dui ac luctus condimentum. In in
            felis aliquet, sollicitudin odio malesuada, ultrices arcu.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Duis pulvinar metus massa, non dignissim
            velit scelerisque id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedProject;
