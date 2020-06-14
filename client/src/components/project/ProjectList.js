import React, { Fragment, useState, useEffect } from "react";
import ProjectAdd from "./ProjectAdd";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SingleProject from "./SingleProject";
import { addProject, loadProjects } from "../../store/actions/project";

import Modal from "react-modal";
import project from "../../store/reducers/project";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ProjectList = ({
  project: { projectList },
  auth: { user },
  addProject,
  loadProjects,
}) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  //get the current user projects
  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  return (
    <main class="content">
      <div class="container-fluid p-0">
        <a onClick={openModal} class="btn btn-primary float-right mt-n1">
          <i class="fas fa-plus"></i> New project
        </a>
        <h1 class="h3 mb-3">Projects</h1>
        <div class="row">
          {projectList.map((projects) => (
            <SingleProject
              link={projects._id}
              key={projects._id}
              title={projects.title}
              subtitle={projects.subtitle}
              status={projects.status}
              startdate={projects.startdate}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>Add Project</div>
        <ProjectAdd addProject={addProject} setIsOpen={setIsOpen} />
      </Modal>
    </main>
  );
};

ProjectList.propTypes = {
  auth: PropTypes.object.isRequired,
  addProject: PropTypes.func.isRequired,
  loadProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project,
});

export default connect(mapStateToProps, { addProject, loadProjects })(
  ProjectList
);
