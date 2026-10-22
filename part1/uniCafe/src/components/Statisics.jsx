import { StatisicLine } from "./StatisticLine"

export const Statisics = (props) => {
    const good = props.responses.filter(x => x == 1).length
    const neutral = props.responses.filter(x => x == 0).length
    const bad = props.responses.filter(x => x == -1).length
    const total = props.responses.length
    const average = props.responses.reduce((x, y) => x + y, 0 ) / props.responses.length
    const positive = props.responses.filter(x => x == 1).length / props.responses.length * 100
    
    if (props.responses.length < 1) {
      return <p>No feedback given</p>
    } else {
    return (
      <div>
        <table>
          <thead>
            <StatisicLine text="Good" value={good == [] ? 0 : good}/>
            <StatisicLine text="Neutral" value={neutral == [] ? 0 : neutral}/>
            <StatisicLine text="Bad" value={bad == [] ? 0 : bad}/>
            <StatisicLine text="Total" value={total}/>
            <StatisicLine text="Average" value={average}/>
            <StatisicLine text="Positive" value={positive}/>
          </thead>
        </table>
        
      </div>
    )
  }
}
// export const Statisics = (props) => {
//     let output
//     if(props.responses.length < 1) {
//       output = 0
//     } else if (props.text == 'Total') {
//       output = props.responses.length
//     } else if (props.text == 'Average') {
//       output = props.responses.reduce((x, y) => x + y, 0 ) / props.responses.length
//     } else if (props.text == 'Positive') {
//       output = props.responses.filter(x => x == 1).length / props.responses.length * 100
//     }
//     if (output == 0) {
//       return <p>No feedback given</p>
//     } else {
//     return (
//       <p>{props.text}: {output}</p>
//     )
//   }
// }