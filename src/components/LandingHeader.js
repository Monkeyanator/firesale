import React, { Component } from 'react';

//custom styles
import "../styles/LandingHeader.css"; 

class LandingHeader extends Component {
  render() {
    return (
      <div>
        <header className="Nav-header">
          <span className="Nav-title" onClick={() => window.location = '/'}>{this.props.title}</span>
        </header>
      </div>
    );
  }
}

export default LandingHeader;