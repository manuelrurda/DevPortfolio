import getConfigData from "@/actions/get-config-data";
import getFeaturedProjectData from "@/actions/get-featured-project";
import getProjectsData from "@/actions/get-projects";
import Container from "@/components/container";
import FeaturedProjectBillboard from "@/components/featured-project-billboard";
import ProjectsContainer from "@/components/projects-container";

const ProjectsPage = async () => {
  const rawConfigData = await getConfigData();
  const featuredProject = await getFeaturedProjectData(rawConfigData);
  const projects = await getProjectsData(rawConfigData);

  return (
    <div className="pb-7">
      <div className="self-start bg-gradient-to-tl from-rose-400 via-fuchsia-400 to-indigo-500 w-full p-10">
        <Container className="flex h-5/6 justify-center bg-white rounded-lg shadow-lg">
          <div className="flex-1 flex flex-col sm:flex-row justify-center items-center">
            {/* featured project */}
            <div>
              <FeaturedProjectBillboard featuredProject={featuredProject} />
            </div>
          </div>
        </Container>
      </div>
      <div className="my-7">
        <Container>
          <ProjectsContainer projects={projects} />
        </Container>
      </div>
    </div>
  );
};

export default ProjectsPage;
