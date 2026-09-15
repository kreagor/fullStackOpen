export const Total = (props) => {
  let total = 0
  for (let i = 0; i < props.toSum.length; i++) {
    total += props.toSum[i]
  }
  return (
    <p>{total}</p>
  )
}