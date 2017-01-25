import React, { Component } from 'react';

import Navbar from './Navbar';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Contact</h1>
        <p>
          For help please contact support
          <a href="mailto:support@site.com">support@site.com</a>
        </p>
      </div>
    );
  }
}

export default About;
