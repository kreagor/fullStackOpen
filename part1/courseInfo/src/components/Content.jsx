import { Part } from "./Part"

export const Content = (props) => {
  
  // const listContent = (contentArray) => {
  //   return contentArray.map((line) => {
  //     return <p>{line}</p>
  //   })
  // }

  // return (
  //   <div> {listContent(props.content)}</div>
  // )
  return (
    <div> 
      <Part name={props.name[0]} parts={props.parts[0]}/>
      <Part name={props.name[1]} parts={props.parts[1]}/>
      <Part name={props.name[2]} parts={props.parts[2]}/>
    </div>
  )
}