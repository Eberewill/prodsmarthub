import React from "react";

const SignUp = () => {
  return (
    <main class="main d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Get started</h1>
                <p className="lead">
                  Start creating the best possible user experience for you
                  customers.
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Company</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="company"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <a href="/login" className="btn btn-lg btn-primary">
                          Sign up
                        </a>
                        <button type="submit" class="btn btn-lg btn-primary">
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
