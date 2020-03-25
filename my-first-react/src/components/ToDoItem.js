import React, { Component } from 'react';
import todoData from './todoData';

class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }
  render() {
    return (
      <div className="todoForm">
        <form>
          <input type="text" value="todo" />
          <button>Add</button>
        </form>
        {/* <label>
          <input type="checkbox" value="done" checked={props.completed} />
          <h1>{props.task}</h1>
        </label> */}
      </div>
    );
  }
}

export default ToDoItem;
