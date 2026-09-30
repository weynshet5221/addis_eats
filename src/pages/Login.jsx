import { useState } from "react";
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import useAuthStore from "../store/authStore";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const login = useAuthStore(
    (state) => state.login
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError(
        "Please enter your name and phone number."
      );
      return;
    }

    const user = {
      name: name.trim(),
      phone: phone.trim()
    };

    login(user);

    const destination =
      location.state?.from || "/";

    navigate(destination, { replace: true });
  }

  return (
    <section className="auth-page">
      <div className="auth-card">

        <span>WELCOME</span>

        <h1>Sign In</h1>

        <p>
          Sign in to continue to checkout
          and view your orders.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-field">
            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Your name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">
              Phone
            </label>

            <input
              id="phone"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              placeholder="09XXXXXXXX"
            />
          </div>

          {error && (
            <p className="field-error">
              {error}
            </p>
          )}

          <button
            className="primary-button full-button"
            type="submit"
          >
            Continue
          </button>

        </form>

      </div>
    </section>
  );
}

export default Login;