import React from 'react';
function ToDoTasks(props) {
  return (
    <div className="tasks">
      <div>
        <label>
          <input
            type="checkbox"
            name="checked"
            checked={props.handleChange}
            onChange={props.handleChange}
          />
        </label>
      </div>
      <div>
        <p>{props.data.task}</p>
      </div>
      <div>
        <button>Edit</button>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default ToDoTasks;
