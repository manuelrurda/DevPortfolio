import { Octokit } from "octokit";

const getConfigData = async (octokit: Octokit) => {
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

export default getConfigData;
