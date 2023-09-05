import Container from "@/components/container";
import FeaturedProjectBillboard from "@/components/featured-project-billboard";

const ProjectsPage = () => {
  return (
    <div className="self-start bg-gradient-to-tl from-rose-400 via-fuchsia-400 to-indigo-500 w-full p-10">
      <Container className="flex h-5/6 justify-center bg-white rounded-lg shadow-lg">
        <div className="flex-1 flex flex-col sm:flex-row justify-center items-center">
          {/* featured project */}
          <div>
            <FeaturedProjectBillboard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;
