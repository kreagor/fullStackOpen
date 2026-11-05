import { Header } from "./Header"
import { Content } from "./Content"
import { Total } from "./Total"

export const Course = (props) => {
  const { course } = props
  return (
    <div>
      <Header title={course}/>
      <Content content={course}/>
      <Total course={course}/>
    </div>
  )
}