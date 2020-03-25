import React, { Component } from 'react';
import todoData from './todoData';
import ToDoTasks from './ToDoTasks';

class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
      id: 4,
      task: '',
      checked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let lastId = this.state.todos.slice(-1)[0].id;
    this.setState(prevState => {
      return prevState.todos.push({
        id: lastId + 1,
        task: this.state.task,
        checked: this.state.checked
      });
      console.log(this.state.todos[4].id);
    });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    let updateState = this.state.todos.map(item => {
      return (
        <ToDoTasks key={item.id} data={item} handleChange={this.handleChange} />
      );
    });
    return (
      <div className="todoForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
        <p>{updateState}</p>
      </div>
    );
  }
}

export default ToDoItem;
