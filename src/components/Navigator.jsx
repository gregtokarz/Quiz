import {Link} from "react-router-dom";
import Search from "./Search";
import React from "react";
import App from "../App";

function Navigator() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#7fbfff'}}>
        <div className="collapse navbar-collapse "  id="navbarText">
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item active rounded ">
                    <Link to="/" className="nav-link fs-4 fw-bold border-3 border-end border-danger">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="../signin" relative="path" className="nav-link fs-4 fw-bold border-3 border-end border-danger">Logowanie</Link>
                </li>
                <li className="nav-item">
                    <Link to="../signup" relative="path" className="nav-link fs-4 fw-bold border-3 border-end border-danger">Rejestracja</Link>
                </li>
                <li className="nav-item">
                    <Link to="../add" relative="path" className="nav-link fs-4 fw-bold">Dodaj film</Link>
                </li>
            </ul>
        </div>
        <Search/>
    </nav>)
}

export default Navigator;
