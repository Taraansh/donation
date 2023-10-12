import React from 'react'
import '../styles/HomePage.css'
import storyimg from '../assets/story-img.jpg'

function HomeStories() {
    return (
        <div className='container my-5' style={{ color: 'white' }}>
            <div className='bg-color-1 my-3 p-5' style={{
                borderRadius: '40px', boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
            }}>
                <h1 className='text-center' style={{ fontWeight: 'bold' }}>Unsung Stories</h1>
                <div className="row" style={{ textAlign: 'center', padding: '1rem' }}>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators mt-5">
                            <button type="button" data-bs-target="#carouselExampleIndicators" style={{backgroundColor:'black'}} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" style={{backgroundColor:'black'}} data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" style={{backgroundColor:'black'}} data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={storyimg} style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', borderRadius: '22px' }} className="d-block m-auto w-75" alt="..." />
                                <div className="carousel-caption carousel-caption-story d-none d-md-block">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio est, quia corporis blanditiis expedita! Laudantium voluptatum maxime pariatur</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={storyimg} style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', borderRadius: '22px' }} className="d-block m-auto w-75" alt="..." />
                                <div className="carousel-caption carousel-caption-story d-none d-md-block">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio est, quia corporis blanditiis expedita! Laudantium voluptatum maxime pariatur</p>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <img src={storyimg} style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', borderRadius: '22px' }} className="d-block m-auto w-75" alt="..." />
                                <div className="carousel-caption carousel-caption-story d-none d-md-block">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur distinctio est, quia corporis blanditiis expedita! Laudantium voluptatum maxime pariatur</p>
                                </div>

                            </div>
                        </div>
                        <button className="carousel-control-prev carousel-btn " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon carousel-btn-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next carousel-btn " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon carousel-btn-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>                </div>
            </div>
        </div>

    )
}

export default HomeStories
