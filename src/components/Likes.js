export default function Likes(props) {
  return (
    // Like Btn
    // Unlike Btn
    <>
      <span>Likes: { props.likes }</span>
      <span>Dislikes: { props.dislikes }</span>
    </>
  )
}