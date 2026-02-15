import { useState } from "react";

const App = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateFormInput = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="title">Form</h1>
        </div>

        <div className="card-body">
          <form onSubmit={validateFormInput}>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              value={formInput.email}
              onChange={({ target }) => {}}
              name="email"
              id="email"
              className="input"
              placeholder="Enter Email"
            />
            <p className="error-message">{formError.email}</p>

            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              value={formInput.password}
              onChange={({ target }) => {}}
              name="password"
              id="password"
              className="input"
              placeholder="Enter Password"
            />
            <p className="error-message">{formError.password}</p>

            <label className="label" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="text"
              value={formInput.confirmPassword}
              onChange={({ target }) => {}}
              name="confirm-password"
              id="confirm-password"
              className="input"
              placeholder="Confirm Password"
            />
            <p className="error-message">{formError.confirmPassword}</p>
            <p className="success-message">{formInput.successMsg}</p>

            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
