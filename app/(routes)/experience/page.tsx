import getConfigData from "@/actions/get-config-data";
import Container from "@/components/container";
import Timeline from "@/components/timeline";

const ExperiencePage = async () => {
  const rawConfigData = await getConfigData();
  const timelineElements = rawConfigData?.timelineElements;
  return (
    <div>
      <Container className="pt-10">
        <Timeline timelineElements={timelineElements} />
      </Container>
    </div>
  );
};

export default ExperiencePage;
