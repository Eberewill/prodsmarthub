import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import DatePicker from "react-date-picker";

const AddBug = ({ addbugg, setIsOpen }) => {
  const [formData, setFormData] = useState({
    heading: "",
    subheading: "",
    status: "",
    remark: "",
    category: "",
  });

  const { heading, subheading, status, remark, category } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    await addbugg(formData);
    setIsOpen(false);
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
                  <label class="form-label">Bugg Category</label>
                  <select
                    class="form-control"
                    name="validation-select"
                    value={category}
                    name="Category"
                    onChange={(e) => onChange(e)}
                  >
                    <option value="">Select Category</option>
                    <optgroup label="Dev">
                      <option value="Synax Error">Syntax Error</option>
                      <option value="compatabilities">compatabilities</option>

                      <option value="Others">Others</option>
                    </optgroup>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary">
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

export default AddBug;
