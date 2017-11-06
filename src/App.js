import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router'; 

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
        <AuctionList/>
      </div>
    );
  }
}

export default App;