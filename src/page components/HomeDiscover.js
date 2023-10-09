import React from 'react'
import logo from '../assets/brown puppy.png'
function HomeDiscover() {
  return (
    <div className='container' style={{color:'white'}}>
      <div className='bg-color-1 my-3 p-5 home-discover-menu' >
        <div id='menu-left'>
            <h1 style={{marginBottom:'57px', fontSize:'4rem', fontWeight:'bold'}}>Discover NGO's</h1>
            <form action="submit" style={{display:'flex', alignItems:'center'}}>
                <input className='mx-2 menu-left-input' placeholder='Enter Your Location' type="text" />
                <button className='btn btn-primary' style={{fontSize:'1.8rem', padding:'10px'}} >submit</button>
            </form>
        </div>
        <div id='menu-right' style={{textAlign:'center'}}>
        <img style={{ margin: 'auto', borderRadius: '40px', width:'65%' }} src={logo}  alt="Bootstrap" />
        </div>
      </div>
      <div className='bg-color-1 p-5' style={{borderRadius: '40px'}}>yoo</div>
    </div>
  )
}

export default HomeDiscover
