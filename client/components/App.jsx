import React from ("react");
import Image from "./Image.jsx";
import Price from "./Price.jsx";
import Shipping from "./Shipping.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 40,
      name: "Product Name",
    };
    this.getName = this.getName.bind(this);
  }

  componentDidMount() {
    this.getName(this.state.productId);
  }

  //sends request to retrieve name of product
  getName(prodId) {
    axios.get(`http://localhost:7770/product/name/${prodId}`)
      .then((response) => {
        this.setState({ name: response.data.name });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="individual-items-main-view">
        <div className="product-name">{this.state.name}</div>
        <div className="individual-items-content">
          <Image itemId={this.state.productId} />
          <Price itemId={this.state.productId} />
          <Shipping />
        </div>
      </div>
    );
  }
}

export default App;
