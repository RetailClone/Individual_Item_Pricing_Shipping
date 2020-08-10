const React = require('react');
import Axios from 'axios';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId : this.props.itemId || 22,
      price: 0
    };
    this.getPrice = this.getPrice.bind(this);
  }

  componentDidMount() {
    this.getPrice(this.state.productId);
  }

  getPrice(prodId) {
    Axios.get(`http://localhost:7770/product/price/${prodId}`)
      .then ( (response) => {
      this.setState({price: response.data.price});
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <div>This is the Price Component</div>
        <div>{`$${this.state.price}`}</div>
      </div>
    )
  }
}

export default Price;