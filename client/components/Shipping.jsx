const React = require("react");

const Shipping = () => {
  return (
    <div className="shipping-contents">
      <div>This is the Shipping Component</div>
      <div className="shipping-headers">
        <div className="shipping-green-text">
          Pick up tomorrow at <span>Austin</span>
        </div>
        <button className="shipping-button">Pick it up</button>
      </div>
      <div className="shipping-box">
        Aenean commodo augue quis sapien lacinia tincidunt id nec turpis. Fusce
        dignissim neque sit amet arcu bibendum luctus. Praesent fermentum
        aliquam nulla finibus facilisis.
      </div>
      <br></br>
      <div className="shipping-headers">
        <div className="shipping-green-text">
          Same Day Delivery to <span>78727</span>
        </div>
        <button className="shipping-button">Deliver it</button>
      </div>
      <div className="shipping-box">
        Aenean commodo augue quis sapien lacinia tincidunt id nec turpis. Fusce
        dignissim neque sit amet arcu bibendum luctus. Praesent fermentum
        aliquam nulla finibus facilisis.
      </div>
    </div>
  );
};

export default Shipping;
