import React, { Component } from 'react';

//custom styles
import '../styles/PriceLabel.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class PriceLabel extends Component {

  render() {
    return (
        <div className="label-text">
            ${this.props.price}
        </div>
    )
  }

}

export default PriceLabel; 