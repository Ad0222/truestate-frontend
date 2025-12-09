import { useState } from "react";
import "../styles/fixedSearch.css";

export default function FixedSearchBar({ onSearch }) {
  const [text, setText] = useState("");

  function handleSearch() {
    onSearch(text);
  }

  return (
    <div className="fixed-search">
      <input
        placeholder="Search Customer..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
