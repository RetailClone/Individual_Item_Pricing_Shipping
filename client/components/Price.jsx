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
        <div className="price-number">{`$${this.state.price.toFixed(2)}`}</div>
        <div className="quantity-dropdown">
          <button className="quantity-dropbtn">Quantity</button>
          <div className="quantity-dropdown-content">
            <a>1</a>
            <a>2</a>
            <a>3</a>
            <a>4</a>
            <a>5</a>
            <a>6</a>
            <a>7</a>
            <a>8</a>
            <a>9</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Price;