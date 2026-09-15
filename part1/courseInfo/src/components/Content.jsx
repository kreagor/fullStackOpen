export const Content = (props) => {
  
  const listContent = (contentArray) => {
    return contentArray.map((line) => {
      return <p>{line}</p>
    })
  }

  return (
    <div> {listContent(props.content)}</div>
  )
}