import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import ImageOverview from "../../components/ImageOverview/ImageOverview";
import Spinner from "../../components/Spinner/Spinner";

import useDebounce from "./hooks/useDebounce";
import useAllItems from "./hooks/useAllItems";
import useFilteredItems from "./hooks/useFilteredItems";

type Item = {
  data: any[];
  href: string;
  links: Array<{ href: string }>;
};
const cleanUpResult = (items: Item[]) =>
  items.map((item) => ({ ...item, href: item.links[0].href }));

const OverviewPage = () => {
  const [searchString, setSearchString] = React.useState("");
  const { allItems, isFetchingAllItems } = useAllItems(); // first render
  const debouncedSearchTerm = useDebounce(searchString, 800);
  const { filteredItems, isFetchingFilteredItems } =
    useFilteredItems(debouncedSearchTerm);

  const displayedItems =
    filteredItems && filteredItems.length > 0
      ? cleanUpResult(filteredItems)
      : cleanUpResult(allItems);
  const isLoading = isFetchingAllItems || isFetchingFilteredItems;
  return (
    <div>
      <SearchBar
        value={searchString}
        onChange={setSearchString}
        placeholderText="Search for ..."
        placeholderTextFocused="Search for ..."
        onFocus={() => console.log("focus")}
      />
      {isLoading ? (
        <Spinner className="Spinner--onPage" />
      ) : (
        <ImageOverview images={displayedItems} />
      )}
    </div>
  );
};

export default OverviewPage;
