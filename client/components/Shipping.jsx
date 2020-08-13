import React from "react";
import styles from "../style.css";

const Shipping = () => {
  return (
    <div className={styles.shippingContents}>
      <div>This is the Shipping Component</div>
      <div className={styles.shippingHeaders}>
        <div className={styles.shippingGreenText}>
          Pick up tomorrow at <span>Austin</span>
        </div>
        <button className={styles.shippingButton}>Pick it up</button>
      </div>
      <div className={styles.shippingBox}>
        Aenean commodo augue quis sapien lacinia tincidunt id nec turpis. Fusce
        dignissim neque sit amet arcu bibendum luctus. Praesent fermentum
        aliquam nulla finibus facilisis.
      </div>
      <br></br>
      <div className={styles.shippingHeaders}>
        <div className={styles.shippingGreenText}>
          Same Day Delivery to <span>78727</span>
        </div>
        <button className={styles.shippingButton}>Deliver it</button>
      </div>
      <div className={styles.shippingBox}>
        Aenean commodo augue quis sapien lacinia tincidunt id nec turpis. Fusce
        dignissim neque sit amet arcu bibendum luctus. Praesent fermentum
        aliquam nulla finibus facilisis.
      </div>
    </div>
  );
};

export default Shipping;
