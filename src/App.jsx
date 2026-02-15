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

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();

    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter a valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter a valid email address",
      });
      setFormInput((prevState) => ({
        ...prevState,
        successMsg: "",
      }));
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      setFormInput((prevState) => ({
        ...prevState,
        successMsg: "",
      }));
      return;
    }

    if (formInput.password !== formInput.confirmPassword) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be the same",
      });
      setFormInput((prevState) => ({
        ...prevState,
        successMsg: "",
      }));
      return;
    }

    setFormError(inputError);
    setFormInput((prevState) => ({
      ...prevState,
      successMsg: "Validation Successful",
    }));
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
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
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
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
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
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
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
