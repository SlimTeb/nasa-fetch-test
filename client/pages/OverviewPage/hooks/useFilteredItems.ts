import React from "react";
import imagesService, { MediaType } from "../../../services/imagesService";

const useFilteredItems = (debouncedSearchTerm: string) => {
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [isFetchingFilteredItems, setIsFetchingFilteredItems] =
    React.useState(false);

  React.useEffect(() => {
    setIsFetchingFilteredItems(true);
    imagesService
      .getNasaImagesWithFilter({
        query: debouncedSearchTerm,
        mediaType: [MediaType.IMAGE],
      })
      .then((res) => {
        setFilteredItems(res.collection.items);
        setIsFetchingFilteredItems(false);
      })
      .catch((e) => {
        console.log(e);
        setIsFetchingFilteredItems(false);
      });
  }, [debouncedSearchTerm]);

  return { filteredItems, isFetchingFilteredItems };
};

export default useFilteredItems;
