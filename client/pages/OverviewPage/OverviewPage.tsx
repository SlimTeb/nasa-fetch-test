import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import ImageOverview from "../../components/ImageOverview/ImageOverview";
import Spinner from "../../components/Spinner/Spinner";

import imagesService from "../../services/imagesService";

type Item = {
  data: never[];
  href: string;
  links: Array<{ href: string }>;
};
const cleanUpResult = (items: Item[]) =>
  items.map((item) => ({ ...item, href: item.links[0].href }));
const OverviewPage = () => {
  const [searchString, setSearchString] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  React.useEffect(() => {
    setIsFetching(true);
    imagesService
      .getNasaImages()
      .then((res) => {
        setItems(res.collection.items);
        setIsFetching(false);
      })
      .catch((e) => {
        console.log(e);
        setIsFetching(false);
      });
  }, []);

  return (
    <div>
      <SearchBar
        value={searchString}
        onChange={setSearchString}
        placeholderText="Search for ..."
        placeholderTextFocused="Search for ..."
        onFocus={() => console.log("focus")}
      />
      {isFetching ? (
        <Spinner className="SpinnerV3--onPage" />
      ) : (
        <ImageOverview images={cleanUpResult(items)} />
      )}
    </div>
  );
};

export default OverviewPage;
