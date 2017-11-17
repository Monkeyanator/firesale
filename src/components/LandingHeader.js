import React, { Component } from 'react';

//custom styles
import "../styles/LandingHeader.css"; 

class LandingHeader extends Component {
  render() {
    return (
      <div>
        <header className="Nav-header">
          <span className="Nav-title"><span>{this.props.title}</span></span>
        </header>
      </div>
    );
  }
}

export default LandingHeader;