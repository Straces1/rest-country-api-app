import React from 'react'
import './countries.css'
import { useTheme } from './ThemeContext'

function Countries({ country, searchTerm }) {
  const { theme } = useTheme()

  return (
    <div style={{
        padding: '10vw',
        display: 'grid',
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        rowGap: '30px'
    }}>
      {country.filter((val) => {
        if (searchTerm === "") {
          return val
        } else if (val.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        } return null
      }).map(country => (
        
        <div 
            key={country.name.common}
            className='card'
            style={{
              backgroundColor: theme === 'light' ? 'rgb(239,239,239)' : 'rgb(104,104,104)'
            }}
        >
            <img 
                src={country.flags.svg} 
                alt={country.name.common}
            />    
            <div 
              className='description'
              
            >
                <h3>{country.name.common}</h3>
                <p><b>Population: </b>{country.population}</p>
                <p><b>Capital: </b>{country.capital}</p>
                {/* <p><b>Currency: </b>{country.currency}</p> */}
            </div>
        </div>
        
      ))}
    </div>
  )
}

export default Countries
