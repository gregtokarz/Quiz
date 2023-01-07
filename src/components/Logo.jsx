import React from 'react';
import img from '../img/movie2.svg';

const Logo = (props) => {

    return (
        <div class='p-4  bg-success text-white d-flex flex-row bd-highlight border-dark border border-bottom-0 border-success'>
            <img src={img} alt="React Logo" width='80px' />
            <div><p className="fs-1 fw-bolder ms-2">Movie</p></div>
            <div><p className="fs-1 fw-bolder" style={{color: 'blue'}}>Base</p></div>
            <div><p className="fs-1 fw-bolder">.pl</p></div>
        </div>

    )
};

export default Logo;
