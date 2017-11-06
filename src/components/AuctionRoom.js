import React, { Component } from 'react';

//custom styles
import '../styles/AuctionRoom.css';

class AuctionRoom extends Component {

  constructor(props){
      super(props);
  }

  render() {
    return (
        <div className="id-text">{this.props.match.params.auctionId}</div>
    )
  }

}

export default AuctionRoom;