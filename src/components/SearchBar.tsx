import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow">
      <img src="../yelp_logo.png" alt="logo" className="w-8 h-8" />
      <input
        type="text"
        placeholder="Search for ..."
        className="flex-1 p-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
