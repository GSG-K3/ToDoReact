import React, { Component } from 'react';
import todoData from './todoData';

class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    console.log(event);
  }

  handleChange() {}
  render() {
    return (
      <div className="todoForm">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value="todo" onChange={this.handleChange} />
          <button>Add</button>
        </form>
        <div className="tasks">
          <div>
            <label>
              <input type="checkbox" value="task1" name="task1" checked="" />
            </label>
          </div>
          <div>
            <h1>task1</h1>
          </div>
          <div>
            <button>Edit</button>
          </div>
          <div>
            <button>Delete</button>
          </div>
        </div>
        <h1></h1>
      </div>
    );
  }
}

export default ToDoItem;
