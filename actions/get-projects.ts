const getProjectsData = async (rawConfigData: configData) => {
  const projects = rawConfigData.projects;

  const params = {
    owner: "manuelrurda",
    path: "devPortfolioConfig.json",
  };

  const projectsData = await Promise.all(
    projects.map(async (projectName: string) => {
      const url = `https://api.github.com/repos/${params.owner}/${projectName}/contents/${params.path}`;
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
    })
  );

  return projectsData;
};

export default getProjectsData;
