import { useState, useEffect } from 'react'
import countryService from './services/country'
import Display from './components/Display'


function App() {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState(null)
  const [filter, setFilter] = useState([])

  useEffect(()=>{
    countryService.getAllCountries().then(initialCountries => setCountry(initialCountries))
  }, [])

  if(!country){
    return null
  }

  const handleSearch = (event) =>{
    setSearch(event.target.value)
    setFilter(country.filter(place => place.name.common.includes(search)))
  }
  
  return (
    <>
      <div>
        <p>find countries <input type="text" onChange={handleSearch}></input></p>
      </div>
      <Display countries={filter}/>
    </>
  )
}

export default App
