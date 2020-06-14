import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../../store/actions/auth";

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <>
      <nav id="sidebar" className="sidebar">
        <div className="sidebar-content ">
          <a className="sidebar-brand" href="index.html">
            <i className="align-middle" data-feather="box"></i>
            <span className="align-middle">Smart Hub</span>
          </a>

          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a
                href="#dashboards"
                data-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="align-middle" data-feather="sliders"></i>{" "}
                <span className="align-middle">Project</span>
              </a>
              <ul
                id="dashboards"
                className="sidebar-dropdown list-unstyled collapse "
                data-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link className="sidebar-link" to="/projectlist">
                    Projects
                  </Link>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="dashboard-analytics-1.html">
                    Tasks
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="dashboard-e-commerce.html">
                    Bugs
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="sidebar-bottom d-none d-lg-block">
            <div className="media">
              <img
                className="rounded-circle mr-3"
                src="img\avatars\avatar.jpg"
                alt="Chris Wood"
                width="40"
                height="40"
              />
              <div className="media-body">
                <h5 className="mb-1">Hlo</h5>
                <div>
                  <i className="fas fa-circle text-success"></i> Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );

  const guestLinks = <></>;
  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};
Nav.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Nav);
