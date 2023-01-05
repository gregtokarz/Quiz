import React from "react";
import logo from '../img/film.jpg';
import star from '../img/gstar.svg';

const Film = () => {
    return (
        <a href="description" style={{textDecoration: 'none'}}>
        <div class='rounded-top' style={{width: '300px', height: '300px', backgroundColor: '#c9c2c1'}}>
            <div className="text-center bg-info text-white fs-3 fw-bolder rounded-top border">Zielona Mila</div>

            <div className="bg-warning text-white rounded-bottom mb-1 text-center">
                <img className=" " src={star} style={{height: '15px'}}/>
                Rating: 8,6</div>
            <img class="rounded mx-auto d-block" src={logo} style={{ height: '70%',  margin: 'auto'}}  />


        </div>
        </a>
    );
};

export default Film;
