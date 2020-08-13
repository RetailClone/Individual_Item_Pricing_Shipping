import React from 'react';
import Image from './Image.jsx';
import Price from './Price.jsx';
import Shipping from './Shipping.jsx';
import axios from 'axios';
import styles from "../style.css";

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      name: 'Product Name',
    };
    this.getName = this.getName.bind(this);
  }

  componentDidMount() {
    this.getName(this.state.productId);
  }

  //sends request to retrieve name of product
  getName(prodId) {
    axios.get(`http://localhost:7770/product/name/${prodId}`)
      .then ( (response) => {
      this.setState({name: response.data.name});
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className={styles.individualItemsMainView}>
        <div className={styles.productName}>
          {this.state.name}
        </div>
        <div className={styles.individualItemsContent}>
          <Image itemId={this.state.productId}/>
          <Price itemId={this.state.productId}/>
          <Shipping/>
        </div>
      </div>
    )
  }
}

export default ItemView;