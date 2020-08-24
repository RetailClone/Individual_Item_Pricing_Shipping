import React from 'react';
import axios from 'axios';
import styles from '../style.css';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      quantity: 1,
    };
    this.getPrice = this.getPrice.bind(this);
    this.quantityClickHander = this.quantityClickHandler.bind(this);
  }

  // On mount, set state of price
  componentDidMount() {
    this.getPrice();
  }

  // when productId changes, get request for price and update
  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.getPrice();
    }
  };

  // get request for price to backend and set state for price
  getPrice() {
    const { productId } = this.props;
    axios
      .get(`/product/price/${productId}`)
      .then((response) => {
        this.setState({ price: response.data.price });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // sets state for drop down menu click
  quantityClickHandler(num) {
    this.setState({ quantity: num });
  }

  // Will render Price and Quantity drop down menu
  render() {
    const { price, quantity } = this.state;
    return (
      <div className={styles.priceContainer}>
        <div className={styles.priceNumber}>
          {`$${price.toFixed(2)}`}
        </div>
        <div>Quantity</div>
        <div className={styles.quantityDropdown}>
          <select className={styles.quantityDropbtn}>
            {/* this option is to display the quantity number */}
            <option className={styles.quantityOption}>
              {`${quantity}`}
            </option>
          </select>
          {/* this is the drop down menu that uses clickhandler */}
          <div className={styles.quantityDropdownContent}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => {
              return (
                <a
                  key={i}
                  onClick={() => {
                    this.quantityClickHandler(num);
                  }}
                >
                  {/* this is a displayed number */}
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
