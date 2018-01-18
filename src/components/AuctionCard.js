import React, { Component } from 'react';

//styles
import '../styles/AuctionCard.css';

class AuctionCard extends Component {
  render() {
    return (
      <div className="card">
          <img src={ this.props.imageUrl } alt="Loading"/>
          <div class="container">
            <h4><b> { this.props.auctionTitle } </b></h4>
            { this.props.description }
          </div>
      </div>
    );
  }
}

export default AuctionCard;