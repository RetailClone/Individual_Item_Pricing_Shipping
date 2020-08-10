const React = require('react');

const ProductName = (props) => {
  return (
    <div id="product-name">
      <div>This is the Product Name:</div>
      <div>{props.product}</div>
    </div>
  )
}

export default ProductName;