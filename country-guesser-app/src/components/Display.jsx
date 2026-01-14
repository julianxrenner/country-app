import React from 'react'

const Display = ({countries}) => {
  if(countries.length === 1){
    return (
      <div>{countries[0].name.common}</div>
    )
  }else if(countries.length > 1 && countries.length < 10){
    return (
      countries.map((place)=>(
        <p key={place.name.common}>{place.name.common}</p>
      ))
    )
  }else if(countries.length > 10){
    return(
      <p>Too many countries, please give more information</p>
    )
  }else{
    <p>Search a country</p>
  }
}

export default Display