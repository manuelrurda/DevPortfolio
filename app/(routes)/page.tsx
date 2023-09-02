import Container from "@/components/container";
import HomeFeaturedProject from "@/components/home-featured-project";
import PersonalInfo from "@/components/personal-info";

const HomePage = () => {
  return (
    <Container className="flex h-5/6 justify-center items-center">
      <div className="flex-1 flex flex-col sm:flex-row justify-center items-center">
        {/* left */}
        <PersonalInfo />
        {/* right */}
        <HomeFeaturedProject />
      </div>
    </Container>
  );
};

export default HomePage;
