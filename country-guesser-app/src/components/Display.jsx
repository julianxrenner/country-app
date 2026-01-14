import React from 'react'

const Display = ({countries}) => {
  if(countries.length === 1){
    const image = countries[0].flags.png
    return (
      <div>
        <p>{countries[0].name.common}</p>
        <p>The capital is: {countries[0].capital}</p>
        <p>Area: {countries[0].area}</p>
        <h2>Languages</h2>
        <h2>Flag</h2>
        <img src={image} alt="" />
      </div>
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