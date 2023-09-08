import { Octokit } from "octokit";
import getConfigData from "./get-config-data";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const getFeaturedProjectData = async (rawConfigData: configData) => {
  const projectName = rawConfigData.featuredProject;

  const req = await octokit.request(
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

  if (!req) {
    return undefined;
  }
  // @ts-ignore
  const projectData = JSON.parse(req.data);
  return projectData;
};

export default getFeaturedProjectData;
