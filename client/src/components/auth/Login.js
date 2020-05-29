import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../store/actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //handle the form Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  //redirect if Logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <main className="main d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome </h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-box align-middle"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => onChange(e)}
                        />
                        <small>
                          <a href="#">Forgot password?</a>
                        </small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox align-items-center">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            value="remember-me"
                            name="remember-me"
                            
                          />
                          <label className="custom-control-label text-small">
                            Remember me next time
                          </label>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                        >
                          Sign in
                        </button>
                      </div>
                      <div>
                        <small>
                          <Link to="/signup">
                            {" "}
                            Dont have An Account? Sign Up
                          </Link>
                        </small>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
login.PropTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
