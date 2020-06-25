import React from "react";

const EditProfile = () => {
  return (
    <>
      <div class="col-md-9 col-xl-10">
        <div class="card">
          <div class="card-header">
            <div class="card-actions float-right">
              <div class="dropdown show">
                <a href="#" data-toggle="dropdown" data-display="static">
                  <i class="align-middle" data-feather="more-horizontal"></i>
                </a>

                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <h5 class="card-title mb-0">Private info</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputFirstName">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputFirstName"
                    placeholder="First name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLastName">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputLastName"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="password" role="tabpanel">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Password</h5>

            <form>
              <div class="form-group">
                <label for="inputPasswordCurrent">Current password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPasswordCurrent"
                />
                <small>
                  <a href="#">Forgot your password?</a>
                </small>
              </div>
              <div class="form-group">
                <label for="inputPasswordNew">New password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPasswordNew"
                />
              </div>
              <div class="form-group">
                <label for="inputPasswordNew2">Verify password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPasswordNew2"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
