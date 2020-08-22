import React from "react";
import axios from "axios";
import styles from "../style.css";

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      quantity: 1,
    };
    this.getPrice = this.getPrice.bind(this);
    this.quanityClickHander = this.quanityClickHander.bind(this);
  }

  componentDidMount() {
    this.getPrice();
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.getPrice();
    }
  }

  quanityClickHander(num) {
    this.setState({ quantity: num });
  }

  getPrice() {
    axios
      .get(`/product/price/${this.props.productId}`)
      .then((response) => {
        this.setState({ price: response.data.price });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={styles.priceContainer}>
        <div className={styles.priceNumber}>{`$${this.state.price.toFixed(
          2
        )}`}</div>
        <div>Quantity</div>
        <div className={styles.quantityDropdown}>
          <select className={styles.quantityDropbtn}>
            <option
              className={styles.quantityOption}
            >{`${this.state.quantity}`}</option>
          </select>
          <div className={styles.quantityDropdownContent}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => {
              return (
                <a
                  key={i}
                  onClick={() => {
                    this.quanityClickHander(num);
                  }}
                >
                  {num}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Price;
