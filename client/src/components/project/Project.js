import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProject } from "../../store/actions/project";

const Project = ({ auth, getProject, match }) => {
  useEffect(() => {
    getProject(match.params.id);
  }, [getProject]);
  return <div></div>;
};

Project.propTypes = {
  getProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project,
});
export default connect(mapStateToProps, { getProject })(Project);
