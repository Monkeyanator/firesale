import React, { Component } from 'react';

//materialize css 
import { Card, CardTitle } from 'react-materialize';

//api data
import AUCTION_DATA from '../services/Api';

//custom styles
import "../styles/AuctionList.css"; 

class AuctionList extends Component {

  constructor(props){
      super(props);
      this.state = {
          auctionItems: AUCTION_DATA.AUCTION_DATA //why do I need to do and additional .AUCTION_DATA? 
      }      

  }

  render() {

    var auctionData = this.state.auctionItems; 
    console.log(auctionData); 
    var auctionCards = auctionData.map(function(auctionItem){
        return (
            <Card 
                className="auction-card"
                header={<CardTitle reveal image={auctionItem.imageUrl} waves='light'/>}
                title="Vincent van Gogh">
            </Card>
            )
        }); 

    return (
      <div>
            { auctionCards }
      </div>
    );
  }
}

export default AuctionList;