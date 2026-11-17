import { useState } from 'react'
import { Name } from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

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

  const handleSearch = (event) => {
    setSearchString(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter: <input value={searchString} onChange={handleSearch}/>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Add new</h2>
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
        {
          persons.filter((person) => 
          person.name.toLowerCase().includes(searchString)).map((person) => 
          <Name key={persons[person.name]} name={person.name} number={person.number}/>)
        }
      </div>
    </div>
  )
}

export default App
