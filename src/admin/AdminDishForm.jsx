import { useEffect, useState } from "react";

function AdminDishForm({ dish: editDish, onSave }) {
  const [dish, setDish] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    ingredients: [],
    hidden: false
  });

  useEffect(() => {
    if (editDish) {
      setDish(editDish);
    } else {
      setDish({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        ingredients: [],
        hidden: false
      });
    }
  }, [editDish]);

  function handleChange(e) {
    setDish({
      ...dish,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...dish,
      id: editDish ? editDish.id : Date.now(),
      price: Number(dish.price)
    });
  }

  return (
    <form
      className="admin-form"
      onSubmit={handleSubmit}
    >
      <div className="form-field">
        <label>Dish Name</label>

        <input
          name="name"
          value={dish.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label>Description</label>

        <textarea
          name="description"
          value={dish.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label>Price</label>

        <input
          type="number"
          name="price"
          value={dish.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label>Category</label>

        <select
          name="category"
          value={dish.category}
          onChange={handleChange}
          required
        >
          <option value="">
            Select category
          </option>

          <option value="fasting">
            Fasting
          </option>

          <option value="non fasting">
            non fasting
          </option>

          <option value="drinks">
            drinks
          </option>

          <option value="desserts">
            dessert
          </option>
        </select>
      </div>

      <div className="form-field">
        <label>Image</label>

        <input
          name="image"
          value={dish.image}
          onChange={handleChange}
          placeholder="/images/doro.webp"
        />
      </div>

      <button
        type="submit"
        className="primary-button"
      >
        {editDish ? "Update Dish" : "Save Dish"}
      </button>
    </form>
  );
}

export default AdminDishForm;