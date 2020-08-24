import React from 'react';
import styles from '../style.css';

// this is the side column of images
const PhotosList = (props) => {
  return (
    <div className={styles.photoListContainer}>
      {props.photos.map((photoObj) => {
        return (
          <img
            alt=""
            className={styles.singlePhoto}
            key={photoObj.id}
            src={photoObj.link}
            onClick={props.clickHandler.bind(null, photoObj.link)}
          />
        );
      })}
    </div>
  );
};

export default PhotosList;
