import { useState } from 'react'
import { Heading } from './components/Heading'
import { Button } from './components/Button'
import { Statisics } from './components/Statisics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [responses, setResponses] = useState([])

  const HandlePostiveClick = () => {
    console.log("Positive click")
    console.log("Good:", good)
    setGood(good => good + 1)
    setResponses(responses => responses.concat(1))
  }

  const HandleNeutralClick = () => {
    console.log("Neutral click")
    console.log("Neutral:", neutral)
    setNeutral(neutral => neutral + 1)
    setResponses(responses => responses.concat(0))
  }

  const HandleNegativeClick = () => {
    console.log("Negative click")
    console.log("Bad:", bad)
    setBad(bad => bad + 1)
    setResponses(responses => responses.concat(-1))
  }

  return (
    <div>
      <Heading text='Give Feedback'/>
      <Button name='Good' onClick={HandlePostiveClick}/>
      <Button name='Neutral' onClick={HandleNeutralClick}/>
      <Button name='Bad' onClick={HandleNegativeClick}/>
      <Heading text='Statistics'/>
      <Statisics responses={responses}/>
    </div>
  )
}

export default App
