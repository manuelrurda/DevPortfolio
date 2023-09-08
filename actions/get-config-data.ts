const getConfigData = async () => {
  const params = {
    owner: "manuelrurda",
    repo: "portfolio-config",
    path: "config.json",
  };

  const url = `https://api.github.com/repos/${params.owner}/${params.repo}/contents/${params.path}`;

  const req = await fetch(url, {
    headers: {
      accept: "application/vnd.github.raw",
    },
    next: {
      revalidate: 3600,
    },
  });

  const jsonData = await req.json();

  return jsonData;
};

export default getConfigData;
