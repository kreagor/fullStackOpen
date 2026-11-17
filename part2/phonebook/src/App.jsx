import { useState } from 'react'
import { Name } from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '07876130532' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find(entry => entry.name.toLowerCase() == newName.toLowerCase() )) {
      alert(`${newName} is already in the phonebook`)
      setNewName('')
    } else {
      if (!newName) {
        alert('Name missing!')
      } else if (!newNumber) {
        alert('Number missing!')
      } else {
        const personObject = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <Name key={persons[person.name]} name={person.name} number={person.number}/>)}
      </div>
    </div>
  )
}

export default App
