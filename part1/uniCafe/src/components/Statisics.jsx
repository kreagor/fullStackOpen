export const Statisics = (props) => {
    const good = props.responses.filter(x => x == 1)
    const neutral = props.responses.filter(x => x == 0)
    const bad = props.responses.filter(x => x == -1)
    const total = props.responses.length
    const average = props.responses.reduce((x, y) => x + y, 0 ) / props.responses.length
    const positive = props.responses.filter(x => x == 1).length / props.responses.length * 100
    
    if (props.responses.length < 1) {
      return <p>No feedback given</p>
    } else {
    return (
      <div>
        <p>Good: {good == [] ? 0 : good.length}</p>
        <p>Neutral: {neutral == [] ? 0 : neutral.length}</p>
        <p>Bad: {bad == [] ? 0 : bad.length}</p>
        <p>Total: {total}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}</p>
      </div>
    )
  }
}
