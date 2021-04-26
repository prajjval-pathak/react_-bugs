import React from "react";
import validate from "../middleware/validateInfo";
import useForm from "../middleware/useForm";
import "./Form.css";
import Logo from '../images/leftImage.jpg'
const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form-content-left">
          <img
            className="form-img"
            src={Logo}
            alt="spaceship"
          />
        </div>
        <div className="form-content-right">
          <form onSubmit={handleSubmit} className="form" noValidate>
            <h1>LOGIN HERE.</h1>
            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <button className="form-input-btn" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FormLogin;
