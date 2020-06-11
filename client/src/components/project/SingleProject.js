import React from "react";
import Moment from "react-moment";

const SingleProject = ({ title, subtitle, startdate, endingdate, status }) => {
  return (
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card">
        <div class="card-header px-4 pt-4">
          <div class="card-actions float-right">
            <div class="dropdown show">
              <a href="#" data-toggle="dropdown" data-display="static">
                <i class="align-middle" data-feather="more-horizontal"></i>
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">
                  view
                </a>
                <a class="dropdown-item" href="#">
                  Delete
                </a>
                <a class="dropdown-item" href="#">
                  mark completed
                </a>
              </div>
            </div>
          </div>
          <h5 class="card-title mb-0">{title}</h5>
          <div class="badge badge-success my-2">{status}</div>
        </div>
        <div class="card-body px-4 pt-2">
          <p>{subtitle}</p>
          <small class="text-muted">
            <Moment format="YYYY/MM/DD">{startdate}</Moment>{" "}
          </small>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item px-4 pb-4">
            <p class="mb-2 font-weight-bold">
              Progress <span class="float-right">100%</span>
            </p>
            <div class="progress progress-sm">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "100%" }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleProject;
