import { Octokit } from "octokit";
import getConfigData from "./get-config-data";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const getProjectsData = async () => {
  const rawConfigData = await getConfigData(octokit);
  // @ts-ignore
  const projects = JSON.parse(rawConfigData.data).projects;
  console.log(projects);
  const rawProjectsData = await Promise.all(
    projects.map(async (projectName: string) => {
      return await octokit.request(
        `GET /repos/{owner}/{repo}/contents/{path}`,
        {
          owner: "manuelrurda",
          repo: projectName,
          path: "devPortfolioConfig.json",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            accept: "application/vnd.github.raw",
          },
        }
      );
    })
  );
  console.log(rawProjectsData);

  if (!rawProjectsData) {
    return undefined;
  }
  // @ts-ignore
  const projectsData = rawProjectsData.map((projectData) => {
    return JSON.parse(projectData.data);
  });
  console.log(projectsData);

  return projectsData;
};

export default getProjectsData;
