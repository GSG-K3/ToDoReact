import React, { Component } from 'react';
import todoData from './todoData';
import ToDoTasks from './ToDoTasks';

class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
      id: 0,
      task: '',
      completed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handlemark = this.handlemark.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let lastId = this.state.todos.length - 1;
    lastId++;

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
  handleDelete(index, event) {
    const todo = Object.assign([], this.state.todos);
    todo.splice(index, 1);
    this.setState({ todos: todo });
  }
  handleEdit(index, event) {}
  handlemark(index, event) {
    let todomark = this.state.todos.map(item => {
      if (index === item.id) {
        item.completed = !item.completed;
      }

      return item;
    });

    this.setState({ todos: todomark });
  }
  render() {
    return (
      <div className="todoForm">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" onChange={this.handleChange} />
          <button>Add</button>
        </form>
        <p>
          {this.state.todos.map((item, index) => (
            <ToDoTasks
              key={item.id}
              data={item}
              handleChange={this.handleChange}
              deleteChange={this.handleDelete.bind(this, index)}
              handleEdit={this.handleEdit.bind(this, index)}
              handlemark={this.handlemark.bind(this, index)}
            />
          ))}
        </p>
      </div>
    );
  }
}

export default ToDoItem;
