import Image from "next/image";

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
    <div className="shadow-lg inline-block min-w-[300px] max-w-md rounded-md min-h">
      <div className="flex flex-col justify-center align-middle p-5 gap-y-3">
        <h1 className="text-xl font-bold">{name}</h1>
        <Image
          src={imageSrc}
          alt="img"
          width="200"
          height="200"
          className="min-w-full rounded-md"
        />
        <p className="text-gray-400">{techTags.join(" • ")}</p>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
