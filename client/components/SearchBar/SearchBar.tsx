import React from "react";
import classNames from "classnames";

import ClearIcon from "./icon-x.svg";
import SearchIcon from "./icon-search.svg";

import "./SearchBar.less";

type SearchIconProps = {
  value: string;
};
const SearchIconComponent: React.FC<SearchIconProps> = ({ value }) => {
  return (
    <SearchIcon
      className={classNames(
        "SearchBar-icon",
        value && "SearchBar-iconWithValue"
      )}
    />
  );
};

type SearchBarProps = {
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
  placeholderText?: string;
  placeholderTextFocused?: string;
  onFocus: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  className,
  value,
  onChange,
  placeholderText,
  placeholderTextFocused,
  onFocus,
}) => {
  const shouldShowClearButton = !!value;
  const [isFocus, setIsFocused] = React.useState(false);

  return (
    <div className={classNames("SearchBar", className)}>
      <div className="SearchBar-inner">
        <input
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          className="SearchBar-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={isFocus ? placeholderTextFocused : placeholderText}
        />
      </div>
      {!shouldShowClearButton && <SearchIconComponent value={value} />}
      {shouldShowClearButton && (
        <ClearIcon
          onClick={() => onChange("")}
          className="SearchBar-clearIcon"
        />
      )}
    </div>
  );
};

SearchBar.defaultProps = {
  className: undefined,
  placeholderText: "Search for ..",
  placeholderTextFocused: "Search for ..",
};
export default SearchBar;
