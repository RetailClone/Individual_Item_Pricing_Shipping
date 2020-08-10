const React = require('react');

const SinglePhoto = (props) => {
  return (
    <div>
      <img src={props.photo.link}/>
      </div>
  )
}

export default SinglePhoto;