import React, { useEffect, useState } from "react";
import AddBug from "../project/Forms/AddBug";

import Modal from "react-modal";
import Bugs from "./Bugs";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProject, addTask } from "../../store/actions/project";
import { Link } from "react-router-dom";

import Moment from "react-moment";
import AddTask from "./Forms/AddTask";
import Tasks from "./Tasks";

const Project = ({
  project: {
    sProject: { title, subtitle, giturl, tags, startdate, bugs, tasks },
  },
  auth,
  getProject,
  match,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [projectId, setPrjectId] = useState({ projectId: match.params.id });
  const currentproject = match.params.id;
  useEffect(() => {
    getProject(match.params.id);
  }, [getProject]);
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <div
          className="modal fade"
          id="addbug"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Centered modal</h5>
                <button
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AddBug />
              {
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              }
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="AddTask"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Task</h5>
                <button
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <AddTask addTask={addTask} currentproject={currentproject} />
              {
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              }
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            class="btn btn-primary dropdown-toggle float-right mt-n1 "
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Actions
          </button>
          <div class="dropdown-menu">
            <a
              class="dropdown-item"
              data-toggle="modal"
              data-target="#AddTask"
              href="#"
            >
              Add Task
            </a>
            <a class="dropdown-item" data-toggle="modal" data-target="#addbug">
              Add Bugg
            </a>
            <a class="dropdown-item" href="#">
              Edit
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Delete
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-12">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">{title}</h5>
              </div>
              <div className="card-body p-2">
                <hr></hr>
                <p className="subheading">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-xl-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">Project Summery</h5>
              </div>
              <div class="card-body">
                <div class="row no-gutters"></div>

                <table class="table table-sm my-2">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{title}</td>
                    </tr>
                    <tr>
                      <th>Started</th>
                      <td>
                        {" "}
                        <Moment format="YYYY/MM/DD">{startdate}</Moment>
                      </td>
                    </tr>
                    <tr>
                      <th>GitHub</th>
                      <td>
                        <a href={`${giturl}`}>{giturl}</a>
                      </td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>+1234123123123</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>
                        <span class="badge badge-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <hr></hr>

                <strong>Activity</strong>

                <ul class="timeline mt-2 mb-0">
                  <li class="timeline-item">
                    <strong>Signed out</strong>
                    <span class="float-right text-muted text-sm">30m ago</span>
                    <p>
                      Nam pretium turpis et arcu. Duis arcu tortor, suscipit...
                    </p>
                  </li>
                  <li class="timeline-item">
                    <strong>Created invoice #1204</strong>
                    <span class="float-right text-muted text-sm">2h ago</span>
                    <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
                  </li>
                  <li class="timeline-item">
                    <strong>Discarded invoice #1147</strong>
                    <span class="float-right text-muted text-sm">3h ago</span>
                    <p>
                      Nam pretium turpis et arcu. Duis arcu tortor, suscipit...
                    </p>
                  </li>
                  <li class="timeline-item">
                    <strong>Signed in</strong>
                    <span class="float-right text-muted text-sm">3h ago</span>
                    <p>
                      Curabitur ligula sapien, tincidunt non, euismod vitae...
                    </p>
                  </li>
                  <li class="timeline-item">
                    <strong>Signed up</strong>
                    <span class="float-right text-muted text-sm">2d ago</span>
                    <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {bugs ? (
            <>
              <div class="col-xl-6">
                <div class="card">
                  <div className="card-header">
                    <div className="card-actions float-right"></div>
                    <h5 className="card-title mb-0">Bugs</h5>
                  </div>
                  <table
                    id="datatables-dashboard-traffic"
                    className="table table-striped my-0"
                  >
                    <thead>
                      <tr>
                        <th>Bugg</th>
                        <th className="text-right">Status</th>

                        <th className="d-none d-xl-table-cell text-right">
                          Recorded
                        </th>
                        <th className="d-none d-xl-table-cell text-right">
                          Remarks
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bugs.map((bugg) => (
                        <Bugs
                          heading={bugg.heading}
                          status={bugg.status}
                          startdate={bugg.startdate}
                          remarks={bugg.remarks}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>{" "}
            </>
          ) : (
            <> No Bugs</>
          )}

          {tasks ? (
            <>
              <div class="col-xl-6">
                <div class="card">
                  <div className="card-header">
                    <div className="card-actions float-right"></div>
                    <h5 className="card-title mb-0">Bugs</h5>
                  </div>
                  <table
                    id="datatables-dashboard-traffic"
                    className="table table-striped my-0"
                  >
                    <thead>
                      <tr>
                        <th>Bugg</th>
                        <th className="text-right">Status</th>

                        <th className="d-none d-xl-table-cell text-right">
                          Recorded
                        </th>
                        <th className="d-none d-xl-table-cell text-right">
                          Remarks
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((tasks) => (
                        <Tasks
                          heading={tasks.heading}
                          status={tasks.status}
                          startdate={tasks.startdate}
                          remarks={tasks.remarks}
                          endingdate={tasks.endingdate}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>{" "}
            </>
          ) : (
            <> No Bugs</>
          )}
        </div>
      </div>
    </main>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  bugs: PropTypes.array.isRequired,
  getProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project,
});
export default connect(mapStateToProps, { getProject })(Project);
