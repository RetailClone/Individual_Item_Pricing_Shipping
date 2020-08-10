const React = require('react');
import Image from './Image.jsx';
import Price from './Price.jsx';
import Shipping from './Shipping.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 7
    };
  }

  render() {
    return (
      <div>
        <h1>Working on Component</h1>
        <Image/>
        <Price itemId={this.state.productId}/>
        <Shipping/>
      </div>
    )
  }
}

export default App;