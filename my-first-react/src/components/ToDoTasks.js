import React from 'react';
function ToDoTasks(props) {
  const style = {
    fontSize: 15,
    color: 'red',
    textDecoration: 'underline overline'
  };
  return (
    <div className="tasks">
      <div>
        <label>
          <input type="checkbox" name="completed" onChange={props.handlemark} />
        </label>
      </div>
      <div>
        <p style={props.data.completed ? style : null}>{props.data.task}</p>
      </div>
      <div>
        <button onClick={props.handleEdit}>Edit</button>
      </div>
      <div>
        <button onClick={props.deleteChange}>Delete</button>
      </div>
    </div>
  );
}

export default ToDoTasks;
