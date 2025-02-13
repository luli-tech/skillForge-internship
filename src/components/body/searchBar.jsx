import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleSearch } from "../../store/store";
import { useSelector } from "react-redux";


const SearchBar = ({ onNewSearch, setCurrentPage }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  let { isDarkMode } = useSelector(state => state.photo)
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault()
    dispatch(handleSearch(query));
    setQuery("");
    setCurrentPage(1)
    onNewSearch();

  };

  return (<>
    <form onSubmit={onSearch} className="flex items-center justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search with ImageID...."
        className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"} w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-800 `}>
      </input>
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
    {/* <PhotoGrids /> */}
  </>
  );
};

export default SearchBar;
