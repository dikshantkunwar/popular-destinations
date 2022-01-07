import Likes from "./Likes";
import Styles from './destination.module.css'
import { BiLike, BiDislike } from 'react-icons/bi'

export default function Destination(props) {
  return (
    <div className={Styles.destination}>
      <h2>{props.destionationName}</h2>
      <img src={props.imageurl} />
      <section>
        <button><BiLike /></button>
        <button><BiDislike /></button>
      </section>
      <Likes 
        likes={props.likes} 
        dislikes={props.dislikes}
      />
    </div>
  )
}