const React = require('react');
import Axios from 'axios';
import PhotosList from './PhotosList.jsx';
import MainImage from './MainImage.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.itemId || 22,
      photosList: [{id: 9999,link: "https://via.placeholder.com/300"}],
      mainImage: null
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.imageClickHandler = this.imageClickHandler.bind(this);
  }

  componentDidMount() {
    this.getPhotos(this.state.productId);
  }

  //sends request to retrieve photos of product
  getPhotos(prodId) {
    Axios.get(`http://localhost:7770/product/photos/${prodId}`)
      .then ( (response) => {
        //defaults mainImage to first photo
        this.setState({mainImage: response.data[0].link})
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
      <div className="images-container">
        <PhotosList className="photo-list"
          photos={this.state.photosList}
          clickHandler={this.imageClickHandler}
        />
        <MainImage mainImage={this.state.mainImage} />
      </div>
    )
  }
}

export default Image;