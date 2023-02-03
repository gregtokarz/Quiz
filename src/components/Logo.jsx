import React from 'react';
import img from '../img/movie2.svg';
import {Link} from "react-router-dom";

const Logo = (props) => {

    return (
        <Link to="/"  className="nav-link" style={{textDecoration: 'none'}}>
        <div className='p-4  bg-success text-white d-flex flex-row bd-highlight border-dark border border-bottom-0 border-success'>
            <img src={img} alt="React Logo" width='80px' />
            <div className="align-self-center">
                <div className="fs-1 fw-bolder ms-2">Movie<span style={{color: 'blue'}}>Base</span>.pl</div>
            </div>
        </div>
        </Link>

    )
};

export default Logo;
