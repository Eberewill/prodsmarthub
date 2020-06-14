import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const SingleProject = ({
  title,
  subtitle,
  startdate,
  endingdate,
  status,
  link,
  key,
}) => {
  return (
    <div class="col-12 col-md-6 col-lg-3" key={key}>
      <div class="card">
        <div class="card-header px-4 pt-4">
          <div class="card-actions float-right">
            <div class="dropdown show">
              <a href="#" data-toggle="dropdown" data-display="static">
                <i class="align-middle" data-feather="more-horizontal"></i>
              </a>

              <div class="dropdown-menu dropdown-menu-right">
                <Link class="dropdown-item" to={`project/${link}`}>
                  view
                </Link>
                <a class="dropdown-item" href="#">
                  Delete
                </a>
                <a class="dropdown-item" href="#">
                  mark completed
                </a>
              </div>
            </div>
          </div>
          <h5 class="card-title mb-0">
            {" "}
            <Link to={`project/${link}`}>{title}</Link>{" "}
          </h5>
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
              {status} <span class="float-right">100%</span>
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
