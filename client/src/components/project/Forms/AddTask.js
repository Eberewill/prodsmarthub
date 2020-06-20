import React, { useState } from "react";
const AddTask = ({ addTask, currentproject }) => {
  const [formData, setFormData] = useState({
    heading: "",
    endingdate: "",
    status: "",
    remarks: "",
    category: "",
  });

  const { heading, endingdate, status, remarks, category } = formData;

  const [modalValue, setModalValue] = useState("");

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    await addTask(formData, currentproject);
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
                    value={endingdate}
                    name="endingdate"
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

export default AddTask;
