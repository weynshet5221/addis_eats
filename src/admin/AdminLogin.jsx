import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      navigate("/admin");
    } else {
      setError(
        "Invalid username or password."
      );
    }
  }

  return (
    <section className="auth-page">

      <div className="auth-card">

        <span>ADMIN</span>

        <h1>Admin Login</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-field">
            <label>
              Username
            </label>

            <input
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />
          </div>

          <div className="form-field">
            <label>
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          {error && (
            <p className="field-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-button full-button"
          >
            Login
          </button>
<p>username: admin</p>
<p>password: admin123</p>
        </form>

      </div>

    </section>
  );
}

export default AdminLogin;