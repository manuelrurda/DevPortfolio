import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const getConfigData = async () => {
  const params = {
    owner: "manuelrurda",
    repo: "portfolio=config",
    path: "config.json",
  };

  const url = `https://api.github.com/repos/${params.owner}/${params.repo}/contents/${params.path}`;

  const request = await fetch(
    "https://api.github.com/user/repos/manuelrurda/portfolio-config",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  );
  // console.log(request);

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

  // console.log(req);

  if (!req) {
    return undefined;
  }

  console.log(typeof req);
  //@ts-ignore
  return JSON.parse(req.data);
};

export default getConfigData;
