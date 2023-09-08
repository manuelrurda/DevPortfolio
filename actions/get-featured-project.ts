const getFeaturedProjectData = async (rawConfigData: configData) => {
  const projectName = rawConfigData.featuredProject;

  const params = {
    owner: "manuelrurda",
    repo: projectName,
    path: "devPortfolioConfig.json",
  };

  const url = `https://api.github.com/repos/${params.owner}/${params.repo}/contents/${params.path}`;

  const req = await fetch(url, {
    headers: {
      accept: "application/vnd.github.raw",
    },
    next: {
      revalidate: 10,
    },
  });

  const jsonData = await req.json();

  return jsonData;
};

export default getFeaturedProjectData;
