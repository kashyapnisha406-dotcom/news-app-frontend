import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ onCategoryChange, onSearch }) {
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Home", value: "general" },
    { name: "India", value: "india" },
    { name: "Business", value: "business" },
    { name: "Technology", value: "technology" },
    { name: "Entertainment", value: "entertainment" },
    { name: "Sports", value: "sports" },
  ];

  const handleCategoryClick = (val) => {
    setActiveCategory(val);
    if (onCategoryChange) onCategoryChange(val);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-logo" onClick={() => handleCategoryClick("general")}>
          <span className="logo-red">LIVE</span>
          <span className="logo-white">NEWS</span>
        </div>

        {/* Categories Menu */}
        <nav className="navbar-menu">
          <ul>
            {categories.map((cat) => (
              <li
                key={cat.value}
                className={activeCategory === cat.value ? "active" : ""}
                onClick={() => handleCategoryClick(cat.value)}
              >
                {cat.name}
              </li>
            ))}
            <li className="live-tv-link">
              <span className="live-dot"></span> Live TV
            </li>
          </ul>
        </nav>

        {/* Search Input Box */}
        <form className="navbar-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
      </div>
    </header>
  );
}

export default Navbar;