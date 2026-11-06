export const Header = (props) => {
  console.log("HEADER PROPS", props)
  const { title } = props
  return (
    <h1>{title.name}</h1>
  )
}