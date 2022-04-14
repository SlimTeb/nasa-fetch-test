import fetchMock from "jest-fetch-mock";

import imagesService, { MediaType } from "./imagesService";

fetchMock.enableMocks();

describe("# imagesService", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  describe("# getNasaImagesWithFilter", () => {
    it("should call API with correct URL params", async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ body: {} }));
      const filter = {
        query: "query",
        mediaType: [MediaType.IMAGE, MediaType.AUDIO],
      };
      await imagesService.getNasaImagesWithFilter(filter);
      expect(fetchMock).toHaveBeenCalledWith(
        "https://images-api.nasa.gov/search?q=query&media_type=image,audio",
        { headers: { "Content-Type": "application/json" }, method: "GET" }
      );
    });
  });
});
