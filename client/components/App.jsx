import React from "react";
import Image from "./Image.jsx";
import Price from "./Price.jsx";
import Shipping from "./Shipping.jsx";
import axios from "axios";
import styles from "../style.css";
axios.defaults.baseURL =
  "http://ec2-18-191-90-13.us-east-2.compute.amazonaws.com:7770";

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Product Name",
    };
    this.getName = this.getName.bind(this);
    this.getProductId = this.getProductId.bind(this);
  }

  componentDidMount() {
    this.getName();
  }

  getProductId() {
    //if props not passed from parent component
    //set the or side to the productId variable.
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("productId");
    return this.props.productId || window.product_id || productId || 1;
  }

  //sends request to retrieve name of product
  getName() {
    axios
      .get(`/product/name/${this.getProductId()}`)
      .then((response) => {
        this.setState({ name: response.data.name });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={styles.individualItemsMainView}>
        <div className={styles.productName}>{this.state.name}</div>
        <div className={styles.individualItemsContent}>
          <Image productId={this.getProductId()} />
          <Price productId={this.getProductId()} />
          <Shipping />
        </div>
      </div>
    );
  }
}

export default ItemView;
