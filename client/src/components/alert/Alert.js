import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div className="card-body">
      <div className="mb-3">
        <div
          key={alert.id}
          className={`alert alert-${alert.alertType} alert-dismissible`}
          role="alert"
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="alert-icon">
            <i className="far fa-fw fa-bell"></i>
          </div>
          <div className="alert-message">
            <strong>{alert.msg}</strong>
          </div>
        </div>
      </div>
    </div>
  ));

Alert.propTypes = {
  alerts: propTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
