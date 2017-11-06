import React, { Component } from 'react';

//materialize css 
import { Card, CardTitle } from 'react-materialize';

//router
import { Link } from 'react-router-dom'

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
    var auctionCards = auctionData.map(function(auctionItem){
        return (
            <Link to={'/auctions/' + auctionItem.auctionId}>
                <Card 
                    className="auction-card"
                    header={
                        <CardTitle image={ auctionItem.imageUrl } 
                                waves='light'/>
                        }
                    title={ auctionItem.title }>
                </Card>
            </Link>
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