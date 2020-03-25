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
    //     let todoItems = this.state.todos.map(todo => {
    //       return (
    //         <ToDoItem key={todo.id} task={todo.task} completed={todo.completed} />
    //       );
    //     });
    return (
      <div>
        <ToDoItem />
      </div>
    );
  }
}

export default ToDoList;
