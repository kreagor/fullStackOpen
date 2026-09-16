export const Total = (props) => {
  let total = 0
  for (let i = 0; i < props.toSum.parts.length; i++) {
    total += props.toSum.parts[i].exercises
  }
  return (
    <p>Total number of exercises: {total}</p>
  )
}