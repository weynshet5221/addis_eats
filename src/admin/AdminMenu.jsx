import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadDishes } from "../api/menuApi";
import AdminDishForm from "./AdminDishForm";

function AdminMenu() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [editingDish, setEditingDish] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadDishes().then((data) => {
      setDishes(data);
    });
  }, []);

  function deleteDish(id) {
    const confirmed = window.confirm(
      "Delete this dish?"
    );

    if (!confirmed) return;

    const updatedDishes = dishes.filter(
      (dish) => dish.id !== id
    );

    setDishes(updatedDishes);

    localStorage.setItem(
      "addiseats_menu",
      JSON.stringify(updatedDishes)
    );
  }

  function handleToggleHide(id) {
    const updatedDishes = dishes.map((dish) =>
      dish.id === id
        ? {
            ...dish,
            hidden: !dish.hidden
          }
        : dish
    );

    setDishes(updatedDishes);

    localStorage.setItem(
      "addiseats_menu",
      JSON.stringify(updatedDishes)
    );
  }

  function handleEdit(dish) {
    setEditingDish(dish);
    setShowForm(true);
  }

  function handleAdd() {
    setEditingDish(null);
    setShowForm(true);
  }

  function handleSave(savedDish) {
    let updatedDishes;

    if (editingDish) {
      updatedDishes = dishes.map((dish) =>
        dish.id === savedDish.id
          ? savedDish
          : dish
      );
    } else {
      updatedDishes = [
        ...dishes,
        savedDish
      ];
    }

    setDishes(updatedDishes);

    localStorage.setItem(
      "addiseats_menu",
      JSON.stringify(updatedDishes)
    );

    setShowForm(false);
    setEditingDish(null);
  }

  const filteredDishes = dishes.filter((dish) =>
    dish.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="admin-page">

      <div className="admin-header">
        <div>
          <span>ADMIN</span>
          <h1>Manage Menu</h1>
        </div>

        <Link
          to="/admin"
          className="secondary-button"
        >
          Dashboard
        </Link>
      </div>

      <div className="admin-tools">

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search dishes..."
        />

        <button
          className="primary-button"
          onClick={handleAdd}
        >
          Add Dish
        </button>

      </div>

      {showForm && (
        <div className="admin-form-container">

          <h2>
            {editingDish
              ? "Edit Dish"
              : "Add Dish"}
          </h2>

          <AdminDishForm
            dish={editingDish}
            onSave={handleSave}
          />

          <button
            className="secondary-button"
            onClick={() => {
              setShowForm(false);
              setEditingDish(null);
            }}
          >
            Cancel
          </button>

        </div>
      )}

      <div className="admin-table">

        {filteredDishes.map((dish) => (
          <div
            className="admin-row"
            key={dish.id}
          >

            <div>
              <strong>
                {dish.name}
              </strong>

              <span>
                {dish.category}
              </span>

              {dish.hidden && (
                <small>
                  Hidden from customers
                </small>
              )}
            </div>

            <strong>
              {dish.price.toLocaleString()} ETB
            </strong>

            <button
              className="admin-button"
              onClick={() =>
                handleEdit(dish)
              }
            >
              Edit
            </button>

            <button
              className="admin-button"
              onClick={() =>
                handleToggleHide(dish.id)
              }
            >
              {dish.hidden
                ? "Unhide"
                : "Hide"}
            </button>

            <button
              className="admin-button danger"
              onClick={() =>
                deleteDish(dish.id)
              }
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default AdminMenu;