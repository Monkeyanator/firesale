import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router'; 

//custom components 
import LandingHeader from './components/LandingHeader.js';
import AuctionList from './components/AuctionList.js';
import AuctionRoom from './components/AuctionRoom.js'; 

//styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingHeader title="🔥"/>
        <Route exact path="/" component={AuctionList}/>
        <Route path='/auctions/:auctionId' component={AuctionRoom}/>
      </div>
    );
  }
}

export default App;