import React from 'react';
import axios from 'axios';
import PhotosList from './PhotosList.jsx';
import styles from '../style.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photosList: [{ id: 9999, link: 'https://hackreactorfecproject.s3.us-east-2.amazonaws.com/Photo+unavailable.jpg' }],
      mainImage: null,
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.imageClickHandler = this.imageClickHandler.bind(this);
  }

  // On mount will set state of photos to array of photo links
  componentDidMount() {
    this.getPhotos();
  }

  // if there is a change in product id component will rerender
  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.getPhotos();
    }
  }

  // sends request to retrieve photos of product
  getPhotos() {
    axios
      .get(`/product/photos/${this.props.productId}`)
      .then((response) => {
        // defaults mainImage to first photo
        this.setState({ mainImage: response.data[0].link });
        this.setState({ photosList: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // set the side image to main image on click
  imageClickHandler(event) {
    this.setState({ mainImage: event });
  }

  // renders the 2 things: component Photoslist and main image
  render() {
    const { mainImage, photosList } = this.state;
    return (
      <div className={styles.imagesContainer}>
        <PhotosList
          photos={photosList}
          clickHandler={this.imageClickHandler}
        />
        <div>
          <div className={styles.mainImageWrapper}>
            <img
              alt=""
              className={`${styles.mainImage} ${styles.slide}`}
              src={mainImage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
