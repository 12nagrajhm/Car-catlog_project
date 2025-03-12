import React, { useState } from "react";
import "../styles/SearchFilter.css";

const SearchFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => onFilter(searchTerm)}>Search</button>
    </div>
  );
};

export default SearchFilter;
