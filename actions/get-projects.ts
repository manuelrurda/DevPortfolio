import { Octokit } from "octokit";
import getConfigData from "./get-config-data";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const getProjectsData = async (rawConfigData: configData) => {
  const projects = rawConfigData.projects;
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

  if (!rawProjectsData) {
    return undefined;
  }

  const projectsData: ProjectData[] = rawProjectsData.map(
    (projectData: any) => {
      return JSON.parse(projectData.data);
    }
  );

  return projectsData;
};

export default getProjectsData;
