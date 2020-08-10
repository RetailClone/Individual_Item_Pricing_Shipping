const React = require('react');
import Axios from 'axios';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      photosList: [{link: "https://via.placeholder.com/300"}]
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos(this.state.productId);
  }

  getPhotos(prodId) {
    Axios.get(`http://localhost:7770/product/photos/${prodId}`)
      .then ( (response) => {
      this.setState({photosList: response.data});
      console.log("Array of photo links", this.state.photosList);
      })
      .catch( (error) => {
        console.log(error);
      })
  }



  render() {
    return (
      <div>
        <div>This is the Image Component</div>
        <div>Name of Item goes here</div>
        <div>List of images</div>
        <div>Main Image goes here</div>

      </div>
    )
  }
}

export default Image;