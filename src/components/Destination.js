import Likes from "./Likes";
import Styles from './destination.module.css'
import { BiLike, BiDislike } from 'react-icons/bi'

export default function Destination(props) {
  return (
    <div className={Styles.destination}>
      <h2>{props.destinationName}</h2>
      <img src={props.imageurl} />
      <section>
        <BiLike style={{ color: "green", fontSize: "1.5em", marginRight: "2em"}}/>
        <BiDislike style={{ color: "red", fontSize: "1.5em", marginLeft: "2em"}}/>
      </section>
      <Likes 
        likes={props.likes} 
        dislikes={props.dislikes}
      />
    </div>
  )
}