import { useState, useEffect } from 'react'
import countryService from './services/country'


function App() {
  const [search, setSearch] = useState('')

  useEffect(()=>{
    countryService.getCountry(search)
  }, [search])

  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }

  return (
    <>
      <div>
        <input type="text" onChange={handleSearch}/>
        <p>{search}</p>
      </div>
    </>
  )
}

export default App
