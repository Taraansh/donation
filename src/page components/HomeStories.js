import React from 'react'
import '../styles/HomePage.css'
import logo from '../assets/brown puppy.png'

function HomeStories() {
    return (
        <div className='container' style={{ color: 'white' }}>
            <div className='bg-color-1 my-3 p-5' style={{ borderRadius: '40px' }}>
                <h1 className='text-center' style={{ fontWeight: 'bold' }}>Unsung Stories</h1>
                <div className="row" style={{ textAlign: 'center', padding: '1rem' }}>
                    <div className="col-sm p-4">
                        <div className="card story-card" >
                            <img src={logo} alt="story-img" style={{ borderRadius: '10px' }}/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text" style={{fontWeight:'bold'}}>-Via NGO_NAME</p>
                            </div>
                            <button style={{ borderRadius: '0 0 10px 10px' }} className='btn btn-primary'>Read More...</button>
                        </div>
                    </div>
                    <div className="col-sm p-4">
                        <div className="card story-card" >
                            <img src={logo} alt="story-img"style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text" style={{fontWeight:'bold'}}>-Via NGO_NAME</p>
                            </div>
                            <button style={{ borderRadius: '0 0 10px 10px' }} className='btn btn-primary'>Read More...</button>
                        </div>
                    </div>
                    <div className="col-sm p-4">
                        <div className="card story-card" >
                            <img src={logo} alt="story-img" style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text" style={{fontWeight:'bold'}}>-Via NGO_NAME</p>
                            </div>
                            <button style={{ borderRadius: '0 0 10px 10px' }} className='btn btn-primary'>Read More...</button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ textAlign: 'center', padding: '1rem' }}>
                    <div className="col-sm p-4">
                        <div className="card story-card" >
                            <img src={logo} alt="story-img" style={{ borderRadius: '10px' }}/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text" style={{fontWeight:'bold'}}>-Via NGO_NAME</p>
                            </div>
                            <button style={{ borderRadius: '0 0 10px 10px' }} className='btn btn-primary'>Read More...</button>
                        </div>
                    </div>
                    <div className="col-sm p-4">
                        <div className="card story-card" >
                            <img src={logo} alt="story-img"style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text" style={{fontWeight:'bold'}}>-Via NGO_NAME</p>
                            </div>
                            <button style={{ borderRadius: '0 0 10px 10px' }} className='btn btn-primary'>Read More...</button>
                        </div>
                    </div>
                    <div className="col-sm p-4">
                        <div className="card story-card" >
                            <img src={logo} alt="story-img" style={{ borderRadius: '10px' }} />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text" style={{fontWeight:'bold'}}>-Via NGO_NAME</p>
                            </div>
                            <button style={{ borderRadius: '0 0 10px 10px' }} className='btn btn-primary'>Read More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeStories
