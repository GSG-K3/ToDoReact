import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import todoData from './todoData';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData
    };
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>You can Do it !</h1>
        </div>
        <ToDoItem />
      </div>
    );
  }
}

export default ToDoList;
