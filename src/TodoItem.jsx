import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    }
  }

  render() {
    let text = null;
    if(!this.state.completed) {
      text = <p className="pull-left">{this.props.todo.text}</p>;
    } else {
      text = <s className="pull-left">{this.props.todo.text}</s>;
    }

    return (
      <li className="list-group-item">
        {text}
        <div className="pull-left" style={{marginLeft: '15px'}}>
          <input type="checkbox" onChange={() => {this.toggleCompleted()}} />
        </div>
        <div className="pull-right">
          <button className="btn btn-danger" onClick={() => {this.deleteTodo()}}>&times;</button>
        </div>
        <div className="clearfix"></div>
      </li>
    );
  }

  deleteTodo() {
    this.props.removeTodo(this.props.todoIndex);
  }

  toggleCompleted() {
    this.setState({completed: !this.state.completed});
  }
}

export default TodoItem;
