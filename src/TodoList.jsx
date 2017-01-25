import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const listItems = this.props.todos.map((todoItem, index) => {
      return <TodoItem key={index} todoIndex={index}
          todo={todoItem} removeTodo={this.props.removeTodo} />
    });

    return (
      <div className="row">
        <div className="col-xs-12">
          <ul className="list-group">{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
