import { Header } from "./Header"
import { Content } from "./Content"

export const Course = (props) => {
  return (
    <div>
      <Header heading={props.course}/>
      <Content content={props.course} length={props.course.parts.length}/>
    </div>
  )
}