import React from "react";
import styles from "../style.css";

const Shipping = () => {
  return (
    <div className={styles.shippingContents}>
      <div>This is the Shipping Component</div>
      <div className={styles.shippingCase}>
        <div className={styles.shippingHeaders}>
          <div className={styles.shippingGreenText}>
            Pick up tomorrow at <span>Austin</span>
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
          <div className={styles.shippingGreenText}>
            Same Day Delivery to <span>78727</span>
          </div>
          <button className={styles.shippingButton}>Deliver it</button>
        </div>
        <div className={styles.shippingBox}>
          Get it as soon as 9am tomorrow with Shipt Free with membership or
          $9.99/order <br></br>
          <span>Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
