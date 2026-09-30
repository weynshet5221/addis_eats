import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="menu-search">
      <Search size={18} />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search dishes..."
        aria-label="Search dishes"
      />
    </div>
  );
}

export default SearchBar;