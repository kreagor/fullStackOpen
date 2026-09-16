import { Part } from "./Part"

export const Content = (props) => {
  console.log("Content props:", props)
  return (
    <div> 
      <Part name={props.coursePart[0].name} exercises={props.coursePart[0].exercises}/>
      <Part name={props.coursePart[1].name} exercises={props.coursePart[1].exercises}/>
      <Part name={props.coursePart[2].name} exercises={props.coursePart[2].exercises}/>
    </div>
  )
}