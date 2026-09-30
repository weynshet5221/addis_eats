import DishCard from "./DishCard";

function DishList({ dishes }) {
  if (!dishes.length) {
    return (
      <div className="empty-state">
        <h3>No dishes found</h3>
        <p>
          Try another search or choose another category.
        </p>
      </div>
    );
  }

  return (
    <div className="dish-grid">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default DishList;