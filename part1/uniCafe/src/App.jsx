import { useState } from 'react'
import { Heading } from './components/Heading'
import { Button } from './components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [responses, setAverage] = useState([])

  const HandlePostiveClick = () => {
    console.log("Positive click")
    console.log("Good:", good)
    setGood(good => good + 1)
    setAverage(responses => responses.concat(1))
  }

  const HandleNeutralClick = () => {
    console.log("Neutral click")
    console.log("Neutral:", neutral)
    setNeutral(neutral => neutral + 1)
    setAverage(responses => responses.concat(0))
  }

  const HandleNegativeClick = () => {
    console.log("Negative click")
    console.log("Bad:", bad)
    setBad(bad => bad + 1)
    setAverage(responses => responses.concat(-1))
  }

  const calculate = (type) => {
    const positiveResponses = responses.filter(x => x == 1)
    if(responses.length < 1) {
      return 0
    } else if (type == "average") {
      return responses.reduce((x, y) => x + y, 0 ) / responses.length
    } else if (type == "positivePercentage") {
      return positiveResponses.length / responses.length * 100
    }
  }

  return (
    <div>
      <Heading text='Give Feedback'/>
      <Button name='Good' onClick={HandlePostiveClick}/>
      <Button name='Neutral' onClick={HandleNeutralClick}/>
      <Button name='Bad' onClick={HandleNegativeClick}/>
      <Heading text='Statistics'/>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Average: {calculate("average")}</p>
      <p>Positive: {calculate("positivePercentage")}</p>
    </div>
  )
}

export default App
