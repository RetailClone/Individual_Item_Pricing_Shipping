const React = require('react');

const SinglePhoto = (props) => {
  return (
      <img key={props.photo.id} src={props.photo.link}/>
  )
}

export default SinglePhoto;