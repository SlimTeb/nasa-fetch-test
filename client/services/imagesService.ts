import config from "../../config.json";
import navigationService from "../services/navigationService";

export const enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
}
type Filter = {
  query: string;
  mediaType: MediaType[];
};

const requestOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

const getNasaImages = async () => {
  const response = await fetch(config.api.nasaImageUrl, requestOptions);

  if (response.status !== 200)
    throw new Error(`Unable to fetch url ${config.api.nasaImageUrl}`);
  return await response.json();
};

const getNasaImagesWithFilter = async (filter: Filter) => {
  let url = config.api.nasaImageSearchUrl;
  url = navigationService.addQueryParam(url, `q=${filter.query}`);
  const mediaFilter = filter.mediaType?.join(",");
  if (mediaFilter)
    url = navigationService.addQueryParam(url, `media_type=${mediaFilter}`);
  const response = await fetch(url, requestOptions);

  if (response.status !== 200)
    throw new Error(`Unable to fetch url ${config.api.nasaImageUrl}`);
  return await response.json();
};

export default {
  getNasaImages,
  getNasaImagesWithFilter,
};
