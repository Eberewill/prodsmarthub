import React, { useEffect } from "react";

import Modal from "react-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProject } from "../../store/actions/project";
import { Link } from "react-router-dom";

import Moment from "react-moment";

const Project = ({
  project: {
    sProject: { title, subtitle, giturl, tags, startdate },
  },
  auth,
  getProject,
  match,
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

  useEffect(() => {
    getProject(match.params.id);
  }, [getProject]);
  return (
    <main className="content">
      <div className="container-fluid p-0">
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
            <a class="dropdown-item" href="#">
              Add Task
            </a>
            <a class="dropdown-item" href="#">
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
          <div class="col-xl-4">
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
          <div className="col-12 col-lg-7 col-xl-8 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <div className="card-actions float-right"></div>
                <h5 className="card-title mb-0">Tasks</h5>
              </div>
              <table
                id="datatables-dashboard-traffic"
                className="table table-striped my-0"
              >
                <thead>
                  <tr>
                    <th>Source</th>
                    <th className="text-right">Users</th>
                    <th className="d-none d-xl-table-cell text-right">
                      Sessions
                    </th>
                    <th className="d-none d-xl-table-cell text-right">
                      Bounce Rate
                    </th>
                    <th className="d-none d-xl-table-cell text-right">
                      Avg. Session Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google</td>
                    <td className="text-right">1023</td>
                    <td className="d-none d-xl-table-cell text-right">1265</td>
                    <td className="d-none d-xl-table-cell text-right text-success">
                      27.23%
                    </td>
                    <td className="d-none d-xl-table-cell text-right">
                      00:06:25
                    </td>
                  </tr>
                  <tr>
                    <td>Bing</td>
                    <td className="text-right">504</td>
                    <td className="d-none d-xl-table-cell text-right">623</td>
                    <td className="d-none d-xl-table-cell text-right text-danger">
                      66.76%
                    </td>
                    <td className="d-none d-xl-table-cell text-right">
                      00:04:42
                    </td>
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td className="text-right">462</td>
                    <td className="d-none d-xl-table-cell text-right">571</td>
                    <td className="d-none d-xl-table-cell text-right text-success">
                      31.53%
                    </td>
                    <td className="d-none d-xl-table-cell text-right">
                      00:08:05
                    </td>
                  </tr>
                  <tr>
                    <td>Pinterest</td>
                    <td className="text-right">623</td>
                    <td className="d-none d-xl-table-cell text-right">770</td>
                    <td className="d-none d-xl-table-cell text-right text-danger">
                      52.81%
                    </td>
                    <td className="d-none d-xl-table-cell text-right">
                      00:03:10
                    </td>
                  </tr>
                  <tr>
                    <td>Facebook</td>
                    <td className="text-right">812</td>
                    <td className="d-none d-xl-table-cell text-right">1003</td>
                    <td className="d-none d-xl-table-cell text-right text-success">
                      24.83%
                    </td>
                    <td className="d-none d-xl-table-cell text-right">
                      00:05:56
                    </td>
                  </tr>
                  <tr>
                    <td>DuckDuckGo</td>
                    <td className="text-right">693</td>
                    <td className="d-none d-xl-table-cell text-right">856</td>
                    <td className="d-none d-xl-table-cell text-right text-success">
                      37.36%
                    </td>
                    <td className="d-none d-xl-table-cell text-right">
                      00:09:12
                    </td>
                  </tr>
                  <tr>
                    <td>GitHub</td>
                    <td className="text-right">713</td>
                    <td className="d-none d-xl-table-cell text-right">881</td>
                    <td className="d-none d-xl-table-cell text-right text-success">
                      38.09%
                    </td>
                    <td className="d-none d-xl-table-cell text-right">
                      00:06:19
                    </td>
                  </tr>
                  <tr>
                    <td>Direct</td>
                    <td className="text-right">872</td>
                    <td className="d-none d-xl-table-cell text-right">1077</td>
                    <td className="d-none d-xl-table-cell text-right text-success">
                      32.70%
                    </td>
                    <td className="d-none d-xl-table-cell text-right">
                      00:09:18
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  getProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  project: state.project,
});
export default connect(mapStateToProps, { getProject })(Project);
