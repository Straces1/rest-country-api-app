import Countries from "./Countries";
import HeaderAbove from "./HeaderAbove";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { BsChevronDown } from 'react-icons/bs'
import { useTheme } from './ThemeContext'



function App() {
  const [region, setRegion] = useState('https://restcountries.com/v3.1/all')
  const [country, setCountry] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const { theme } = useTheme()

  


  useEffect(() => {
    axios.get(region)
      .then(res => {
        setCountry(res.data)
      })
  }, [region])

  return (
    <div className="App"
      style={{
      //backgroundColor: 'beige'
        backgroundColor: theme === 'light' ? 'beige' : 'rgb(54,54,54)',
      }}>
      <HeaderAbove />
      <div className="header">
        <form className="search-form">
          <input 
            style={{
              backgroundColor: theme === 'light' ? 'rgb(239,239,239)' : 'rgb(104,104,104)'
            }}
            type='text' 
            onChange={event => {setSearchTerm(event.target.value)}} 
          />
        </form>
        <div className="dropdown">
        <button 
          style={{
            backgroundColor: theme === 'light' ? 'rgb(239,239,239)' : 'rgb(104,104,104)'
          }}
          className="dropdown-button">Filter by region <span><BsChevronDown /></span>
        </button>
          <div 
            className="dropdown-content"
            style={{
              background: theme === 'light' ? 'rgb(239,239,239)' : 'rgb(104,104,104)'
            }}
          >
            <button onClick={() => setRegion('https://restcountries.com/v3.1/all')}>All</button>
            <button onClick={() => setRegion('https://restcountries.com/v3.1/region/europe')}>Europe</button>
            <button onClick={() => setRegion('https://restcountries.com/v3.1/region/america')}>America</button>
            <button onClick={() => setRegion('https://restcountries.com/v3.1/region/asia')}>Asia</button>
            <button onClick={() => setRegion('https://restcountries.com/v3.1/region/africa')}>Africa</button>
            <button  onClick={() => setRegion('https://restcountries.com/v3.1/region/oceania')}>Oceania</button>
          </div>
        </div>

      </div>

      <Countries 
      country={country}
      searchTerm={searchTerm}
    
    />
    </div>
  );
}

export default App;
