import React from "react";
import EditProfile from "./EditProfile";

const Profile = () => {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <div className="col-md-9 col-xl-10">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="account"
              role="tabpanel"
            >
              <div className="card">
                <div className="card-header">
                  <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
                        <i
                          className="align-middle"
                          data-feather="more-horizontal"
                        ></i>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">Public info</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group">
                          <label for="inputUsername">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputUsername"
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <label for="inputUsername">Biography</label>
                          <textarea
                            rows="2"
                            className="form-control"
                            id="inputBio"
                            placeholder="Tell something about yourself"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center">
                          <img
                            alt="Chris Wood"
                            src="img\avatars\avatar.jpg"
                            className="rounded-circle img-responsive mt-2"
                            width="128"
                            height="128"
                          />
                          <div className="mt-2">
                            <span className="btn btn-primary">
                              <i className="fas fa-upload"></i> Upload
                            </span>
                          </div>
                          <small>
                            For best results, use an image at least 128px by
                            128px in .jpg format
                          </small>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </form>
                </div>
              </div>

              <EditProfile />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
