export const Anecdote = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
        <p>{props.anecdote}</p>
        <p>has {props.votes} votes</p>
    </div>
  )
}