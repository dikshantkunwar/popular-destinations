import Likes from "./Likes";
import Styles from './destination.module.css'

export default function Destination(props) {
  return (
    <div className={Styles.destination}>
      <h2>{props.destionationName}</h2>
      <img src={props.imageurl} />
      <Likes 
        likes={props.likes} 
        dislikes={props.dislikes}
      />
    </div>
  )
}