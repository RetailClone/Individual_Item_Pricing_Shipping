const React = require('react');
import Axios from 'axios';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId : 1
    };
    this.getPrice = this.getPrice.bind(this);
  }

  getPrice(prodId) {
    //axios request
    return prodId;
  }

  render() {
    return (
      <div>
        <div>This is the Price Component</div>
        {this.getPrice(this.state.productId)}
      </div>
    )
  }
}

export default Price;