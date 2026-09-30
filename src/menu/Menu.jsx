import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { loadDishes } from "../api/menuApi";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";
import DishList from "./DishList";
import Spinner from "../ui/Spinner";
import ErrorMessage from "../ui/ErrorMessage";
import { useEffect } from "react";
function Menu() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const category =
    searchParams.get("category") || "all";

  const urlSearch =
    searchParams.get("search") || "";

  const [search, setSearch] = useState(urlSearch);

  const debouncedSearch = useDebounce(search, 300);

  const { data, loading, error } = useFetch(
    loadDishes,
    []
  );
useEffect(() => {
  setSearch(urlSearch);
}, [urlSearch]);
const dishes = useMemo(() => {
  if (!data) return [];

  let result = data.filter(
    (dish) => !dish.hidden
  );

  if (category !== "all") {
    result = result.filter(
      (dish) =>
        dish.category.toLowerCase() ===
        category.toLowerCase()
    );
  }

  if (debouncedSearch.trim()) {
    const query = debouncedSearch.toLowerCase();

    result = result.filter(
      (dish) =>
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query)
    );
  }

  return result;
}, [data, category, debouncedSearch]);

  function handleCategoryChange(newCategory) {
    const params = new URLSearchParams(
      searchParams
    );

    if (newCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", newCategory);
    }

    setSearchParams(params);
  }

  function handleSearch(value) {
    setSearch(value);

    const params = new URLSearchParams(
      searchParams
    );

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  }

  return (
    <section className="menu-page">

      <div className="page-heading">
        <span>OUR MENU</span>
        <h1>Explore Our Menu</h1>
        <p>
          Discover delicious dishes prepared with
          authentic flavors and fresh ingredients.
        </p>
      </div>

      <SearchBar
        value={search}
        onChange={handleSearch}
      />

      <CategoryBar
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
      />

      {loading && <Spinner />}

      {error && (
        <ErrorMessage message={error} />
      )}

      {!loading && !error && (
        <DishList dishes={dishes} />
      )}
      

    </section>
  );
}

export default Menu;