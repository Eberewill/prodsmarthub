import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import DatePicker from "react-date-picker";

const ProjectAdd = ({ addProject, setIsOpen }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    endingdate: "",
    status: "",
    giturl: "",
  });

  const { title, subtitle, endingdate, status, giturl } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    await addProject(formData);
    setIsOpen(false);
  };

  return (
    <div class="container-fluid p-0">
      <h1 class="h3 mb-3">Validation</h1>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Add Project</h5>
            </div>
            <div class="card-body">
              <form id="validation-form" onSubmit={(e) => onSubmit(e)}>
                <div class="form-group">
                  <label class="form-label">Project Title</label>
                  <input
                    type="text"
                    class="form-control"
                    name="title"
                    value={title}
                    onChange={(e) => onChange(e)}
                    placeholder="Project "
                  />
                  <small class="form-text text-muted">
                    Enter little details about your project.
                  </small>
                </div>
                <div class="form-group">
                  <label class="form-label">Sub Heading</label>
                  <input
                    class="form-control datetimepicker-input"
                    type="text"
                    value={subtitle}
                    name="subtitle"
                    onChange={(e) => onChange(e)}
                  />
                  <small class="form-text text-muted">
                    Example block-level help text here.
                  </small>
                </div>

                <div class="form-group">
                  <label class="form-label">git Url</label>
                  <input
                    type="text"
                    class="form-control"
                    name="giturl"
                    value={giturl}
                    onChange={(e) => onChange(e)}
                    placeholder="github url for projec repo"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Project Category</label>
                  <select class="form-control" name="validation-select">
                    <option value="">Select Category</option>
                    <optgroup label="Dev">
                      <option value="pitons">Pitons</option>
                      <option value="cams">Cams</option>
                      <option value="nuts">Nuts</option>
                      <option value="bolts">Bolts</option>
                      <option value="stoppers">Stoppers</option>
                      <option value="sling">Sling</option>
                    </optgroup>
                    <optgroup label="Other">
                      <option value="Study">Study</option>
                      <option value="Computing">Computing</option>
                      <option value="poles">Poles</option>
                    </optgroup>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">File</label>
                  <div>
                    <input
                      type="file"
                      class="validation-file"
                      name="validation-file"
                    />
                  </div>
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

export default ProjectAdd;
