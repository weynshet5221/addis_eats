function CategoryBar({
  selectedCategory,
  onCategoryChange
}) {
  const categories = [
    { label: "All", value: "all" },
    { label: "Fasting", value: "fasting" },
    { label: "Non-fasting", value: "non fasting" },
    { label: "Drinks", value: "drinks" },
    { label: "Desserts", value: "desserts" }
  ];

  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category.value}
          className={
            selectedCategory === category.value
              ? "category-button active"
              : "category-button"
          }
          onClick={() =>
            onCategoryChange(category.value)
          }
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;