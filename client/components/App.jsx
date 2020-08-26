import React from 'react';
import axios from 'axios';
import Image from './Image.jsx';
import Price from './Price.jsx';
import Shipping from './Shipping.jsx';
import styles from '../style.css';

axios.defaults.baseURL =
  'http://ec2-18-191-90-13.us-east-2.compute.amazonaws.com:7770';
  // 'http://localhost:7770';

class ItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Product Name',
    };
    this.getName = this.getName.bind(this);
    this.getProductId = this.getProductId.bind(this);
  }

  // On mount, will set state of name
  componentDidMount() {
    this.getName();
  }

  getProductId() {
    // if props not passed from parent component
    // set the or side to the productId variable.
    // if no window id available get query parameters
    // otherwise default to 1
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');
    return this.props.productId || window.product_id || productId || 1;
  }

  // sends request to retrieve name of product from backend
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

  // will render Name of product
  // and invoke Image, Price, and Shipping components
  // productId is passed as props to components
  render() {
    const { name } = this.state;

    return (
      <div className={styles.photoView}>
        <div className={styles.individualItemsMainView}>
          <div className={styles.productName}>{name}</div>
          <div className={styles.individualItemsContent}>
            <Image productId={this.getProductId()} />
            <Price productId={this.getProductId()} />
            <Shipping />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemView;
