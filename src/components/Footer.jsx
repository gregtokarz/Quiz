import React from "react";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div style={{border: 1, backgroundColor: '#7fbfff'}} className="text-center p-3 rounded-bottom font-italic fw-bolder">
            <Link to="/" style={{textDecoration: 'none'}}>&copy; Copyright 2022 Grzegorz Tokarz</Link>
        </div>
    );
};

export default Footer;
