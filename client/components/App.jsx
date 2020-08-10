const React = require('react');
import Image from './Image.jsx';
import Price from './Price.jsx';
import Shipping from './Shipping.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 24
    };
  }

  render() {
    return (
      <div>
        <h1>INDIVIDUAL Product Component</h1>
        <Image itemId={this.state.productId}/>
        <Price itemId={this.state.productId}/>
        <Shipping/>
      </div>
    )
  }
}

export default App;