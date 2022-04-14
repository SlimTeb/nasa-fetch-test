import config from "../../config.json";

const getNasaImages = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(config.api.nasaImageUrl, requestOptions);

  if (response.status !== 200)
    throw new Error(`Unable to fetch url ${config.api.nasaImageUrl}`);
  return await response.json();
};

export default {
  getNasaImages,
};
