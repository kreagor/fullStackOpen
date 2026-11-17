export const AddPerson = (props) => {
  return (
    <div>
    <p>name: <input value={props.nameValue} onChange={props.onChangeName}/></p>
    <p>number: <input value={props.numberValue} onChange={props.onChangeNumber}/></p>
    </div>
  )
}