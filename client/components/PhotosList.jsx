const React = require('react');
import SinglePhoto from "./SinglePhoto.jsx"

const PhotosList = (props) => {
  return (
    <div>
       {props.photos.map((photoObj) => {
         return <SinglePhoto key={photoObj.id} photo={photoObj}/>
       })}
    </div>
  )
}


export default PhotosList;