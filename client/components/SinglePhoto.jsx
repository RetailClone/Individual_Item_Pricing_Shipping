const React = require('react');

const SinglePhoto = (props) => {
  return (
      <img key={props.photo.id} src={props.photo.link} onClick={props.clickHandler.bind(null, props.photo.link)}/>
  )
}

export default SinglePhoto;
