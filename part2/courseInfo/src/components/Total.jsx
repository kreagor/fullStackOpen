export const Total = (props) => {
  const parts = props.course.parts.map((part => part.exercises ))
  const total = parts.reduce((x, y) => x + y, 0)
  return (
    <p>Total number of exercises: {total}</p>
  )
}