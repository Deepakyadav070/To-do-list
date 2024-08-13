
function Modal(props) {

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <form onSubmit={props.addTask}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Write your task here...</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <input type="text" value={props.task_name} onChange={(e) => props.setTaskName(e.target.value)} placeholder="Type something here..." id="text-box" />

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" id="close-button" data-bs-dismiss="modal">Close</button>
              <button type="button" htmlType="submit" className="btn btn-primary" disabled={!props.task_name}
                onClick={props.addTask}
              >{props?.taskIndex ? 'Edit' : 'Add'} Task </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;