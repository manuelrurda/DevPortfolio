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
        <h1 className="text-xl font-bold">Project Name</h1>
        <Image
          src="https://github.com/manuelrurda/Hangouts/assets/62727899/c7dc473d-6f19-415d-845f-99e792445142"
          alt="img"
          width="200"
          height="200"
          className="min-w-full rounded-md"
        />
        <p className="text-gray-400">Android • Java • Firebase • ParseDB</p>
        <p className="text-justify">
          Hangouts is an event/social planner app that allows users to create
          events or "Hangouts" and share them with other users. Then, said users
          can join the event and rank their top picks for meal selection. The
          app then will run an algorithm to process each members preferences and
          calculate which restaurants might be a good fit for the member's
          current cravings. Finally, the app will display those restaurants on a
          map so participants can make a decision on where to go.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
