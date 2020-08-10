const React = require('react');
import Axios from 'axios';
import PhotosList from './PhotosList.jsx';
import MainImage from './MainImage.jsx';
import ProductName from './ProductName.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.itemId || 22,
      photosList: [{id: 9999,link: "https://via.placeholder.com/300"}],
      mainImage: {id: 9999,link: "https://via.placeholder.com/300"}
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos(this.state.productId);

  }

  //sends request to retrieve photos of product
  getPhotos(prodId) {
    Axios.get(`http://localhost:7770/product/photos/${prodId}`)
      .then ( (response) => {
        this.setState({mainImage: response.data[0]})
        //defaults mainImage to first photo
        this.setState({photosList: response.data});
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <div>This is the Image Component</div>
        <div><ProductName product={this.props.itemId}/></div>
        <div>List of images</div>
        <div><PhotosList photos={this.state.photosList}/></div>
        <div>Main Image goes here</div>
        <MainImage mainImage={this.state.mainImage}/>

      </div>
    )
  }
}

export default Image;