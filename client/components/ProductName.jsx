const React = require('react');

const ProductName = (props) => {
  return (
    <div>
      <div>This is the Product Name:</div>
      <div>{props.product}</div>
    </div>
  )
}

export default ProductName;