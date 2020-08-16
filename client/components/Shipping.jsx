import React from "react";
import styles from "../style.css";
import axios from "axios";

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 78613,
      showMyComponent: false,
      city: "Austin",
    };
    this.getCity = this.getCity.bind(this);
    this.zipCodeInput = React.createRef();
    this.onZipCodeClickHandler = this.onZipCodeClickHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCity();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.zipcode !== prevState.zipcode) {
      this.getCity();
    }
  }


  getCity() {
    axios
      .get(`http://localhost:7770/product/zipcode/${this.state.zipcode}`)
      .then((response) => {
        console.log("get zipcode", response.data.city)
        this.setState({ city: response.data.city || 'INVALID' });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onZipCodeClickHandler() {
    this.setState({ showMyComponent: !this.state.showMyComponent });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ zipcode: this.zipCodeInput.current.value });
    this.setState({ showMyComponent: !this.state.showMyComponent });
  }

  render() {
    return (
      <div className={styles.shippingContents}>
        <div className={styles.shippingCase}>
          <div className={styles.shippingHeaders}>
            <div className={styles.shippingGreenText}>
              Pick up tomorrow at <span>{this.state.city}</span>
            </div>
            <button className={styles.shippingButton}>Pick it up</button>
          </div>
          <div className={styles.shippingBox}>
            Ready tomorrow for pickup inside the store. We'll hold orders with
            fresh/frozen items until store close tomorrow
          </div>
        </div>
        <br></br>
        <div className={styles.shippingCase}>
          <div className={styles.shippingHeaders}>
            <div className={styles.insidehippingHeaders}>
              <div className={styles.shippingGreenText}>
                Same Day Delivery to{" "}
                <span className={styles.zipcode}>{this.state.zipcode}</span>
              </div>
              <div
                className={styles.changeZipCode}
                onClick={this.onZipCodeClickHandler}
              >
                Edit zip code
              </div>
              <form
                onSubmit={this.handleSubmit}
                style={this.state.showMyComponent ? {} : { display: "none" }}
              >
                <input type="text" ref={this.zipCodeInput} />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <button className={styles.shippingButton}>Deliver it</button>
          </div>
          <div className={styles.shippingBox}>
            Get it as soon as 9am tomorrow with Shipt Free with membership or
            $9.99/order <br></br>
            <span>Learn more</span>
          </div>
        </div>
        <div className={styles.giftButton}>
          <div className={styles.giftText}>Add to registry</div>
        </div>
      </div>
    );
  }
}

export default Shipping;
