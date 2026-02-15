import { useState } from "react";

const App = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleUserInput = (name, value) => {
    setFormError((prev) => ({ ...prev, [name]: "" }));
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let errors = {};

    // Email Validation
    if (!formInput.email.trim()) {
      errors.email = "Enter a valid email address";
    } else if (!/\S+@\S+\.\S+/.test(formInput.email)) {
      errors.email = "Email format is invalid";
    }

    // Password Validation
    if (!formInput.password) {
      errors.password = "Password should not be empty";
    } else if (formInput.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    // Confirm Password Validation
    if (formInput.password !== formInput.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      setSuccessMsg("Validation Successful!");
    } else {
      setSuccessMsg("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="title">Sign Up</h1>
        </div>

        <div className="card-body">
          <form onSubmit={validateFormInput} noValidate>
            <div className="form-group">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                value={formInput.email}
                onChange={({ target }) =>
                  handleUserInput(target.name, target.value)
                }
                className={`input ${formError.email ? "input-error" : ""}`}
                placeholder="Enter Email"
              />
              {formError.email && (
                <p className="error-message">{formError.email}</p>
              )}
            </div>

            <div className="form-group">
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                value={formInput.password}
                onChange={({ target }) =>
                  handleUserInput(target.name, target.value)
                }
                className={`input ${formError.password ? "input-error" : ""}`}
                placeholder="Enter Password"
              />
              {formError.password && (
                <p className="error-message">{formError.password}</p>
              )}
            </div>

            <div className="form-group">
              <label className="label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formInput.confirmPassword}
                onChange={({ target }) =>
                  handleUserInput(target.name, target.value)
                }
                className={`input ${formError.confirmPassword ? "input-error" : ""}`}
                placeholder="Confirm Password"
              />
              {formError.confirmPassword && (
                <p className="error-message">{formError.confirmPassword}</p>
              )}
            </div>

            {successMsg && <p className="success-message">{successMsg}</p>}

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
