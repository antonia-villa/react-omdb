import React, { Component } from 'react';
const Link = require('react-router').Link;

import styles from './styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <ul>
        <li><Link to={`/`}>Todo List</Link></li>
        <li><Link to={`/about`}>About</Link></li>
        <li><Link to={`/contact`}>Contact</Link></li>
        <li><Link to={`/search`}>Search</Link></li>
      </ul>
    );
  }
}

export default Navbar;
