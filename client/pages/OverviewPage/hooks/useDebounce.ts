import React from "react";

const useDebounce = (searchInput: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(searchInput);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchInput);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [searchInput, delay]);
  return debouncedValue;
};

export default useDebounce;
