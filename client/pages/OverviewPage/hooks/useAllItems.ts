import React from "react";
import imagesService from "../../../services/imagesService";

const useAllItems = () => {
  const [allItems, setAllItems] = React.useState([]);
  const [isFetchingAllItems, setIsFetchingAllItems] = React.useState(false);
  React.useEffect(() => {
    setIsFetchingAllItems(true);
    imagesService
      .getNasaImages()
      .then((res) => {
        setAllItems(res.collection.items);
        setIsFetchingAllItems(false);
      })
      .catch((e) => {
        console.log(e);
        setIsFetchingAllItems(false);
      });
  }, []);

  return { allItems, isFetchingAllItems };
};

export default useAllItems;
