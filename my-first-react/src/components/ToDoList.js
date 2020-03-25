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
        <ToDoItem />
      </div>
    );
  }
}

export default ToDoList;
