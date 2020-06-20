import React, { useState } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Link, withRouter } from "react-router-dom";

import { addBug } from "../../../store/actions/project";
import Project from "../Project";

const AddBug = ({ addBug, match, history }) => {
  const [formData, setFormData] = useState({
    heading: "",
    subheading: "",
    status: "",
    remarks: "",
    category: "",
  });

  const { heading, subheading, status, remarks, category } = formData;
  const currentproject = match.params.id;
  const [modalValue, setModalValue] = useState("");

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    await addBug(formData, currentproject, history);
    setFormData(" ");
    setModalValue("modal");
  };

  return (
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Add Bugg</h5>
            </div>
            <div class="card-body">
              <form id="validation-form" onSubmit={(e) => onSubmit(e)}>
                <div class="form-group">
                  <label class="form-label">Bugg Title</label>
                  <input
                    type="text"
                    class="form-control"
                    name="heading"
                    value={heading}
                    onChange={(e) => onChange(e)}
                    placeholder="bug hading "
                  />
                  <small class="form-text text-muted">
                    Enter little details about bugg.
                  </small>
                </div>
                <div class="form-group">
                  <label class="form-label">Sub Heading</label>
                  <input
                    class="form-control datetimepicker-input"
                    type="text"
                    value={subheading}
                    name="subheading"
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">status</label>
                  <input
                    type="text"
                    class="form-control"
                    name="status"
                    value={status}
                    onChange={(e) => onChange(e)}
                    placeholder="Status"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">status</label>
                  <input
                    type="text"
                    class="form-control"
                    name="remarks"
                    value={remarks}
                    onChange={(e) => onChange(e)}
                    placeholder="remarks"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">status</label>
                  <input
                    type="text"
                    class="form-control"
                    name="category"
                    value={category}
                    onChange={(e) => onChange(e)}
                    placeholder="category"
                  />
                </div>

                <button
                  type="submit"
                  data-dismiss={modalValue}
                  class="btn btn-primary  "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Project.PropTypes = {
  addBug: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  Project: state.project,
});

export default connect(mapStateToProps, { addBug })(withRouter(AddBug));
