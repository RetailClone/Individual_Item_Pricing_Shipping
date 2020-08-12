const React = require("react");

const PhotosList = (props) => {
  return (
    <div>
      {props.photos.map((photoObj) => {
        return (
          <img
            className="single-photo"
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
