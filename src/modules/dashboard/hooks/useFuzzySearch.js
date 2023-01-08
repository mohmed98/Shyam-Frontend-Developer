import { useCallback, useEffect, useState } from "react";

const useFuzzySearch = ({ items, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setSearchedValue(inputValue), 200);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const setSearchedValue = useCallback(
    (inputVal) => {
      if (!inputVal) {
        onSearch(items);
        return;
      }
      const searchedItems = items.filter((data) => {
        return (
          data.status.toLowerCase().includes(inputVal.toLowerCase().trim()) ||
          data.type.toLowerCase().includes(inputVal.toLowerCase().trim())
        );
      });
      onSearch(searchedItems);
    },
    [items, onSearch]
  );

  return {
    inputValue,
    setInputValue,
  };
};

export default useFuzzySearch;
