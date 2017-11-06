import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router'; 

//custom components 
import LandingHeader from './components/LandingHeader.js';
import AuctionList from './components/AuctionList.js';

//styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingHeader logo="🔥" title="Firesale"/>
        <Route exact path="/" component={AuctionList}/>
      </div>
    );
  }
}

export default App;