import React, { Component } from 'react';

//materialize css 
import { Card, CardTitle } from 'react-materialize';

//router
import { Link } from 'react-router-dom'

//api data
import AUCTION_DATA from '../services/Api';

//custom styles
import '../styles/AuctionList.css'; 

var axios = require('axios'); 

class AuctionList extends Component {

  constructor(props){
      super(props);

      this.state = {
          auctionItems: AUCTION_DATA.AUCTION_DATA //why do I need to do and additional .AUCTION_DATA? 
      }      

      var self = this;
      //set the state to retrieved auction items
      this.getAuctions()
        .then(function(response){
            var auctionItemList = response.data;
            console.log(auctionItemList);
            self.setState({ auctionItems: auctionItemList });
        });

  }

  render() {

    var auctionData = this.state.auctionItems; 
    var auctionCards = auctionData.map(function(auctionItem){
        return (
            <Link to={'/auctions/' + auctionItem._id}>
                <Card 
                    className="auction-card"
                    header={
                        <CardTitle image={ auctionItem.imageUrl } 
                                waves='light'/>
                        }
                    title={ auctionItem.itemName }>
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

  //separate into separate state
  getAuctions = () => { 
    return axios.get('http://localhost:8080/api/auctions')
  }

  postAuctions(){

  }

}

export default AuctionList;