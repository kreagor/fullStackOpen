import { Name } from "./Name"

export const DisplayPersons = (props) => {
  return (
    <div>
      {
        props.persons.filter((person) => 
        person.name.toLowerCase().includes(props.searchString)).map((person) => 
        <Name key={props.persons[person.name]} name={person.name} number={person.number}/>)
      }
    </div>
  )
}