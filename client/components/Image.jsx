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
      name: 'Product Name',
      photosList: [{id: 9999,link: "https://via.placeholder.com/300"}],
      mainImage: null
    };
    this.getName = this.getName.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.imageClickHandler = this.imageClickHandler.bind(this);
  }

  componentDidMount() {
    this.getPhotos(this.state.productId);
    this.getName(this.state.productId);
  }

  //sends request to retrieve name of product
  getName(prodId) {
    Axios.get(`http://localhost:7770/product/name/${prodId}`)
      .then ( (response) => {
      this.setState({name: response.data.name});
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  //sends request to retrieve photos of product
  getPhotos(prodId) {
    Axios.get(`http://localhost:7770/product/photos/${prodId}`)
      .then ( (response) => {
        this.setState({mainImage: response.data[0].link})
        //defaults mainImage to first photo
        this.setState({photosList: response.data});
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  imageClickHandler(event) {
    this.setState({mainImage: event});
  }

  render() {
    return (
      <div id="image-module">
        <ProductName product={this.state.name} />
        <PhotosList
          photos={this.state.photosList}
          clickHandler={this.imageClickHandler}
        />
        <MainImage mainImage={this.state.mainImage} />
      </div>
    )
  }
}

export default Image;