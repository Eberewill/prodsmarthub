import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../store/actions/auth";
import PropTypes from "prop-types";

import { setAlert } from "../../store/actions/alert";

const SignUp = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    location: "",
    email: "",
    password: "",
    password2: "",
  });
  const {
    firstname,
    lastname,
    location,
    email,
    password,
    password2,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //handle the form Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password does not match", "danger");
    } else {
      register({ firstname, lastname, email, password, location });
    }
  };

  //redirect if Register success in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <main class="main d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Get started</h1>
                <p className="lead">
                  Start Bringing your Creativity to live and become productive
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="firstname"
                          value={firstname}
                          onChange={(e) => onChange(e)}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="lastname"
                          value={lastname}
                          onChange={(e) => onChange(e)}
                          placeholder="Enter your last name"
                        />
                      </div>
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
                        <label>location</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="location"
                          value={location}
                          onChange={(e) => onChange(e)}
                          placeholder="Enter your state and country name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => onChange(e)}
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="form-group">
                        <label> Comfirm Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password2"
                          value={password2}
                          onChange={(e) => onChange(e)}
                          placeholder="Comfirm password"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <button type="submit" class="btn btn-lg btn-primary">
                          Sign up
                        </button>
                      </div>
                      <div>
                        <small>
                          <Link to="/login">
                            {" "}
                            Already have An Account? Sign In
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

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);
