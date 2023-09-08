import getProjectsData from "@/actions/get-projects";
import ProjectCard from "./project-card";
import React from "react";

interface ProjectsContainerProps {
  projects: ProjectData[] | undefined;
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = async ({
  projects,
}) => {
  return (
    <div className="mx-5 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center auto-rows-max">
      {projects?.map((project) => (
        <ProjectCard
          key={project.githubUrl}
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
