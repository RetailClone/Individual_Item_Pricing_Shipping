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
    // Axios.get('https://localhost:7770/product/price', {
    //   params: {
    //     Id: prodId
    //   }
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
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