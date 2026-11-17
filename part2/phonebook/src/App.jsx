import { useState } from 'react'
import { Name } from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find(entry => entry.name.toLowerCase() == newName.toLowerCase() )) {
      alert(`${newName} is already in the phonebook`)
      setNewName('')
    } else {
      const personObject = {
        name: newName
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    const nameToAdd = event.target.value
    setNewName(nameToAdd)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <Name key={persons[person.name]} name={person.name}/>)}
      </div>
    </div>
  )
}

export default App
