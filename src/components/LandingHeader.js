import React, { Component } from 'react';

//custom styles
import "../styles/LandingHeader.css"; 

class LandingHeader extends Component {
  render() {
    return (
      <div>
        <header className="Nav-header">
          <h1 className="Nav-logo"><span>{this.props.logo}</span></h1>
          <h1 className="Nav-title"><span>{this.props.title}</span></h1>
        </header>
      </div>
    );
  }
}

export default LandingHeader;