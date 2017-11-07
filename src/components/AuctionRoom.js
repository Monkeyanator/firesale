import React, { Component } from 'react';
import { MediaBox, Button } from 'react-materialize';

//grab that thicc data
import AUCTION_DATA from '../services/Api.js';

//socket API setup 
import { increasePrice, subscribeToIncrease } from '../services/SocketApi.js'; 

//custom components
import PriceLabel from './PriceLabel.js';

//custom styles
import '../styles/AuctionRoom.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class AuctionRoom extends Component {

  constructor(props){
      super(props);

      //set initial state
      this.state = {
          auctionItem: AUCTION_DATA.AUCTION_DATA.find((auction) => {
              return this.props.match.params.auctionId == auction.auctionId;
          }),
          currentPrice: 0
      }

      subscribeToIncrease((itemPrice) => {
        console.log("Receiving price-increased message");
        console.log("Value: " + itemPrice);
        this.setState({
            currentPrice: itemPrice
        });
      })

  }

  render() {
    return (
        <span>
            <MediaBox 
                className="image-media"
                src={this.state.auctionItem.imageUrl} 
                caption={this.state.auctionItem.title} 
                width="550"/>
            <div className="button-label-group">
                <PriceLabel price={this.state.currentPrice}/>
                <Button className="bid-button" 
                    onClick={() => {
                        this.setState({currentPrice: this.state.currentPrice+1}); 
                        increasePrice(); 
                    }} 
                    waves='light'><span className="glyphicon glyphicon-arrow-up" 
                    aria-hidden="true"></span>
                </Button>
            </div>
        </span>
    )
  }

}

export default AuctionRoom;