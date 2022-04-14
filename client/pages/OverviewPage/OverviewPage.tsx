import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";

import imagesService from "../../services/imagesService";

const OverviewPage = () => {
  const [searchString, setSearchString] = React.useState("");
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    imagesService
      .getNasaImages()
      .then((res) => {
        setItems(res.collection.items);
      })
      .catch((e) => console.log(e));
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
    </div>
  );
};

export default OverviewPage;
