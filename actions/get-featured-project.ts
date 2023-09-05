import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const _getFeaturedProject = async () => {
  const req = await octokit.request(
    `GET /repos/{owner}/{repo}/contents/{path}`,
    {
      owner: "manuelrurda",
      repo: "portfolio-config",
      path: "config.json",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        accept: "application/vnd.github.raw",
      },
    }
  );

  if (!req) {
    return undefined;
  }
  return req;
};

const getFeaturedProjectData = async () => {
  const rawProjectName = await _getFeaturedProject();

  // @ts-ignore
  const projectName = JSON.parse(rawProjectName.data).featuredProject;

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
  const projectData: ProjectData = JSON.parse(req.data);
  return projectData;
};

export default getFeaturedProjectData;
