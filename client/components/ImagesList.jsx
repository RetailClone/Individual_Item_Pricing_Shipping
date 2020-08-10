const React = require('react');

const ImagesList = (props) => {
  return (
  <div className="side-images">
    {props.photoList.map( (photoObj) => {
      return <SinglePhoto photo={photoObj}/>
    })}
  </div>
  )
}
export default ImagesList;