const React = require("react");
import axios from "axios";

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.itemId || 22,
      price: 0,
    };
    this.getPrice = this.getPrice.bind(this);
  }

  componentDidMount() {
    this.getPrice(this.state.productId);
  }

  getPrice(prodId) {
    axios.get(`http://localhost:7770/product/price/${prodId}`)
      .then((response) => {
        this.setState({ price: response.data.price });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="price-number">{`$${this.state.price.toFixed(2)}`}</div>
        <div className="quantity-dropdown">
          <button className="quantity-dropbtn">Quantity</button>
          <div className="quantity-dropdown-content">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => {
              return <a key={i}>{num}</a>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Price;
