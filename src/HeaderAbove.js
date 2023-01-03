import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import './HeaderAbove.css'
import { useTheme } from './ThemeContext'

function HeaderAbove() {
    const { theme, toggleTheme } = useTheme()
  return (
    <div 
        className='wraper'
        style={{
            backgroundColor: theme === 'light' ? 'rgb(239,239,239)' : 'rgb(34,34,34)'
        }}
    >
       <h1
            style={{
                color: theme === 'light' ? 'black' : 'rgb(239,239,239)'
              }}
       >Where in world?</h1>
        <button 
            style={{
                backgroundColor: theme === 'light' ? 'rgb(239,239,239)' : 'rgb(34,34,34)',
                color: theme === 'light' ? 'black' : 'rgb(239,239,239)'
            }}
            onClick={toggleTheme}>{theme === 'light' ? <BsMoon/>  : <BsSun/>}
        </button>
      </div>
  
  )
}

export default HeaderAbove
