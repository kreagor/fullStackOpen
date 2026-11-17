export const Filter = (props) => {
  return (
    <div>
      filter: <input value={props.value} onChange={props.onChange}/>
    </div>
  )
}