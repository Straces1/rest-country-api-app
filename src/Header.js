import React from 'react'

function Header(props) {

    function updateRegion() {
        alert('europe from child has been clicked')
        props.setRegion('')
    }

  return (
    <div style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        spacing: '300px'

    }}>
      <form><input /></form>
      <form>
        <button onClick={updateRegion}>Europe from child</button>
        {/* <select>
            <option>All</option>
            <option onClick={() => alert('clicked')}>Europe</option>
            <option>America</option>
            <option>Asia</option>
            <option>Oceania</option>
            <option>Africa</option>
        </select> */}
    </form>
    </div>
  )
}

export default Header
