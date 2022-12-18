import React from 'react'
import  futbol  from '../img/futbol-carrusel.jpg'
import  basquet  from '../img/basquetbol-carrusel.jpg'
import tenis  from '../img/tenis-carrusel.jpg'
import { Footer } from './Footer'
import { HeaderLogin } from './HeaderLogin'

export const LoginView = () => {
    return (
        <>
        <HeaderLogin/>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <h1>Logo</h1>
                </div>
                <div className='col-6'>
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="1000">
                                <img src={futbol} class="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={basquet} class="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={tenis} class="d-block w-100" alt="..." />
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
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}
