import React, { Component } from 'react';
import { Button } from 'react-materialize';

//grab that thicc data
import AUCTION_DATA from '../services/Api.js';

//socket API setup 
import { increasePrice, subscribeToIncrease, requestPrice } from '../services/SocketApi.js'; 

//custom components
import PriceLabel from './PriceLabel.js';

//custom styles
import '../styles/AuctionRoom.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//should ideally take this completely out
var axios = require('axios'); 

class AuctionRoom extends Component {

  constructor(props){
      super(props);

      var defaultAuction = { imageUrl: "", title: "" }; 

      //set initial state
      this.state = {
          auctionItem: defaultAuction,
          currentPrice: 0,
      }

      //grab reference to this for use inside of callback
      var self = this;
      this.getAuctions()
        .then(function(response){
            //filter through list for matching IDs -- ideally
            //this would be passed with the component knowing nothing but we'll
            //hopefully get there at some point
            var auctionList = response.data; 
            var currentAuctionId = self.props.match.params.auctionId;

            var desiredItem = auctionList.find((auction) => {
                return currentAuctionId == auction._id; 
            })

            self.setState({
                auctionItem: desiredItem,
            })

        });

      requestPrice((initialPrice) => {
          console.log("Receiving intial price: " + initialPrice); 
          this.setState({
            currentPrice: initialPrice,
          });
      });

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
            <div className="image-and-title"> 
                <img className="image-media" src={this.state.auctionItem.imageUrl}/>
                <div className="item-title">{this.state.auctionItem.itemName}</div>
                <div className="description-text">{this.state.auctionItem.description}</div>
            </div>
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

    //separate into separate state
    getAuctions = () => { 
        return axios.get('http://localhost:8080/api/auctions')
    }

}

export default AuctionRoom;