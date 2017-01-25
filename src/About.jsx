import React, { Component } from 'react';

import Navbar from './Navbar';
import TodoListContainer from './TodoListContainer';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>About TodoList</h1>
        <p>
          This is a todo list that has a router and it's built
          it React. And stuff.
        </p>
      </div>
    );
  }
}

export default About;
