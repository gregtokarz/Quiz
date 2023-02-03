import React from "react";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div style={{border: 1}} className="bg-primary text-center p-3 rounded-bottom font-italic fw-bolder">
            <Link to="/"  className="nav-link" style={{textDecoration: 'none'}}>&copy; Copyright 2022 Grzegorz Tokarz</Link>
        </div>
    );
};

export default Footer;
