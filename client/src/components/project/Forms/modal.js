<>
  <button
    type="button"
    className="btn btn-primary"
    data-toggle="modal"
    data-target="#AddTask"
  >
    Primary
  </button>
  <div
    className="modal fade"
    id="AddTask"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Task</h5>
          <button className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <AddBug />
        {
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        }
      </div>
    </div>
  </div>
</>;
