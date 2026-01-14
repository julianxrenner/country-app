import React from 'react'

const Display = ({countries}) => {
  if(countries.length > 10)
  return (
    <div>Too many countries</div>
  )
  if(countries.length < 10 && countries.length > 1){
    return(
      countries.map((country) => <div key={country.name.commom}>{country.name.commom}</div>)
    )
  }
  if(countries.length ===1){
    return(countries.map(country => country.name.common))
  }
}

export default Display