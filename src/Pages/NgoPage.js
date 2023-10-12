import React from 'react'
import '../styles/NgoPage.css'
import NgoProfileContainer from '../page components/NgoProfileContainer'
function NgoPage() {
  return (
    <>

      <div className='container-xl bg-color-1 py-4 ngo-front-container' >
        <div >
          <h1 style={{ marginBottom: '30px', fontSize: '4rem', fontWeight: 'bold', color: 'white' }}>Discover NGO's</h1>
          <form action="submit" style={{ display: 'flex', alignItems: 'center' }}>
            <input className='mx-2 ngo-input' placeholder='Enter Your Location' type="text" />
            <button className='btn btn-primary' style={{ fontSize: '1.8rem', padding: '10px' }} >submit</button>
          </form>
        </div>
      </div>
    <NgoProfileContainer/>
    </>
  )
}

export default NgoPage
