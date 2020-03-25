import React, { Component } from 'react';
import todoData from './todoData';
import ToDoTasks from './ToDoTasks';

class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
      task: '',
      completed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('farah');
    let lastId = this.state.todos.slice(-1)[0].id;
    lastId += 1;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: lastId,
          task: this.state.task,
          completed: this.state.completed
        }
      ]
    });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: !checked })
      : this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="todoForm">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" onChange={this.handleChange} />
          <button>Add</button>
        </form>
        <p>
          {this.state.todos.map(item => (
            <ToDoTasks
              key={item.id}
              data={item}
              handleChange={this.handleChange}
            />
          ))}
        </p>
      </div>
    );
  }
}

export default ToDoItem;
