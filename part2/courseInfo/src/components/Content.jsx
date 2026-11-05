import { Part } from "./Part"

export const Content = (props) => {
    return (
      <>{props.content.parts.map(coursePart => <p><Part name={coursePart.name} exercises={coursePart.exercises}/></p>)}</>
  )
}
