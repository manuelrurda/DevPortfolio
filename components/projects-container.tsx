import getProjectsData from "@/actions/get-projects";
import ProjectCard from "./project-card";

const ProjectsContainer = async () => {
  const projects = await getProjectsData();
  return (
    <div className="mx-5 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center auto-rows-max">
      {projects?.map((project) => (
        <ProjectCard
          name={project.name}
          imageSrc={project.thumbnailUrl}
          techTags={project.techTags}
          description={project.description}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
