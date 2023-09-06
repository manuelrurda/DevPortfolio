import Container from "@/components/container";
import HomeFeaturedProject from "@/components/home-featured-project";
import PersonalInfo from "@/components/personal-info";

const HomePage = () => {
  return (
    <Container className="flex justify-center items-center px-7">
      <div className="flex-1 flex flex-col sm:flex-row justify-center items-center gap-x-5">
        {/* left */}
        <PersonalInfo />
        {/* right */}
        <HomeFeaturedProject />
      </div>
    </Container>
  );
};

export default HomePage;
