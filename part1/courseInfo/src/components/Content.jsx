import { Part } from "./Part"

export const Content = (props) => {
  console.log("Content props:", props)
  return (
    <div> 
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </div>
  )
}