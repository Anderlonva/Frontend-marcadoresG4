import React from 'react'
import futbol from '../img/futbol-carrusel.jpg'
import basquet from '../img/basquetbol-carrusel.jpg'
import tenis from '../img/tenis-carrusel.jpg'

export const LoginCarrusel = () => {
    return (
        
        <div id="carouselExampleInterval" className="carousel slide mx-5 mt-3" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src={futbol} className="d-block img-carrusel" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={basquet} className="d-block  img-carrusel" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={tenis} className="d-block  img-carrusel" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
