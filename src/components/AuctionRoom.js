import React, { Component } from 'react';
import { MediaBox } from 'react-materialize';

//grab that thicc data
import AUCTION_DATA from '../services/Api.js';

//custom styles
import '../styles/AuctionRoom.css';

class AuctionRoom extends Component {

  constructor(props){
      super(props);
      this.state = {
          auctionItem: AUCTION_DATA.AUCTION_DATA.find((auction) => {
              console.log(this.props.match.params.auctionId);
              console.log(auction.auctionId);
              return this.props.match.params.auctionId == auction.auctionId;
          })
      }
      console.log(this.state);
  }

  render() {
    return (
        <div>
            <MediaBox 
                className="image-media"
                src={this.state.auctionItem.imageUrl} 
                caption={this.state.auctionItem.title} 
                width="550"/>
        </div>
    )
  }

}

export default AuctionRoom;