import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between mb-2">
      {/* Logo */}
      <Image src="/yelp_logo.png" alt="logo" width={40} height={40} />

      {/* Search Input Box */}
      <div className="flex items-center gap-3 bg-white p-3 rounded-full shadow-lg border border-gray-300 flex-1">
        {/* Search Icon */}
        <div className="bg-red-500 text-white p-2 rounded-full">
          <Search size={20} strokeWidth={3} />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search for ..."
          className="flex-1 text-black placeholder:text-black focus:outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default SearchBar;
