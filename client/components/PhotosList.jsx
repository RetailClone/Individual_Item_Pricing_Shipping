const React = require('react');
import SinglePhoto from "./SinglePhoto.jsx"

const PhotosList = (props) => {
  console.log("this is props",props.photos)
  return (
    <div>
       {props.photos.map((photoObj) => {
         return <SinglePhoto photo={photoObj}/>
       })}
    </div>
  )
}


export default PhotosList;