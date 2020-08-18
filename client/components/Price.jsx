import React from "react";
import axios from "axios";
import styles from "../style.css";

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
    axios.get(`http://${window.location.hostname}:7770/product/price/${prodId}`)
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
        <div className={styles.priceNumber}>{`$${this.state.price.toFixed(2)}`}</div>
        <div className={styles.quantityDropdown}>
          <button className={styles.quantityDropbtn}>Quantity</button>
          <div className={styles.quantityDropdownContent}>
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
