import React, { useState } from 'react'
import Data from '../Data'
import CountryCard from './CountryCard';
const CountryContainer = ({query}) =>
  {




return (
  <>
    <div className='countries-container' >
        { Data.filter((country)=> country.name.common.toLowerCase().includes(query)).map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        )
      })}
    
    </div>
  </> 
  )
}
export default CountryContainer;
