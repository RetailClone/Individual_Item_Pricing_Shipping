import React from "react";
import styles from "../style.css";

const PhotosList = (props) => {
  return (
    <div>
      {props.photos.map((photoObj) => {
        return (
          <img
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
