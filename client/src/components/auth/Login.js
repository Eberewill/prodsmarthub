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
    <main class="main d-flex w-100">
      <div class="container d-flex flex-column">
        <div class="row h-100">
          <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div class="d-table-cell align-middle">
              <div class="text-center mt-4">
                <h1 class="h2">Welcome </h1>
                <p class="lead">Sign in to your account to continue</p>
              </div>

              <div class="card">
                <div class="card-body">
                  <div class="m-sm-4">
                    <div class="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-box align-middle"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          class="form-control form-control-lg"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          class="form-control form-control-lg"
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
                        <div class="custom-control custom-checkbox align-items-center">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            value="remember-me"
                            name="remember-me"
                            checked=""
                          />
                          <label class="custom-control-label text-small">
                            Remember me next time
                          </label>
                        </div>
                      </div>
                      <div class="text-center mt-3">
                        <button type="submit" class="btn btn-lg btn-primary">
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
