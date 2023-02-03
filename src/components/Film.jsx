import React from "react";
import logo from '../img/film.jpg';
import star from '../img/gstar.svg';
import axios from 'axios';
import {Link} from "react-router-dom";
import Description from "./Description";

// Passing configuration object to axios



const Film = (props) => {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get('https://at.usermd.net/api/movies').then((response) => {
            setData(response.data);
        });
    }, []);

    if (!data) return null;
    return (
        <div className="d-flex flex-row flex-wrap justify-content-center p-5">
            {data.map(option => (
                <Link  style={{textDecoration: "none"}} to="../description" relative="path" key={option.id} state={option.id} >
        <div className='rounded-top' style={{width: '400px', height: '500px', backgroundColor: '#c9c2c1', margin: 15}}>
            <div className="text-center bg-info text-white fs-3 fw-bolder rounded-top border">{option.title}</div>

            <div className="bg-warning text-white rounded-bottom mb-1 text-center">{option.content==null?"":(option.content.substring(0,40)+'...')}</div>
            <img className="rounded mx-auto d-block" src={option.image} style={{height: '420px', width: '300px'}} alt={'brak obrazu'}  />


        </div>
                </Link>))}
        </div>
    );
};

export default Film;
