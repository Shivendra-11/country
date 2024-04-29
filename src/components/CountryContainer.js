import React from 'react'
import Data from '../Data'
import CountryCard from './CountryCard';
const CountryContainer = () => {
    console.log(Data)
  
return (
    <div className='countries-container' >
         {Data.map((country) => {
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
  )
}
export default CountryContainer;
