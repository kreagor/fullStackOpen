export const Statisics = (props) => {
  console.log('responses:', props.responses)
  console.log('text:', props.text)
    let output
    if(props.responses.length < 1) {
      output = 0
    } else if (props.text == 'Total') {
      output = props.responses.length
    } else if (props.text == 'Average') {
      output = props.responses.reduce((x, y) => x + y, 0 ) / props.responses.length
    } else if (props.text == 'Positive') {
      output = props.responses.filter(x => x == 1).length / props.responses.length * 100
    }
    return (
      <p>{props.text}: {output}</p>
    )
  }
