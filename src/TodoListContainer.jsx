import React, { Component } from 'react';

import Navbar from './Navbar';
import TodoList from './TodoList';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {text: 'stuff', time: new Date(), completed: true},
        {text: 'things', time: new Date()},
        {text: 'some more stuff', time: new Date()},
        {text: 'try to take over the world', time: new Date()}
      ]
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center">React Todos</h1>
        <form onSubmit={(event) => {this.submitTodo(event)}}>
          <div className="form-group">
            <input className="form-control" name="todo" type="text" placeholder="Enter Todo" />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
        <TodoList todos={this.state.todos}
                  removeTodo={(todoIndex) => this.removeTodo(todoIndex)} />
      </div>
    );
  }

  submitTodo(event) {
    event.preventDefault();

    let todo = {
      text: event.target.todo.value,
      time: new Date()
    }

    let currentTodos = this.state.todos;
    currentTodos.push(todo);
    this.setState({todos: currentTodos});

    event.target.todo.value = '';
  }

  removeTodo(todoIndex) {
    let currentTodos = this.state.todos;
    currentTodos.splice(todoIndex, 1);
    this.setState({todos: currentTodos});
  }
}

export default TodoListContainer;
